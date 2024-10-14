import { College } from '@typings/model/college';
import CollegeCard from '../CollegeCard/CollegeCard';

type Props = {
  allColleges: College[];
};

const SpecificCollegeSearch = (props: Props) => {
  const { allColleges } = props;
  return (
    <div className="mt-8 pb-4 md:pb-10">
      {allColleges.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-6">
          {allColleges?.map((college) => {
            return <CollegeCard key={college.id} college={college} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center py-56 rounded">
          No any specific College is selected!
        </div>
      )}
    </div>
  );
};

export default SpecificCollegeSearch;
