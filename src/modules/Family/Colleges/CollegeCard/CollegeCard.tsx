import Link from 'next/link';

import CheckIcon from '@components/Icons/CheckIcon';
import EmptyHeartIcon from '@components/Icons/EmptyHeartIcon';
import FilledHeartIcon from '@components/Icons/FilledHeartIcon';
import NotAllowedIcon from '@components/Icons/NotAllowedIcon';
import ReportIcon from '@components/Icons/ReportIcon';
import UncheckedIcon from '@components/Icons/UncheckIcon';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import { useMutation } from '@tanstack/react-query';
import { College } from '@typings/model/college';
import { getTuitionFee, usdFormatter } from '@utils/common';
import { getStateName } from '@utils/state';

interface CollegeCardProps {
  college: College;
}

const CollegeCard: React.FC<CollegeCardProps> = (props) => {
  const { college } = props;
  const family = useAppSelector((state) => state.auth.family);
  const dispatch = useAppDispatch();

  const selectedStudent = useAppSelector((state) => state.family?.selectedStudent);

  const { isLoading: addingToFavorite, mutate: addToFavorite } = useMutation(
    API.family.college.addFavorite,
    {
      onSuccess: () => {
        showToast('Added to favorite');
        dispatch(refetchFamilyProfile());
      },
      onError: () => {
        showToast('Error adding to favorite, please try again!');
      },
    }
  );

  const { isLoading: removingFavorite, mutate: removeFromFavorite } = useMutation(
    API.family.college.removeFavorite,
    {
      onSuccess: () => {
        showToast('Removed from favorites');
        dispatch(refetchFamilyProfile());
      },
      onError: () => {
        showToast('Error removing to favorite, please try again!');
      },
    }
  );

  const isAddedToFavorite = useAppSelector((state) =>
    state.family?.selectedStudent?.favouriteColleges?.find(
      (favorite) => favorite.college.id === college.id
    )
  );

  const handleAddToFavorite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    if (addingToFavorite || removingFavorite) return;

    if (isAddedToFavorite) {
      removeFromFavorite(college.id);
    } else {
      addToFavorite({
        collegeId: college.id,
        studentId: selectedStudent?.id,
      });
    }
  };

  const { maleAdmissions, femaleAdmissions } = college;

  const acceptanceRate =
    ((Number(maleAdmissions?.accepted) + Number(femaleAdmissions?.accepted)) /
      (Number(maleAdmissions?.applied) + Number(femaleAdmissions?.applied))) *
    100;

  const acceptanceText = isNaN(acceptanceRate) ? 'N/A' : `${acceptanceRate.toFixed(2)}%`;

  const tuitionFee = getTuitionFee(family?.state, college?.state, college?.tuitionFee, college?.tuitionFeeInState, college?.tuitionFeeOutState) ;
  const totalCost = tuitionFee + college?.roomAndBoardFee;

  const graduationYear = +selectedStudent?.graduationYear;

  const currentYear = new Date().getFullYear();

  const federalSai = +family?.federal_sai || 0;

  const freshmanYear = graduationYear + 1;

  const freshmanCost = totalCost + (freshmanYear - currentYear) * (5 / 100) * totalCost;

  // Increase SAI by 3% every year
  const freshmanSai = federalSai + (freshmanYear - currentYear) * (3 / 100) * federalSai;

  const freshmanAidNeeded = federalSai > freshmanCost ? 0 : freshmanCost - freshmanSai;

  const freshmanAidProvided = freshmanAidNeeded * (college.financialAidMet / 100);

  const freshmanGiftAidCovered = freshmanAidProvided * (college.giftAid / 100);

  const freshmanOutOfPocket = freshmanCost - freshmanGiftAidCovered;

  return (
    <Link
      key={college.name}
      href={`/family/college/${college?.id}`}
      className="border border-lightest2 rounded-2xl cursor-pointer">
      <div
        className={`relative w-full min-h-[190px] lg:min-h-[160px] bg-repeat-round rounded-t-[16px] bg-[#0099FF]`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,0.6) 100%), url("https://ccs-colleges.s3.amazonaws.com/${college.inunId}.jpg"), url("/college-card-bg.png")`,
        }}>
        <div className="absolute w-full h-full bg-opacity-80 rounded-t-[16px] p-4 lg:p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <Typography variation="title3" className="font-bold">
                {college.city}, {getStateName(college.state)}
              </Typography>
              <Typography variation="description1">
                {college.campusSetting} - {'4 years'}
              </Typography>
            </div>

            <div
              onClick={handleAddToFavorite}
              className="rounded-full bg-white px-4 py-1 flex items-center space-x-1">
              <Typography variation="description1" className="text-mainBlue">
                {addingToFavorite || removingFavorite ? 'Loading...' : 'Favorite'}
              </Typography>
              {isAddedToFavorite ? <FilledHeartIcon /> : <EmptyHeartIcon width="16" height="17" />}
            </div>
          </div>
          <div className="py-4 border-b-[0.5px] border-opacity-20">
            <Typography variation="title2" className="text-[24px] line-clamp-1">
              {college.name}
            </Typography>
          </div>

          <div className="mt-2 flex space-x-6">
            <Link
              onClick={(e) => e.stopPropagation()}
              href={`/family/college/${college?.id}`}
              className="flex space-x-2 items-center hover:underline">
              <ReportIcon />
              <Typography variation="description1">Academic Report</Typography>
            </Link>
            <Link
              onClick={(e) => e.stopPropagation()}
              href={`/family/college/${college?.id}/financial-report`}
              className="flex lg:space-x-2 items-center hover:underline">
              <ReportIcon />
              <Typography variation="description1">Financial Report</Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8 px-6">
        <Typography variation="title3" className="font-bold">
          Academic Information
        </Typography>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <Typography variation="title3" className="text-dark">
              Acceptance Rate
            </Typography>
            <Typography variation="title2" className="font-bold">
              {acceptanceText}
            </Typography>
          </div>
          <ProgressBar
            total={100}
            className="mt-1.5"
            background="#0099FF"
            current={acceptanceRate}
          />
        </div>

        <div className="mt-4 grid grid-cols-3 border-lightest3">
          <div className="py-2 pl-2 border-r border-b"></div>
          <div className="py-2 pl-2 border-r border-b">
            <Typography variation="description1" className="font-bold text-dark">
              School Average
            </Typography>
          </div>
          <div className="py-2 pl-2 border-b">
            <Typography variation="description1" className="font-bold text-dark">
              {selectedStudent?.name.split(' ')[0]}&apos;s
            </Typography>
          </div>

          <div className="py-2 pl-2 border-b border-r">
            <Typography variation="description1" className="font-bold text-dark">
              GPA
            </Typography>
          </div>
          <div className="py-2 pl-2 border-b border-r">
            {college.requiredGpa ? Number(college.requiredGpa || 3.5)?.toFixed?.(1) : 'N/A'}
          </div>
          <div className="py-2 pl-2 border-b flex justify-between items-center">
            {Number(selectedStudent?.gpa)?.toFixed?.(1)}
            {college.requiredGpa && selectedStudent?.gpa ? (
              selectedStudent?.gpa >= college.requiredGpa ? (
                <CheckIcon />
              ) : (
                <UncheckedIcon />
              )
            ) : (
              <NotAllowedIcon />
            )}
          </div>

          <div className="py-2 pl-2 border-b border-r">
            <Typography variation="description1" className="font-bold text-dark">
              SAT
            </Typography>
          </div>
          <div className="py-2 pl-2 border-b border-r">{college?.requiredSat || 'N/A'}</div>
          <div className="py-2 pl-2 border-b flex justify-between items-center">
            {selectedStudent?.sat}
            {college.requiredSat && selectedStudent?.sat ? (
              selectedStudent?.sat >= college.requiredSat ? (
                <CheckIcon />
              ) : (
                <UncheckedIcon />
              )
            ) : (
              <NotAllowedIcon />
            )}
          </div>

          <div className="py-2 pl-2 border-r">
            <Typography variation="description1" className="font-bold text-dark">
              ACT
            </Typography>
          </div>
          <div className="py-2 pl-2 border-r">{college.requiredAct || 'N/A'}</div>
          <div className="py-2 pl-2 flex justify-between items-center">
            {selectedStudent?.act}
            {college.requiredAct && selectedStudent?.act ? (
              selectedStudent?.act >= college.requiredAct ? (
                <CheckIcon />
              ) : (
                <UncheckedIcon />
              )
            ) : (
              <NotAllowedIcon />
            )}
          </div>
        </div>

        <div className="mt-6">
          <Typography variation="title3" className="font-bold text-dark">
            Financial Information (for year {graduationYear + 1})
          </Typography>
        </div>

        <div className="mt-2 py-3 flex justify-between border-b">
          <Typography variation="description1" className="font-bold text-dark">
            Total Cost Of Attendance
          </Typography>
          <div className="flex items-center space-x-2">
            {totalCost > 0 ? (
              <Typography variation="description1">{usdFormatter.format(freshmanCost)}</Typography>
            ) : (
              <Typography variation="description1" className="text-dark">
                N/A
              </Typography>
            )}
          </div>
        </div>

        <div className="py-3 flex justify-between border-b">
          <Typography variation="description1" className="font-bold text-dark">
            Your Estimated Financial Aid
          </Typography>
          <div className="flex items-center space-x-2">
            {totalCost > 0 ? (
              <Typography variation="description1">
                -{usdFormatter.format(freshmanGiftAidCovered)}
              </Typography>
            ) : (
              <Typography variation="description1" className="text-dark">
                N/A
              </Typography>
            )}
          </div>
        </div>

        <div className="py-3 flex justify-between">
          <Typography variation="description1" className="font-bold text-dark">
            Your Estimated Total Out of Pocket
          </Typography>
          <div className="flex items-center space-x-2">
            {totalCost > 0 ? (
              <Typography variation="description1">
                ={usdFormatter.format(freshmanOutOfPocket)}
              </Typography>
            ) : (
              <Typography variation="description1" className="text-dark">
                N/A
              </Typography>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
