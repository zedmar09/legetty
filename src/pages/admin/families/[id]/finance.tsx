import Typography from '@components/Typography/Typography';
import API from '@core/services';
import { useQuery } from '@tanstack/react-query';
import { getErrorMessage } from '@utils/error';
import { getStateName } from '@utils/state';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const FamilyDetailPage: NextPage = () => {
  const router = useRouter();

  const {
    isLoading,
    isError,
    error,
    data: family,
  } = useQuery(['family', router?.query?.id], () =>
    API.admin.family.fetchFamily(router?.query?.id as string)
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
            <Typography variation="title1">HouseHold Finance</Typography>
           
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-0 py-8">
            <div className="flex items-center">
              
                <table>
                    <tbody>
                    <tr>
                            <td><b>Family Members Count</b></td>
                            <td>{family?.familyMembersCount}</td>
                        </tr>
                        <tr>
                            <td><b>Family Members CountIn College</b></td>
                            <td>{family?.familyMembersInCollege}</td>
                        </tr>
                        <tr>
                            <td><b>Checking Amount</b></td>
                            <td>{family?.checkingAmount}</td>
                        </tr>
                     
                        <tr>
                            <td><b>Taxable Brokerage</b></td>
                            <td>{family?.taxableBrokerageAccountsAmount}</td>
                        </tr>
                        <tr>
                            <td><b>College Savings</b></td>
                            <td>{family?.collegeSavingsAccountsAmount}</td>
                        </tr>
                        <tr>
                            <td><b>Retirement</b></td>
                            <td>{family?.annualRetirementAmount}</td>
                        </tr>
                       
                        <tr>
                            <td><b>Investment Equity</b></td>
                            <td>{family?.investmentEquity}</td>
                        </tr>
                        <tr>
                            <td><b>Insurance Amount</b></td>
                            <td>{family?.insuranceAmount}</td>
                        </tr>
                        <tr>
                            <td><b>Residence Equity</b></td>
                            <td>{family?.residenceEquity}</td>
                        </tr>
                        <tr>
                            <td><b>Insurance Amount</b></td>
                            <td>{family?.insuranceAmount}</td>
                        </tr>
                
                    </tbody>
                </table>
           
            
                   

            </div>
            
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full min-h-screen">
      <Head>
        <title>College Cost - Family Finance</title>
      </Head>
      {content}
    </div>
  );
};

export default FamilyDetailPage;
