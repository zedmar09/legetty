import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import Modal from '@components/Modal/Modal';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';
import { useMutation } from '@tanstack/react-query';
import { Parent } from '@typings/model/family';
import React, { useState } from 'react';
import UpdateAnnualIncome from './updateComponents/UpdateAnnualIncome';

import { setSelectedParent } from '@core/redux/reducers/familySlice';
import UpdateMaritalStatusIncome from './updateComponents/UpdateMaritalStatus';
import UpdateProfileRow from './updateComponents/UpdateProfileRow';
import { getYesNoValue } from '@utils/common';
import UpdateCheckingAmount from './updateComponents/UpdateCheckingAmount';
import UpdateTaxableBrokerage from './updateComponents/UpdateAnnualRetirement';
import UpdateRetirementSaving from './updateComponents/UpdateRetirementSaving';
import UpdateCollegeSavingAccountsAmount from './updateComponents/UpdateCollegeSavingsAccountsAmount';

interface ParentsProps {}

const Parents: React.FC<ParentsProps> = () => {
  const dispatch = useAppDispatch();
  const family = useAppSelector((state) => state.auth.family);
  const selectedParent = useAppSelector((state) => state.family.selectedParent);
  // const [selectedParent, setSelectedParent] = useState<Parent | null>(null);
  const [modalVisible, setModalVisible] = useState<
    | 'maritalStatus'
    | 'annualIncome'
    | 'retirementSaving'
    | 'annualRetirement'
    | 'checkingAmount'
    | 'collegeSavingsAccountsAmount'
    | null
  >(null);

  const { isLoading, mutate: updateParent } = useMutation(API.family.auth.updateParent, {
    onSuccess() {
      setModalVisible(null);
      dispatch(refetchFamilyProfile());
      showToast('Profile updated successfully');
    },
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  const { isLoading: loading, mutate: updateProfile } = useMutation(API.family.auth.updateProfile, {
    onSuccess() {
      setModalVisible(null);
      dispatch(refetchFamilyProfile());
      showToast('Profile updated successfully');
    },
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  const handelChange = (value: string) => {
    const data = family?.parents.find((item) => item.id === value);
    data && dispatch(setSelectedParent(data));
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

  const handelSave = (data: Partial<Parent>) => {
    updateParent({ parentId: selectedParent?.id as string, data: data });
  };

  if (selectedParent) {
    return (
      <>
        <Modal
          className="p-0 bg-lightest4"
          visible={modalVisible !== null}
          onClose={() => setModalVisible(null)}>
          {modalVisible === 'maritalStatus' && (
            <UpdateMaritalStatusIncome
              onSave={handelSave}
              isLoading={isLoading}
              maritalStatus={selectedParent?.maritalStatus}
            />
          )}

          {modalVisible === 'annualIncome' && (
            <UpdateAnnualIncome
              onSave={handelSave}
              isLoading={isLoading}
              filingStatus={selectedParent.filingStatus}
              annualIncome={selectedParent?.annualIncome}
              taxableIncome={selectedParent.taxableIncome}
              standardDeduction={selectedParent.standardDeduction}
            />
          )}

          {modalVisible === 'checkingAmount' && (
            <UpdateCheckingAmount
              isLoading={isLoading}
              onSave={updateProfile}
              checkingAmount={family.checkingAmount}
            />
          )}

          {modalVisible === 'retirementSaving' && (
            <UpdateTaxableBrokerage
              isLoading={isLoading}
              hasTaxableBrokerageAccounts={String(
                getYesNoValue(family?.hasTaxableBrokerageAccounts)
              )}
              taxableBrokerageAccountsAmount={family.taxableBrokerageAccountsAmount}
              onSave={updateProfile}
            />
          )}

          {modalVisible === 'annualRetirement' && (
            <UpdateRetirementSaving
              isLoading={isLoading}
              retirementPlan={String(getYesNoValue(family?.retirementPlan))}
              annualRetirementAmount={family.annualRetirementAmount}
              onSave={updateProfile}
            />
          )}

          {modalVisible === 'collegeSavingsAccountsAmount' && (
            <UpdateCollegeSavingAccountsAmount
              isLoading={isLoading}
              hasCollegeSavingsAccounts={String(getYesNoValue(family?.hasCollegeSavingsAccounts))}
              collegeSavingAccountsAmount={family.collegeSavingsAccountsAmount}
              onSave={updateProfile}
            />
          )}
        </Modal>

        <div className="h-full flex flex-col">
          <OnboardingContainer>
            <div className="flex justify-between items-end">
              <Typography variation="title0" className="font-bold text-darker mb-1">
                Parents
              </Typography>
            </div>
            <div className="border border-gray-300 rounded-lg divide-y">
              <div className="p-4 flex justify-between items-start h-20">
                <div>
                  <Typography className="font-bold">Parents</Typography>
                  {family?.parents[1] && selectedParent?.id ? (
                    <SimpleDropdown
                      options={options}
                      value={{
                        label: selectedParent?.firstName + ' ' + selectedParent?.lastName,
                        value: selectedParent?.id,
                      }}
                      onChange={handelChange}
                      className="text-dark"
                      iconColor="#000000"
                    />
                  ) : (
                    <Typography variation="description1" className="text-gray-400 font-semibold">
                      {family?.parents[0] &&
                        family?.parents[0].firstName + ' ' + family?.parents[0].lastName}
                    </Typography>
                  )}
                </div>
              </div>

              <UpdateProfileRow
                title="Marital Status"
                description={selectedParent?.maritalStatus}
                onEdit={() => setModalVisible('maritalStatus')}
              />

              <UpdateProfileRow
                title="Annual Income"
                description={selectedParent?.firstName}
                value={selectedParent?.annualIncome}
                onEdit={() => setModalVisible('annualIncome')}
              />

              <UpdateProfileRow
                title="Estimated value in checking/savings account, money markets etc."
                description={selectedParent?.firstName}
                value={family?.checkingAmount}
                onEdit={() => setModalVisible('checkingAmount')}
              />

              <UpdateProfileRow
                title="Any taxable brokerage accounts"
                description={selectedParent?.firstName}
                value={family?.taxableBrokerageAccountsAmount}
                onEdit={() => setModalVisible('retirementSaving')}
              />

              <UpdateProfileRow
                title="Qualified retirement plan"
                description={String(getYesNoValue(family?.retirementPlan))}
                value={family?.retirementPlan ? family?.annualRetirementAmount : null}
                onEdit={() => setModalVisible('annualRetirement')}
              />

              <UpdateProfileRow
                title="Have any college savings accounts"
                description={String(getYesNoValue(family?.hasCollegeSavingsAccounts))}
                value={
                  family?.collegeSavingsAccountsAmount ? family?.collegeSavingsAccountsAmount : null
                }
                onEdit={() => setModalVisible('collegeSavingsAccountsAmount')}
              />
            </div>
          </OnboardingContainer>
        </div>
      </>
    );
  }

  return <></>;
};

export default Parents;
