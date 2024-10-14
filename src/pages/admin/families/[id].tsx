import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import ArrowForwardIcon from '@components/Icons/ArrowForward';
import FilledHeartIcon from '@components/Icons/FilledHeartIcon';
import Typography from '@components/Typography/Typography';
import API from '@core/services';
import FavoriteSchools from '@modules/Family/FamilyDetail/FavoriteSchools/FavoriteSchools';
import { useQuery } from '@tanstack/react-query';
import { Parent } from '@typings/model/family';
import { usdFormatter } from '@utils/common';
import { getErrorMessage } from '@utils/error';
import { getStateName } from '@utils/state';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const FamilyDetailPage: NextPage = () => {
  const router = useRouter();
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null);

  const {
    isLoading,
    isError,
    error,
    data: family,
  } = useQuery(['family', router?.query?.id], () =>
    API.admin.family.fetchFamily(router?.query?.id as string)
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
        <div className="pt-14 pb-8 bg-lightest4 px-4">
          <div className="max-w-5xl mx-auto">
            <Typography variation="title1">Family</Typography>
            <div className="mt-7">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-mainBlue px-6 py-4 pb-5 rounded-lg text-white">
                    <Typography variation="title2">Parents</Typography>
                    <Typography variation="description1" className="mt-2">
                      {family.parents?.[0]?.firstName} {family.parents?.[0]?.lastName}
                    </Typography>
                    <Typography variation="description1" className="mt-2">
                      {family.parents?.[1]?.firstName} {family.parents?.[1]?.lastName}
                    </Typography>
                  </div>

                  <div className="flex items-center justify-between bg-white p-6 rounded-lg">
                    <div className="">
                      <Typography variation="title2" className="text-darker">
                        Household
                      </Typography>
                      <Typography variation="title3" className="text-darker">
                        {State}
                      </Typography>
                      <Typography variation="title3" className="text-dark">
                        {family.familyMembersCount} people
                      </Typography>
                    </div>
                    <img
                      alt="image"
                      width={70}
                      height={70}
                      src={`/assets/us-states/${State}.svg`}
                    />
                    {/* <div className="!fill-lightest2 ml-2 relative transform scale-[0.7]">
                      {State && <State fill="current" />}
                    </div> */}
                  </div>

                  <div className="py-4 px-6 rounded-lg bg-[#0080000D]">
                    <Typography variation="title2" className="text-darker">
                      Federal SAI
                    </Typography>
                    <Typography variation="title2" className="mt-2 text-darker2">
                      {usdFormatter.format(+family?.federal_sai) || 0}
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
                      {usdFormatter.format(+family?.institutional_sai) || 0}
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
                    <div className="flex justify-between items-center" onClick={()=>router.push(`/admin/families/${family?.id}/finance`)}>
                      <Typography variation="title2">Household Finance</Typography>
                      <ArrowForwardIcon fill="#0068F8"/>
                    </div>
                    <div className="flex items-start">
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
        <div className="bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-0 py-8">
            <div className="flex items-center">
              <FilledHeartIcon />
              <Typography variation="title2" className="font-bold ml-2">
                Students&apos; Favorite Schools
              </Typography>
            </div>
            {family && family.students ? (
              [0] &&
              family?.students?.map((student) => {
                return (
                  <FavoriteSchools
                    key={student.id}
                    student={student}
                    className="mt-8"
                    schools={student.favouriteColleges}
                    showViewAllbutton={true}
                  />
                );
              })
            ) : (
              <div className="p-16 mt-6 text-dark bg-gray-100 rounded text-center">
                No Any Favorite Schools
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full min-h-screen">
      <Head>
        <title>College Cost - Families</title>
      </Head>
      {content}
    </div>
  );
};

export default FamilyDetailPage;
