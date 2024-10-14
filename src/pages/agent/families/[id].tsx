import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import ArrowForwardIcon from '@components/Icons/ArrowForward';
import FilledHeartIcon from '@components/Icons/FilledHeartIcon';
import HouseholdFinanceIcon from '@components/Icons/HouseholdFinanceIcon';
import Typography from '@components/Typography/Typography';
import API from '@core/services';
import FavoriteSchools from '@modules/Family/FamilyDetail/FavoriteSchools/FavoriteSchools';
import { useQuery } from '@tanstack/react-query';
import { Parent } from '@typings/model/family';
import { getYesNoValue, usdFormatter } from '@utils/common';
import { getErrorMessage } from '@utils/error';
import { getStateName } from '@utils/state';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// TODO: connect api
const HouseholdArray = [
  { title: 'Adjusted Gross Income', description: '120,000.00' },
  { title: 'Estimated Income Tax Paid', description: '$20,000.00' },
  { title: 'Savings', description: '$340,000 ' },
];

const FamilyDetailPage: NextPage = () => {
  const router = useRouter();
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null);

  const {
    isLoading,
    isError,
    error,
    data: family,
  } = useQuery(['family', router.query.id], () =>
    API.fa.family.fetchFamily(router.query.id as string)
  );

  useEffect(() => {
    if (selectedParent) {
      const alreadySelectedParent = family?.parents.find((item) => item.id === selectedParent?.id);
      setSelectedParent(alreadySelectedParent);
    } else {
      setSelectedParent(family?.parents?.[0]);
    }
  }, [family]);

  const handelChange = (value: string) => {
    const data = family?.parents.find((item) => item.id === value);
    data && setSelectedParent(data);
  };

  const options =
    (family?.parents &&
      family?.parents.map((item) => {
        return {
          label: item.firstName + ' ' + item.lastName,
          value: item.id as string,
        };
      })) ||
    [];

  let content: React.ReactNode = null;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <span className="text-negativeAction">{getErrorMessage(error)}</span>
      </div>
    );
  } else {
    const State = getStateName(family?.state);
    content = (
      <div>
        <div className="pt-14 pb-8 bg-lightest4 px-2 md:px-4">
          <div className="max-w-5xl mx-auto">
            <Typography variation="title1">Family</Typography>
            <div className="mt-7">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="bg-mainBlue px-6 py-4 pb-5 rounded-lg text-white">
                    <Typography variation="title2">Parents</Typography>
                    <Typography variation="description1" className="mt-2">
                      {family?.parents[0]?.firstName + ' ' + family?.parents[0]?.lastName}
                    </Typography>
                    {family?.parents[1]?.firstName && family?.parents[1]?.lastName && (
                      <Typography variation="description1" className="mt-2">
                        {family.parents[1].firstName + ' ' + family.parents[1].lastName}
                      </Typography>
                    )}
                  </div>

                  <div className="flex items-center justify-between bg-white px-6 py-4 rounded-lg">
                    <div>
                      <Typography variation="title2" className="text-darker">
                        Household
                      </Typography>
                      <Typography variation="title3" className="text-darker">
                        {State}
                      </Typography>
                      <Typography variation="title3" className="text-dark">
                        {family?.familyMembersCount}
                      </Typography>
                    </div>
                    <img
                      src={`/assets/us-states/${State}.svg`}
                      alt="image"
                      width={70}
                      height={70}
                    />
                  </div>

                  <div className="py-4 px-6 rounded-lg bg-[#0080000D]">
                    <Typography variation="title2" className="text-darker">
                      Federal SAI
                    </Typography>
                    <Typography variation="title2" className="mt-2 text-darker2">
                      {usdFormatter.format(+family.federal_sai || 0)}
                    </Typography>
                    <div className="flex justify-between items-center">
                      <Typography variation="title3" className="mt-2 text-dark">
                        {/* TODO: Populate from API */}
                        For all students
                      </Typography>
                      <div className="bg-[#C7E1C7] text-positiveAction p-1 px-2 rounded-lg">
                        {/* TODO: Populate from API */}
                        Low
                      </div>
                    </div>
                  </div>

                  <div className="py-4 px-6 rounded-lg bg-[#0080000D]">
                    <Typography variation="title2" className="text-darker">
                      SAI
                    </Typography>
                    <Typography variation="title2" className="mt-2 text-darker2">
                      {/* TODO: Populate from API */}
                      {usdFormatter.format(+family.institutional_sai || 0)}
                    </Typography>
                    <div className="flex justify-between items-center">
                      <Typography variation="title3" className="mt-2 text-dark">
                        {/* TODO: Populate from API */}
                        For all students
                      </Typography>
                      <div className="bg-[#C7E1C7] text-positiveAction p-1 px-2 rounded-lg">
                        {/* TODO: Populate from API */}
                        Low
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex justify-between items-center">
                      <Typography variation="title2">Household Finance</Typography>
                      <ArrowForwardIcon fill="#0068F8" />
                    </div>
                    <div>
                      {family?.parents[1] && selectedParent?.id && (
                        <SimpleDropdown
                          options={options}
                          value={{
                            label: selectedParent?.firstName + ' ' + selectedParent?.lastName,
                            value: selectedParent?.id,
                          }}
                          onChange={handelChange}
                          className="text-dark"
                          iconColor="#9E9E9E"
                        />
                      )}
                    </div>
                    <div className="mt-6">
                      <div className="flex justify-between border-b pb-2 border-lightest3">
                        <Typography variation="description1" className="text-darker">
                          Adjusted Gross Income
                        </Typography>
                        <Typography variation="description1" className="text-darker">
                          {selectedParent?.annualIncome
                            ? usdFormatter.format(+selectedParent?.annualIncome)
                            : 'N/A'}
                        </Typography>
                      </div>

                      <div className="flex justify-between border-b py-2 border-lightest3">
                        <Typography variation="description1" className="text-darker">
                          Estimated Income Tax Paid
                        </Typography>
                        <Typography variation="description1" className="text-darker">
                          {selectedParent?.annualIncome && selectedParent?.taxableIncome
                            ? usdFormatter.format(
                                +selectedParent?.annualIncome - +selectedParent?.taxableIncome
                              )
                            : 'N/A'}
                        </Typography>
                      </div>

                      <div className="flex justify-between pt-2">
                        <Typography variation="description1" className="text-darker">
                          Savings
                        </Typography>
                        <Typography variation="description1" className="text-darker">
                          {/* {selectedParent?.checkingAmount
                            ? usdFormatter.format(+selectedParent?.checkingAmount)
                            : 'N/A'} */}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <Typography variation="description1" className="text-dark">
                      Financial Agent:{' '}
                      <span className="text-darker"> {family?.agent?.name || 'N/A'}</span>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white px-2 md:px-4">
          <div className="max-w-5xl mx-auto py-8">
            <div className="ml-2 md:ml-0 flex items-center">
              <FilledHeartIcon />
              <Typography variation="title2" className="font-bold ml-2">
                Students&apos; Favorite Schools
              </Typography>
            </div>
            {family.students.length > 0 ? (
              family.students.map((student, index) => {
                return (
                  <FavoriteSchools
                    key={index}
                    // @ts-ignore
                    student={student}
                    showViewAllbutton={true}
                    className="mt-8 border"
                    schools={student.favouriteColleges}
                  />
                );
              })
            ) : (
              <div className="p-16 text-center text-dark bg-gray-100 rounded">
                There is no any students
              </div>
            )}
          </div>
        </div>
        <div className="bg-white px-2 md:px-4">
          <div className="max-w-5xl mx-auto py-8">
            <div className="ml-2 md:ml-0 flex items-center">
              <HouseholdFinanceIcon />
              <Typography variation="title2" className="font-bold ml-2">
                Household Finance
              </Typography>
            </div>
            <div className="my-6">
              <Typography className="">Stated as assets by Joseph Hopkins:</Typography>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {HouseholdArray.map((item, index) => (
                <div key={index} className="border rounded-3xl shadow-lg p-6 space-y-2">
                  <Typography className="font-bold">{item.title}</Typography>
                  <Typography className="description1">{item.description} </Typography>
                </div>
              ))}

              <div className="border rounded-3xl shadow-lg p-6 space-y-2">
                <Typography className="font-bold">Equity in Investment Properties</Typography>
                <Typography className="description1">
                  {getYesNoValue(family.isRealEstateLLCOrBusiness)} in real estate, LLC or business
                </Typography>
              </div>

              <div className="border rounded-3xl shadow-lg p-6 space-y-2">
                <Typography className="font-bold">Properties</Typography>
                <Typography className="description1">
                  {family.ownsInvestmentProperty
                    ? `  1 property with ${usdFormatter.format(family?.residenceEquity)} in equity`
                    : 'Does not content own property'}
                </Typography>
              </div>

              {family.hasRetirementAccounts && (
                <div className="border rounded-3xl shadow-lg p-6 space-y-2">
                  <Typography className="font-bold">Retirement accounts</Typography>
                  <Typography className="description1">
                    {usdFormatter.format(+family.hasRetirementAccounts)} in total
                  </Typography>
                </div>
              )}
              {family.insuranceAmount && (
                <div className="border rounded-3xl shadow-lg p-6 space-y-2">
                  <Typography className="font-bold">Cash value life insurance accounts</Typography>
                  <Typography className="description1">
                    {usdFormatter.format(+family.insuranceAmount)} in total
                  </Typography>
                </div>
              )}
              {family.annuitiesAmount && (
                <div className="border rounded-3xl shadow-lg p-6 space-y-2">
                  <Typography className="font-bold">Annuities</Typography>
                  <Typography className="description1">
                    {usdFormatter.format(+family.annuitiesAmount)} in total
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-screen w-full">
      <Head>
        <title>College Cost - Families</title>
      </Head>
      {content}
    </div>
  );
};

export default FamilyDetailPage;
