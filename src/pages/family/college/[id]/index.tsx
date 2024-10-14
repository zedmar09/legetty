import Button from '@components/Button/Button';
import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import AccountCircle from '@components/Icons/AccountCircle';
import EventIcon from '@components/Icons/EventIcon';
import FavouriteIcon from '@components/Icons/FavouriteIcon';
import FilledHeartIcon from '@components/Icons/FilledHeartIcon';
import LocationSolidIcon from '@components/Icons/LocationSolidIcon';
import PhoneWithPlusIcon from '@components/Icons/PhoneWithPlusIcon';
import RequirementIcon from '@components/Icons/RequirementIcon';
import WebsiteIcon from '@components/Icons/WebsiteIcon';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import AcademicScores from '@modules/Family/Colleges/CollegeDetails/AcademicScores';
import FinancialReportTable from '@modules/Family/Colleges/CollegeDetails/FinancialReportTable';
import { useMutation, useQuery } from '@tanstack/react-query';
import { formatNumber } from '@utils/common';
import { getStateName } from '@utils/state';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CollegeDetailsPage = () => {
  const [addedToFavorite, setAddedToFavorite] = useState(false);

  const router = useRouter();

  const selectedStudent = useAppSelector((state) => state.family?.selectedStudent);

  const {
    isLoading,
    isError,
    data: college,
  } = useQuery(['family/colleges/details'], () =>
    API.family.college.fetchCollege(router?.query?.id)
  );

  const { isLoading: addingToFavorite, mutate: addToFavorite } = useMutation(
    API.family.college.addFavorite,
    {
      onSuccess: () => {
        showToast('Added to favorite');
        setAddedToFavorite(true);
        dispatch(refetchFamilyProfile());
      },
      onError: () => {
        showToast('Error adding to favorite, please try again!');
      },
    }
  );

  const dispatch = useAppDispatch();

  const { mutate: talkTOExport } = useMutation(
    ['/family/profile/done-onboarding'],
    API.family.college.talkTOExport
  );

  const students = useAppSelector((state) => state.auth.family?.students);

  const studentsOptions =
    students?.map((student) => {
      return {
        label: student?.name,
        value: student?.id,
      };
    }) || [];

  if (isLoading) {
    return (
      <div className="h-[80vh] w-full grid place-items-center ">
        <span className="loader" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[80vh] w-full grid place-items-center text-2xl">Something went wrong</div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Hero section  */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex py-7 max-w-5xl space-x-1 sm:space-x-3 items-center px-4 sm:px-10 lg:px-0">
          <Typography
            variation="title3"
            className="font-bold text-mainBlue !text-xs xs:!text-title3">
            College Search
          </Typography>

          <span>{'>'}</span>

          {/* <Typography variation="title3" className="text-dark !text-xs xs:!text-title3">
            {selectedStudent?.name}
          </Typography> */}

          <SimpleDropdown
            iconColor="#666666"
            options={studentsOptions}
            value={{ label: selectedStudent?.name + '', value: selectedStudent?.id }}
            onChange={(value) => {
              const selectedStudent = students?.find((student) => student.id === value);
              selectedStudent && dispatch(setSelectedStudent(selectedStudent));
            }}
            className="text-title3"
          />

          <Typography variation="title3" className="font-bold !text-xs xs:!text-title3">
            Academic Report
          </Typography>
        </div>
        <div
          className="relative bg-no-repeat bg-cover w-full h-[368px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.35) 100%), url("https://ccs-colleges.s3.amazonaws.com/${college.inunId}.jpg"), url("/college-detail-bg.png")`,
            backgroundPosition: 'center',
          }}>
          <div className=" inset-0 absolute backdrop-brightness-80" />
          <div className="flex flex-col justify-between h-full max-w-[1024px] mx-auto">
            <div className="flex space-x-4 z-[2] mt-6 justify-center sm:justify-end md:px-4">
              {/* <Button
                onClick={() => toast('Work in progress')}
                className="bg-white !text-darker px-5 gap-2">
                <CompareIcon />
                Add to compare list
              </Button> */}
              <Button
                onClick={() => {
                  if (!addingToFavorite || !addedToFavorite) {
                    addToFavorite({
                      collegeId: college?.id,
                      studentId: selectedStudent?.id,
                    });
                  }
                }}
                className="bg-white !text-darker px-5 gap-2">
                {addedToFavorite ? <FilledHeartIcon /> : <FavouriteIcon />}
                {addingToFavorite
                  ? 'Adding...'
                  : addedToFavorite
                  ? 'Added to Favorite'
                  : 'Add to Favorite'}
              </Button>
            </div>
            <div className="max-w-[680px] relative flex items-end justify-center mx-auto ">
              <div className=" text-white flex flex-col items-center pb-6">
                <Typography className="font-bold text-title2 sm:text-title0 left-0 mb-4">
                  {college?.name}
                </Typography>
                <div className="flex space-x-6">
                  <Typography className="flex items-center gap-1">
                    <EventIcon /> {college?.foundedOn}
                  </Typography>
                  <Typography className="flex items-center gap-1">
                    <AccountCircle /> Linda Hopkin
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-lightest3">
        <div className="max-w-5xl  mx-auto flex flex-col">
          <div className="flex ">
            <div
              onClick={() =>
                router.push(
                  {
                    pathname: `/family/college/${router.query?.id}`,
                    query: { tab: 'academic-report' },
                  },
                  undefined,
                  { shallow: true }
                )
              }>
              <Typography
                variation="title3"
                className={`cursor-pointer p-4 border-b-4  ${
                  router.query.tab !== 'financial-report' ? 'border-mainBlue' : 'border-transparent'
                }`}>
                Academic Report
              </Typography>
            </div>
            <div
              onClick={() =>
                router.push(
                  {
                    pathname: `/family/college/${router.query?.id}`,
                    query: { tab: 'financial-report' },
                  },
                  undefined,
                  { shallow: true }
                )
              }>
              <Typography
                variation="title3"
                className={`cursor-pointer p-4 border-b-4  ${
                  router.query.tab === 'financial-report' ? 'border-mainBlue' : 'border-transparent'
                }`}>
                Financial Report
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightest4 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-10 lg:px-0">
          {router.query.tab === 'financial-report' ? (
            <>
              <div className="max-w-5xl mx-auto">
                <div className="mt-8 flex justify-between">
                  <div>
                    <Typography variation="title1">{college?.name}</Typography>
                    <div className="flex space-x-4">
                      <div className="flex space-x-2">
                        <Typography variation="title2" className="text-dark">
                          Graduation Year:
                        </Typography>
                        <Typography variation="title2" className="text-darker">
                          {+selectedStudent.graduationYear + 1}
                        </Typography>
                      </div>
                      <div className="flex space-x-2">
                        <Typography variation="title2">Student:</Typography>
                        <Typography variation="title2">{selectedStudent?.name}</Typography>
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <Button
                      onClick={() => toast('Work in progress')}
                      className="bg-white !text-darker px-4 !py-4 gap-2 border border-darker">
                      <CompareIcon />
                      Add to compare list
                    </Button>
                  </div> */}
                </div>
              </div>
              {college && <FinancialReportTable collegeData={college} />}
            </>
          ) : (
            <>
              <Typography variation="title2" className="text-darker">
                Highlights for {selectedStudent?.name}
              </Typography>
              <AcademicScores collegeData={college} />
            </>
          )}
        </div>
      </div>
      <div className="mb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-10 lg:px-0">
          <Typography variation="title2" className="text-darker mb-6 mt-10">
            General College Information
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6  md:gap-6">
            <div className="border border-lightest3 col-span-2 rounded-lg">
              <Typography
                variation="title3"
                className="text-darker flex items-center space-x-2 py-6 font-bold px-6 border-b border-lightest3">
                <RequirementIcon /> <span>Requirements</span>
              </Typography>
              <div className="divide-y divide-lightest3">
                <div className="flex justify-between items-center px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Open Admission Policy
                  </Typography>
                  <Typography className="text-sm sm:text-base">
                    {college.admissionPolicies?.openAdmission ? 'Required' : 'Not Required'}
                  </Typography>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Preferential Admission Policy
                  </Typography>
                  <Typography className="text-sm sm:text-base">
                    {college.admissionPolicies?.preferentialAdmission ? 'Required' : 'Not Required'}
                  </Typography>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Wait List
                  </Typography>
                  <Typography className="text-sm sm:text-base">
                    {college.admissionPolicies.waitList ? 'Yes' : 'No'}
                  </Typography>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Campus Setting
                  </Typography>
                  <Typography className="text-sm sm:text-base">{college.campusSetting}</Typography>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    College Type
                  </Typography>
                  <Typography className="text-sm sm:text-base">{college.collegeType}</Typography>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Acceptance Rate
                  </Typography>
                  <Typography className="text-sm sm:text-base">
                    {college.acceptanceRate}%
                  </Typography>
                </div>
              </div>
            </div>
            <div className="border border-lightest3 rounded-lg">
              <Typography
                variation="title3"
                className="text-darker flex items-center space-x-2 py-6 font-bold px-6 border-b border-lightest3">
                <LocationSolidIcon /> <span>Location</span>
              </Typography>
              <div className="divide-y divide-lightest3">
                <div className="flex flex-col justify-between px-6 py-4">
                  <Typography variation="paragraph">{college?.name}</Typography>
                  <Typography variation="paragraph">
                    {college?.zip}, {college?.address1}{' '}
                  </Typography>
                  <Typography variation="paragraph">{college?.address2}</Typography>
                  <Typography variation="paragraph" className="flex items-center mt-4">
                    <PhoneWithPlusIcon /> <span className="ml-2">{college?.mainPhone}</span>
                  </Typography>
                  <Link href={college?.website || ''} target="_blank">
                    <Typography variation="paragraph" className="flex items-center mt-4">
                      <WebsiteIcon />
                      <span className="ml-2 truncate">{college?.website}</span>
                    </Typography>
                  </Link>
                </div>
                <div className="relative rounded-b-lg bg-lightest4 h-[230px] mt-6 grid place-items-center">
                  <img
                    src={`/assets/us-states/${getStateName(college?.state)}.svg`}
                    alt="image"
                    width={216}
                    height={146}
                  />

                  {/* <LocationSVG /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-6">
            <div className="border border-lightest3 col-span-2 rounded-lg">
              <Typography variation="title3" className="text-darker pt-6 px-6 font-bold">
                Acceptance Rate Broken by Gender
              </Typography>
              <div className="divide-y divide-lightest3">
                <div className="grid grid-cols-4 gap-2 px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Gender
                  </Typography>
                  <Typography variation="description1" className="font-bold">
                    Applied
                  </Typography>
                  <Typography variation="description1" className="font-bold">
                    Admitted
                  </Typography>
                </div>
                <div className="grid grid-cols-4 gap-2 px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Women
                  </Typography>
                  <Typography>{formatNumber(Number(college.femaleAdmissions.applied))}</Typography>
                  <Typography>{formatNumber(Number(college.femaleAdmissions.accepted))}</Typography>
                </div>
                <div className="grid grid-cols-4 gap-2 px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Men
                  </Typography>
                  <Typography>{formatNumber(Number(college.maleAdmissions.applied))}</Typography>
                  <Typography>{formatNumber(Number(college.maleAdmissions.accepted))}</Typography>
                </div>
                <div className="grid grid-cols-4 gap-2 px-6 py-4">
                  <Typography variation="description1" className="font-bold">
                    Total
                  </Typography>
                  <Typography>
                    {formatNumber(
                      Number(college.femaleAdmissions.applied) +
                        Number(college.maleAdmissions.applied)
                    )}
                  </Typography>
                  <Typography>
                    {formatNumber(
                      Number(college.femaleAdmissions.accepted) +
                        Number(college.maleAdmissions.accepted)
                    )}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightest4">
        <div className="max-w-5xl mx-auto px-4 sm:px-10 flex flex-col sm:flex-row sm:items-center space-y-4 py-6 justify-between">
          <Typography variation="title3">
            We are confident that Linda can get into the University of San Diego with a little push
          </Typography>

          <Button
            size="small"
            onClick={() => {
              talkTOExport();
              window.open(
                'https://meetings.hubspot.com/lancemorgan/college-cost-secrets',
                '_blank'
              );
            }}>
            Talk To an expert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetailsPage;
