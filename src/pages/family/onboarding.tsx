import ArrowBackward from '@components/Icons/ArrowBackward';
import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import { stepsToComponentMapping } from '@core/config/patient';
import { setStep, showGuideStepHide } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import { familyOnboardingValidationSchema } from '@core/validation/family';
import OnboardingSteps from '@modules/Family/OnboardingSteps/OnboardingSteps';
import { OnBoardingFields } from '@typings/onboarding';
import { getYesNoValue } from '@utils/common';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactJoyride from 'react-joyride';
import Drawer from 'react-modern-drawer';
import { useMediaQuery } from 'react-responsive';
import * as Yup from 'yup';

const OnboardingPage: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingUp, setSettingUp] = useState(false);
  const family = useAppSelector((state) => state.auth.family);
  const [run, setRun] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [steps, setSteps] = useState([]);
  const showGuideStep = useAppSelector((state) => state.auth.showGuideStep);

  const initialValues: OnBoardingFields = {
    state: family?.state || null,
    familyMembersCount: family?.familyMembersCount ? String(family.familyMembersCount) : null,
    familyMembersInCollege: family?.familyMembersInCollege
      ? String(family?.familyMembersInCollege)
      : '0',
    primaryResidence: family?.primaryResidence || null,
    annuitiesAmount: family?.annuitiesAmount ? String(family?.annuitiesAmount) : null,
    businessAssetsAmount: family?.businessAssetsAmount
      ? String(family?.businessAssetsAmount)
      : null,
    residenceEquity: family?.residenceEquity ? String(family?.residenceEquity) : null,
    ownsInvestmentProperty: getYesNoValue(family?.ownsInvestmentProperty) || null,
    investmentEquity: family?.investmentEquity ? String(family?.investmentEquity) : null,
    isRealEstateLLCOrBusiness: getYesNoValue(family?.isRealEstateLLCOrBusiness) || null,
    hasLifeInsuranceAccount: getYesNoValue(family?.hasLifeInsuranceAccount) || null,
    insuranceAmount: family?.insuranceAmount ? String(family?.insuranceAmount) : null,
    hasBusinessAssets: getYesNoValue(family?.hasBusinessAssets) || null,
    hasAnnuities: getYesNoValue(family?.hasAnnuities) || null,
    hasTaxableBrokerageAccounts: getYesNoValue(family?.hasTaxableBrokerageAccounts) || null,
    taxableBrokerageAccountsAmount: family?.taxableBrokerageAccountsAmount
      ? String(family?.taxableBrokerageAccountsAmount)
      : null,
    checkingAmount: family?.checkingAmount ? String(family?.checkingAmount) : null,
    hasCollegeSavingsAccounts: getYesNoValue(family?.hasCollegeSavingsAccounts) || null,
    collegeSavingsAccountsAmount: family?.collegeSavingsAccountsAmount
      ? String(family?.collegeSavingsAccountsAmount)
      : null,
    retirementPlan: getYesNoValue(family?.retirementPlan) || null,
    annualRetirementAmount: family?.checkingAmount ? String(family?.annualRetirementAmount) : null,

    parents: family?.parents?.length
      ? family?.parents.map((parent) => {
          return {
            parentId: parent.id,
            firstName: parent.firstName || null,
            lastName: parent.lastName || null,
            age: parent.age || null,
            maritalStatus: parent.maritalStatus || null,
            annualIncome: String(parent.annualIncome),
            filingStatus: parent?.filingStatus || null,
            standardDeduction: parent?.standardDeduction || null,
            taxableIncome: parent?.taxableIncome || null,
          };
        })
      : [
          {
            firstName: null,
            lastName: null,
            age: undefined,
            maritalStatus: null,
            annualIncome: null,
            filingStatus: null,
            standardDeduction: null,
            taxableIncome: null,
          },
        ],
    students: family?.students.length
      ? family?.students.map((student) => {
          return {
            studentId: student.id,
            name: student.name || null,
            graduationYear: String(student.graduationYear) || null,
            overallStudentType: student.overallStudentType || null,
            hasTrustAccount: getYesNoValue(student.hasTrustAccount) || null,
            gpa: String(student.gpa) || null,
            sat: String(student.sat) || null,
            act: String(student.act) || null,
            hasFiledTaxes: getYesNoValue(student.hasFiledTaxes) || null,
            hasIncome: getYesNoValue(student.hasIncome) || null,
            incomeAmount: String(student.incomeAmount) || null,
            hasSavingsAccount: getYesNoValue(student.hasSavingsAccount) || null,
            savingsAmount: String(student.savingsAmount) || null,
          };
        })
      : [
          {
            name: null,
            graduationYear: null,
            overallStudentType: null,
            hasTrustAccount: null,
            gpa: null,
            sat: null,
            act: null,
            hasFiledTaxes: null,
            hasIncome: null,
            incomeAmount: null,
            hasSavingsAccount: null,
            savingsAmount: null,
          },
        ],
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: Yup.object().shape({
      ...familyOnboardingValidationSchema,
    }),
    onSubmit(values) {},
  });

  useEffect(() => {
    if (router.query.currentStepIndex) {
      dispatch(setStep(Number(router.query.currentStepIndex)));
    }
  }, [dispatch, router.query.currentStepIndex]);

  useEffect(() => {
    setSteps(guideSteps);
    setStepIndex(0);
    setRun(true);
  }, []);

  const onboarding = useAppSelector((state) => state.auth.onboarding);

  if (settingUp) {
    return <div />;
  }

  const CustomStepContent = ({ title, description, buttonTitle, index }) => (
    <div className="space-y-4 px-2">
      <div className="flex space-x-2">
        {index > 0 && (
          <div onClick={() => setStepIndex(index - 1)}>
            <ArrowBackward />
          </div>
        )}

        <Typography className="font-semibold text-left">{title}</Typography>
      </div>
      <div>{description}</div>

      <div className="flex justify-center space-x-1">
        {Array.from([0, 1, 2, 3]).map((i) => {
          return (
            <span
              key={i}
              className={`${i < index ? 'bg-action' : 'bg-gray-200'} w-2 h-2 rounded-xl`}
            />
          );
        })}
      </div>
      <div
        onClick={() => {
          setStepIndex(index + 1);
          if (index === 4) {
            dispatch(showGuideStepHide());
          }
        }}
        className="rounded-md w-full p-4 bg-mainBlue">
        <Typography variation="title3" className="text-white cursor-pointer ">
          {buttonTitle}
        </Typography>
      </div>
    </div>
  );

  const guideSteps = [
    {
      target: 'body',
      placement: 'center',
      content: (
        <CustomStepContent
          index={0}
          title="Welcome to College Cost Secrets"
          buttonTitle="Step 1: Let's understand your finances"
          description={
            <>
              <Typography className="text-dark text-left" variation="description1">
                Our goal is to not only get your child into their dream college but also to make it
                as affordable as possible for your family. Here&apos;s what we need from you
              </Typography>
              <ol className="mt-2 space-y-4">
                <li>
                  <Typography className="text-dark text-left" variation="description1">
                    <strong>1. Assess Your Financial Landscape</strong>: We&apos;ll start by getting
                    a clear picture of your finances to understand what you can comfortably afford.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-dark text-left" variation="description1">
                    <strong>2. Discover Your “SAI” or “`&apos;Family Share”</strong>: Calculate your
                    expected family contribution to know what you can expect to pay and what
                    financial aid you may need.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-dark text-left" variation="description1">
                    <strong>3. Target Ideal Colleges with Expert Support</strong>: Find the best
                    college matches and get personalized help from our admissions experts on test
                    prep, applications, essays, and more, ensuring your child&apos;s application
                    stands out.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-dark text-left" variation="description1">
                    <strong>4. Let’s save you money</strong>: We guide you on how to maximize your
                    savings and uncover the most effective ways to reduce college costs
                  </Typography>
                </li>
              </ol>
            </>
          }
        />
      ),
    },
    {
      target: '#Profile',
      content: (
        <>
          <CustomStepContent
            index={1}
            title="Step 1: Assess Your Financials"
            buttonTitle="Step 2: Calculate your Federal SAI"
            description={
              <Typography className="text-dark text-left" variation="description1">
                Let&apos;s review your finances to figure out your “SAI” or “Family Share” for
                college costs. This isn&apos;t just about what you can pay; it&apos;s also about
                spotting savings and discounts on tuition you might be missing out on.
              </Typography>
            }
          />
        </>
      ),
    },
    {
      target: '#FederalSai',
      content: (
        <CustomStepContent
          index={2}
          title="Step 2: Let’s calculate your “SAI” or “Family Share”"
          buttonTitle="Step 3: Find the right College"
          description={
            <Typography className="text-dark text-left" variation="description1">
              Think of the &apos;Family Share&apos; like a budget estimate for college: If your
              family&apos;s &apos;Share&apos; is $15,000, that&apos;s the amount you&apos;re
              expected to pay for the year, and it helps colleges figure out how much more in grants
              and scholarships you need to cover the rest of the tuition and expenses
              <br />
              <p className="mt-2">
                For example - Let&apos;s say College A costs $30,000 per year to attend. After
                calculating your &apos;Family Share&apos; to be $10,000 based on your family&apos;s
                finances, College A will then use this number to offer you financial aid,
                potentially covering the remaining $20,000 with grants, loans, and scholarships.
              </p>
            </Typography>
          }
        />
      ),
    },
    {
      target: '#SearchColleges',
      content: (
        <CustomStepContent
          index={3}
          title="Step 3: Target Ideal Colleges with Expert Support"
          buttonTitle="Step 4: Optimize your savings"
          description={
            <Typography className="text-dark text-left" variation="description1">
              We help you find colleges that fit your budget and your child&apos;s dreams. We make
              sure their application stands out and their college list has reach, fit, and safety
              schools. Our team gives your child tools to shine in tests, essays, and activities.
            </Typography>
          }
        />
      ),
    },
    {
      target: 'body',
      placement: 'center',
      content: (
        <CustomStepContent
          index={4}
          title="Step 4: Let’s save you money"
          buttonTitle="Start Now!"
          description={
            <Typography className="text-dark text-left" variation="description1">
              Many families miss out on big savings by not adjusting their finances before college;
              we&apos;ll show you how to shift things to save big. With our guidance, you could save
              thousands on college expenses.
            </Typography>
          }
        />
      ),
    },
  ];

  return (
    <div className="flex h-full">
      {showGuideStep && !isMobile && (
        <div className="absolute hidden md:block">
          {stepIndex === 0 && (
            <div className="flex bg-black opacity-10 justify-start items-center w-screen h-screen -z-10"></div>
          )}
          <ReactJoyride
            continuous
            run={run}
            stepIndex={stepIndex}
            steps={steps}
            disableCloseOnEsc
            disableOverlayClose
            hideBackButton
            hideCloseButton
            disableScrolling
            styles={{
              tooltip: {
                padding: 0,
              },
              tooltipContainer: {
                padding: 0,
              },
              tooltipFooter: {
                margin: 0,
              },
              buttonNext: {
                display: 'none',
              },
            }}
          />
        </div>
      )}

      <Head>
        <title>Onboarding</title>
      </Head>
      <FormikProvider value={formik}>
        {isMobile ? (
          <Drawer
            size="92vh"
            duration={400}
            direction="bottom"
            open={mobileMenuOpen}
            className="bg-transparent"
            onClose={() => setMobileMenuOpen(false)}>
            <OnboardingSteps setMobileMenuOpen={setMobileMenuOpen} />
          </Drawer>
        ) : (
          <OnboardingSteps />
        )}

        <div className="lg:ml-[380px]  w-full bg-white ">
          <div className="lg:hidden pl-8 border-b border-lightest2 flex items-center justify-between fixed w-full bg-white -mt-1 z-[2]">
            <Typography className="text-sm sm:text-title3">College Profile Onboarding</Typography>
            {/* TODO: Replace with link button */}
            <button onClick={() => setMobileMenuOpen(true)} className="py-4 px-8">
              <Typography className="text-mainBlue text-sm sm:text-title3">
                {onboarding.currentStepIndex + 1}/{onboarding.steps.length + 1} steps
              </Typography>
            </button>
          </div>

          <Form onReset={formik.handleReset} onSubmit={formik.handleSubmit} className="h-full">
            {stepsToComponentMapping[onboarding.currentStepIndex]}
          </Form>
        </div>
      </FormikProvider>
    </div>
  );
};

export default OnboardingPage;
