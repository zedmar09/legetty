import AdmissionProfessionalIcon from '@components/Icons/AdmissionProfessionalIcon';
import ArrowForwardIcon from '@components/Icons/ArrowForward';
import CollegeSearchIcon from '@components/Icons/CollegeSearchIcon';
import EmptyHeartIcon from '@components/Icons/EmptyHeartIcon';
import FederalSaiNumberIcon from '@components/Icons/FederalSaiNumberIcon';
import Typography from '@components/Typography/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigationItems = [
  {
    name: 'College Profile',
    icon: CollegeSearchIcon,
    href: '/family/profile',
  },
  { name: 'Federal SAI Number', icon: FederalSaiNumberIcon, href: '/family/federal-sai' },
  {
    name: 'College Search',
    icon: CollegeSearchIcon,
    href: '/family/college/search?tab=scores&location=*&admission=Target&gpa=0&sat=0&act=0',
  },
  { name: 'Resources', icon: EmptyHeartIcon, href: '/family/resources' },
  {
    name: 'Your Admission Professional',
    icon: AdmissionProfessionalIcon,
    href: '/family/admission-professional',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="hidden lg:block min-w-[280px] xl:min-w-[380px] bg-lightest4 h-screen inset-x-0 bottom-0 top-0 overflow-y-auto">
      <div className="pt-16 mx-6 relative h-full">
        <div>
          <div>
            <Typography variation="description3" className="mb-2 uppercase">
              ONBOARDING
            </Typography>

            <div className="flex flex-col space-y-2">
              {navigationItems?.map((item) => {
                const isSelected = router?.pathname === item?.href;
                return (
                  <Link
                    href={item?.href}
                    key={item?.name}
                    className={`flex items-center justify-between ${
                      isSelected ? 'bg-mainBlue text-mainBlue' : 'text-dark'
                    } bg-opacity-20 rounded-md py-4 px-4`}>
                    <div className="flex space-x-3 items-center">
                      <item.icon fill={isSelected && '#2174BB'} />
                      <Typography variation="title3">{item?.name}</Typography>
                    </div>
                    {isSelected && <ArrowForwardIcon fill="#2174BB" />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 flex flex-col items-center inset-x-0">
          <Typography variation="description1" className="text-dark">
            Invited by:
          </Typography>
          <Typography variation="title3" className="text-darker font-bold">
            Benjamin Williams
          </Typography>
          <Typography variation="description1" className="text-dark">
            Admission Professional
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
