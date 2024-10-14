import FilledHeartIcon from '@components/Icons/FilledHeartIcon';
import MailIcon from '@components/Icons/MailIcon';
import Typography from '@components/Typography/Typography';
import API from '@core/services';
import FavoriteSchools from '@modules/Family/FamilyDetail/FavoriteSchools/FavoriteSchools';
import { useQuery } from '@tanstack/react-query';
import { getErrorMessage } from '@utils/error';
import { getStateName } from '@utils/state';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FamilyDetailPage: NextPage = () => {
  const router = useRouter();
  const {
    isLoading,
    isError,
    error,
    data: family,
  } = useQuery(['family', router.query.id], () =>
    API.ap.family.fetchFamily(router.query.id as string)
  );

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
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-mainBlue px-6 py-4 pb-5 rounded-lg text-white">
                  <Typography variation="title2">Parents</Typography>
                  <Typography variation="description1" className="mt-2 capitalize">
                    {family.parents?.[0]?.firstName} {family.parents?.[0]?.lastName}
                  </Typography>
                  <Typography variation="description1" className="mt-2 capitalize">
                    {family.parents?.[1]?.firstName} {family.parents?.[1]?.lastName}
                  </Typography>
                </div>
                <div className="bg-white rounded-lg py-4 px-6 flex-grow">
                  <Typography variation="title2" className="text-darker">
                    Contact
                  </Typography>
                  {/* <Link href={`tel:${admissionProfessional.phone}`}>
                  <div className="mt-2 flex items-center space-x-2 hover:underline hover:text-mainBlue text-dark">
                    <PhoneIcon />
                    <Typography variation="description1">
                       {family.phone}  
                    </Typography>
                  </div>
                  </Link> */}
                  <Link href={`mailto:${family?.email}`}>
                    <div className="mt-2 flex items-center space-x-2 hover:underline hover:text-mainBlue text-dark">
                      <MailIcon />
                      <Typography variation="description1">{family?.email}</Typography>
                    </div>
                  </Link>
                </div>

                <div className="bg-white flex items-center justify-between rounded-lg py-4 px-6 flex-grow">
                  <div>
                    <Typography variation="title2" className="text-darker">
                      Household
                    </Typography>
                    <Typography variation="title3" className="text-darker mt-2">
                      {State}
                    </Typography>
                    <Typography variation="title3" className="text-dark mt-2">
                      {family.familyMembersCount} people
                    </Typography>
                  </div>
                  <img src={`/assets/us-states/${State}.svg`} alt="image" width={70} height={70} />
                  {/* <div className="!fill-lightest2 ml-2 relative transform scale-[0.7]">
                      {State}
                    </div> */}
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
