import CheckIcon from '@components/Icons/CheckIcon';
import NotAllowedIcon from '@components/Icons/NotAllowedIcon';
import UncheckedIcon from '@components/Icons/UncheckIcon';
import CircularProgress from '@components/ProgressBar/CircularProgress';
import { showToast } from '@core/config/toast';
import { useAppSelector } from '@core/redux/store';
import { College } from '@typings/model/college';

interface AcademicScoresProps {
  collegeData?: College;
}

const AcademicScores = (props: AcademicScoresProps) => {
  const { collegeData } = props;
  // const { maleAdmissions, femaleAdmissions } = collegeData;

  const acceptanceRate =
    ((Number(collegeData?.maleAdmissions.accepted) +
      Number(collegeData?.femaleAdmissions.accepted)) /
      (Number(collegeData?.maleAdmissions.applied) +
        Number(collegeData?.femaleAdmissions.applied))) *
    100;

  const acceptanceText = isNaN(acceptanceRate) ? 'N/A' : `${acceptanceRate.toFixed(2)}`;

  const selectedStudent = useAppSelector((state) => state.family.selectedStudent);

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="bg-white border border-lightest3 shadow-md rounded-lg w-full flex items-center py-6 px-4">
        <div className="mr-2">
          <CircularProgress progress={+acceptanceText} />
        </div>
        <div className="flex flex-col">
          <span className="text-darker text-paragraph">Acceptance Rate</span>
          <button
            type="button"
            onClick={() => showToast('Work in progress')}
            className="text-mainBlue text-description1 text-left">
            View Details
          </button>
        </div>
      </div>
      <div className="bg-white border border-lightest3 divide-y rounded-lg shadow-md w-full flex flex-col flex-grow">
        <div className="flex items-center space-x-2 py-5 px-4 text-darker">
          <span className=" text-title2 font-bold">
            {Number(collegeData?.requiredGpa)?.toFixed?.(1)}
          </span>
          <span className="text-paragraph">Average G.P.A.</span>
        </div>
        <div className="flex items-center space-x-2 py-5 px-4 justify-between text-darker">
          <div className="space-x-2">
            <span className=" text-title2 font-bold">
              {Number(selectedStudent?.gpa)?.toFixed?.(1)}
            </span>
            <span className="text-paragraph">Student&rsquo;s G.P.A.</span>
          </div>
          {selectedStudent?.gpa && collegeData?.requiredGpa ? (
            selectedStudent?.gpa >= collegeData?.requiredGpa ? (
              <CheckIcon />
            ) : (
              <UncheckedIcon />
            )
          ) : (
            <NotAllowedIcon />
          )}
        </div>
      </div>
      <div className="bg-white border border-lightest3 divide-y rounded-lg shadow-md w-full flex flex-col flex-grow">
        <div className="flex items-center space-x-2 py-5 px-4 text-darker">
          <span className=" text-title2 font-bold">{collegeData?.requiredSat}</span>
          <span className="text-paragraph">Average SAT</span>
        </div>
        <div className="flex items-center justify-between space-x-2 py-5 px-4 text-darker">
          <div className="space-x-2">
            <span className=" text-title2 font-bold">{selectedStudent?.sat}</span>
            <span className="text-paragraph pr-7">Student&rsquo;s SAT</span>
          </div>
          {collegeData?.requiredSat && selectedStudent?.sat ? (
            selectedStudent?.sat >= collegeData?.requiredSat ? (
              <CheckIcon />
            ) : (
              <UncheckedIcon />
            )
          ) : (
            <NotAllowedIcon />
          )}
        </div>
      </div>
      <div className="bg-white border border-lightest3 divide-y rounded-lg shadow-md w-full flex flex-col flex-grow">
        <div className="flex items-center space-x-2 py-5 px-4 text-darker">
          <span className=" text-title2 font-bold">{collegeData?.requiredAct}</span>
          <span className="text-paragraph">Average ACT</span>
        </div>
        <div className="flex items-center justify-between space-x-2 py-5 px-4 text-darker">
          <div className="space-x-2">
            <span className=" text-title2 font-bold">{selectedStudent?.act}</span>
            <span className="text-paragraph pr-7">Student&rsquo;s ACT</span>
          </div>
          {selectedStudent?.act && collegeData?.requiredAct ? (
            selectedStudent?.act >= collegeData?.requiredAct ? (
              <CheckIcon />
            ) : (
              <UncheckedIcon />
            )
          ) : (
            <NotAllowedIcon />
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicScores;
