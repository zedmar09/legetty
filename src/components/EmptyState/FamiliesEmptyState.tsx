import Typography from '@components/Typography/Typography';
import Link from 'next/link';

interface FamiliesEmptyStateProps {
  inviteFamilies?: string;
}

const FamiliesEmptyState: React.FC<FamiliesEmptyStateProps> = (props) => {
  const { inviteFamilies = null } = props;
  return (
    <div className="p-6 bg-white h-screen my-6">
      <div>
        <Typography variation="title2">Families</Typography>
      </div>
      <div className="w-full flex flex-1 flex-col justify-center py-10 items-center">
        <img src={'/empty-states/families.svg'} alt="not content" />
        <Typography variation="title2" className="text-darker mt-8">
          You still don&apos;t have any families enrolled.
        </Typography>
        {inviteFamilies && (
          <Link href={inviteFamilies}>
            <Typography variation="title3" className="text-mainBlue mt-2 cursor-pointer">
              Start by clicking Invite Families
            </Typography>
          </Link>
        )}
        <Typography variation="title3" className="mt-6 text-dark">
          They&apos;ll be asked to enter their information
        </Typography>
      </div>
    </div>
  );
};

export default FamiliesEmptyState;
