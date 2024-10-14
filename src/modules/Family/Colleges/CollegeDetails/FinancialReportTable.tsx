import Typography from '@components/Typography/Typography';
import { useAppSelector } from '@core/redux/store';
import { formatter } from '@pages/family/college/search';
import { College } from '@typings/model/college';
import { getTuitionFee } from '@utils/common';
import Link from 'next/link';
import { useState } from 'react';

interface FinancialReportTableProps {
  collegeData: College;
}

const FinancialReportTable = (props: FinancialReportTableProps) => {
  const { collegeData: college } = props;

  const [inflationValue, setInflationValue] = useState(5);
  const selectedStudent = useAppSelector((state) => state.family?.selectedStudent);
  const family = useAppSelector((state) => state.auth.family);

  const graduationYear = +selectedStudent?.graduationYear;

  const currentYear = new Date().getFullYear();

  const handleInflationValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (+e.target.value < 0) {
      setInflationValue(0);
    } else if (+e.target.value > 100) {
      setInflationValue(100);
    } else {
      setInflationValue(+e.target.value);
    }
  };
  const tuitionFee = getTuitionFee(family?.state, college?.state, college?.tuitionFee, college?.tuitionFeeInState, college?.tuitionFeeOutState) ;


  const totalCost = tuitionFee + college?.roomAndBoardFee;

  const federalSai = +family?.federal_sai || 0;

  const freshmanYear = graduationYear + 1;
  const sophomoreYear = graduationYear + 2;
  const juniorYear = graduationYear + 3;
  const seniorYear = graduationYear + 4;

  const freshmanCost =
    totalCost + (freshmanYear - currentYear) * (inflationValue / 100) * totalCost;
  const sophomoreCost =
    totalCost + (sophomoreYear - currentYear) * (inflationValue / 100) * totalCost;
  const juniorCost = totalCost + (juniorYear - currentYear) * (inflationValue / 100) * totalCost;
  const seniorCost = totalCost + (seniorYear - currentYear) * (inflationValue / 100) * totalCost;

  // Increase SAI by 3% every year
  const freshmanSai = federalSai + (freshmanYear - currentYear) * (3 / 100) * federalSai;
  const sophomoreSai = federalSai + (sophomoreYear - currentYear) * (3 / 100) * federalSai;
  const juniorSai = federalSai + (juniorYear - currentYear) * (3 / 100) * federalSai;
  const seniorSai = federalSai + (seniorYear - currentYear) * (3 / 100) * federalSai;

  const freshmanAidNeeded = federalSai > freshmanCost ? 0 : freshmanCost - freshmanSai;
  const sophomoreAidNeeded = federalSai > sophomoreCost ? 0 : sophomoreCost - sophomoreSai;
  const juniorAidNeeded = federalSai > juniorCost ? 0 : juniorCost - juniorSai;
  const seniorAidNeeded = federalSai > seniorCost ? 0 : seniorCost - seniorSai;

  const freshmanAidProvided = freshmanAidNeeded * (college.financialAidMet / 100);
  const sophomoreAidProvided = sophomoreAidNeeded * (college.financialAidMet / 100);
  const juniorAidProvided = juniorAidNeeded * (college.financialAidMet / 100);
  const seniorAidProvided = seniorAidNeeded * (college.financialAidMet / 100);

  const freshmanGiftAidCovered = freshmanAidProvided * (college.giftAid / 100);
  const sophomoreGiftAidCovered = sophomoreAidProvided * (college.giftAid / 100);
  const juniorGiftAidCovered = juniorAidProvided * (college.giftAid / 100);
  const seniorGiftAidCovered = seniorAidProvided * (college.giftAid / 100);

  const freshmanRemainingAidNeeded = freshmanAidProvided - freshmanGiftAidCovered;
  const sophomoreRemainingAidNeeded = sophomoreAidProvided - sophomoreGiftAidCovered;
  const juniorRemainingAidNeeded = juniorAidProvided - juniorGiftAidCovered;
  const seniorRemainingAidNeeded = seniorAidProvided - seniorGiftAidCovered;

  const freshmanOutOfPocket = freshmanCost - freshmanGiftAidCovered - college.meritAid;
  const sophomoreOutOfPocket = sophomoreCost - sophomoreGiftAidCovered - college.meritAid;
  const juniorOutOfPocket = juniorCost - juniorGiftAidCovered - college.meritAid;
  const seniorOutOfPocket = seniorCost - seniorGiftAidCovered - college.meritAid;

  return (
    <div>
      <div className="mt-5 mb-7 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center space-x-2 text-description1">
            <div className="border pr-1 text-darker border-dark bg-white w-fit py-1 rounded-[4px] flex items-center">
              <input
                type="number"
                max={100}
                min={0}
                value={inflationValue}
                onChange={handleInflationValue}
                className="number w-8 pl-1 text-darker placeholder:bg-dark focus:outline-none"
              />{' '}
              %
            </div>
            <div>Estimated Inflation</div>
          </div>
        </div>
        <div className="flex text-description1">
          <Typography variation="description1">All figures are estimate</Typography>
          <Typography variation="description1" className="ml-12">
            Changes in your income can change your Federal SAI.
            <Link href="#" className="text-mainBlue font-bold">
              {' '}
              Learn More
            </Link>
          </Typography>
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border bg-white">
          <table className="w-full text-sm text-left">
            <thead className="uppercase !text-darker dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-5 ">
                  Year
                </th>
                <th scope="col" className="px-6 py-3 ">
                  {graduationYear + 1}
                  <p className="capitalize text-xs text-gray-500 font-normal">(freshman)</p>
                </th>
                <th scope="col" className="px-6 py-3">
                  {graduationYear + 2}
                  <p className="capitalize text-xs text-gray-500 font-normal">(sophomore)</p>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  {graduationYear + 3}
                  <p className="capitalize text-xs text-gray-500 font-normal">(junior)</p>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  {graduationYear + 4}
                  <p className="capitalize text-xs text-gray-500 font-normal">(senior)</p>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Cost of Attendance */}
              <tr className="border-t border-lightest3">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium flex justify-between  whitespace-nowrap border-r">
                  <span className="text-darker">Cost of Attendance</span>
                </th>
                <td className="px-6 py-4 border-r">{formatter.format(freshmanCost)}</td>
                <td className="px-6 py-4 border-r">{formatter.format(sophomoreCost)}</td>
                <td className="px-6 py-4 border-r">{formatter.format(juniorCost)}</td>
                <td className="px-6 py-4 border-r">{formatter.format(seniorCost)}</td>
                <td className="px-6 py-4 ">
                  {formatter.format(freshmanCost + sophomoreCost + juniorCost + seniorCost)}
                </td>
              </tr>

              {/* Gift Aid */}
              <tr className="border-t border-lightest3">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium flex justify-between  whitespace-nowrap border-r">
                  <span className="text-darker">Your Estimated Financial Aid</span>
                </th>
                <td className="px-6 py-4 border-r">-{formatter.format(freshmanGiftAidCovered)}</td>
                <td className="px-6 py-4 border-r">-{formatter.format(sophomoreGiftAidCovered)}</td>
                <td className="px-6 py-4 border-r">-{formatter.format(juniorGiftAidCovered)}</td>
                <td className="px-6 py-4 border-r">-{formatter.format(seniorGiftAidCovered)}</td>
                <td className="px-6 py-4 ">
                  -
                  {formatter.format(
                    freshmanGiftAidCovered +
                      sophomoreGiftAidCovered +
                      juniorGiftAidCovered +
                      seniorGiftAidCovered
                  )}
                </td>
              </tr>

              {/* Out of pocket */}
              <tr className="border-t border-lightest3">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium flex justify-between  whitespace-nowrap border-r">
                  <span className="text-darker">Estimated Out of Pocket</span>
                </th>
                <td className="px-6 py-4 border-r">={formatter.format(freshmanOutOfPocket)}</td>
                <td className="px-6 py-4 border-r">={formatter.format(sophomoreOutOfPocket)}</td>
                <td className="px-6 py-4 border-r">={formatter.format(juniorOutOfPocket)}</td>
                <td className="px-6 py-4 border-r">={formatter.format(seniorOutOfPocket)}</td>
                <td className="px-6 py-4 ">
                  =
                  {formatter.format(
                    freshmanOutOfPocket +
                      sophomoreOutOfPocket +
                      juniorOutOfPocket +
                      seniorOutOfPocket
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportTable;
