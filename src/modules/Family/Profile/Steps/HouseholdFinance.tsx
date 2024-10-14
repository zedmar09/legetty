import Modal from '@components/Modal/Modal';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';
import { useMutation } from '@tanstack/react-query';
import { getYesNoValue } from '@utils/common';
import React, { useState } from 'react';
import UpdateAnnuities from './updateComponents/UpdateAnnuities';
import UpdateBusinessAssets from './updateComponents/UpdateBusinessAssets';
import UpdateLifeInsuranceAccount from './updateComponents/UpdateLifeInsuranceAccount';
import UpdateProfileResidence from './updateComponents/UpdatePrimaryResidence';
import UpdateProfileRow from './updateComponents/UpdateProfileRow';
import UpdatePropertyOwnership from './updateComponents/UpdatePropertyOwnership';

interface HouseholdFinanceProps {}

const HouseHoldFinance: React.FC<HouseholdFinanceProps> = (props) => {
  const {} = props;
  const dispatch = useAppDispatch();
  const family = useAppSelector((state) => state?.auth?.family);
  const [modalVisible, setModalVisible] = useState<
    | 'primaryResidence'
    | 'ownsInvestmentProperty'
    | 'hasLifeInsuranceAccount'
    | 'hasBusinessAssets'
    | 'annuitiesAmount'
    | null
  >(null);

  const { isLoading, mutate: updateProfile } = useMutation(API.family.auth.updateProfile, {
    onSuccess() {
      setModalVisible(null);
      dispatch(refetchFamilyProfile());
      showToast('Profile updated successfully');
    },
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  return (
    <>
      <Modal
        className="p-0 bg-lightest4"
        visible={modalVisible !== null}
        onClose={() => setModalVisible(null)}>
        {modalVisible === 'primaryResidence' && (
          <UpdateProfileResidence
            isLoading={isLoading}
            primaryResidence={family?.primaryResidence as string}
            residenceEquity={family?.residenceEquity || null}
            onSave={updateProfile}
          />
        )}
        {modalVisible === 'ownsInvestmentProperty' && (
          <UpdatePropertyOwnership
            isLoading={isLoading}
            ownsInvestmentProperty={family?.ownsInvestmentProperty as boolean}
            investmentEquity={String(family?.investmentEquity) || null}
            onSave={updateProfile}
          />
        )}
        {modalVisible === 'hasLifeInsuranceAccount' && (
          <UpdateLifeInsuranceAccount
            isLoading={isLoading}
            hasLifeInsuranceAccount={String(getYesNoValue(family?.hasLifeInsuranceAccount))}
            insuranceAmount={family?.insuranceAmount}
            updateProfile={updateProfile}
          />
        )}
        {modalVisible === 'hasBusinessAssets' && (
          <UpdateBusinessAssets
            isLoading={isLoading}
            hasBusinessAssets={String(getYesNoValue(family?.hasBusinessAssets))}
            businessAssetsAmount={family?.businessAssetsAmount}
            updateProfile={updateProfile}
          />
        )}
        {modalVisible === 'annuitiesAmount' && (
          <UpdateAnnuities
            isLoading={isLoading}
            hasAnnuities={String(getYesNoValue(family?.hasAnnuities))}
            annuitiesAmount={family?.annuitiesAmount}
            updateProfile={updateProfile}
          />
        )}
      </Modal>

      <div className="h-full flex flex-col">
        <OnboardingContainer>
          <div className="flex justify-between items-end">
            <Typography variation="title0" className="font-bold text-darker mb-1">
              Household Finance
            </Typography>
          </div>
          <div className="border border-gray-300 rounded-lg divide-y">
            <UpdateProfileRow
              title="Primary residence"
              description={String(family?.primaryResidence)}
              value={family?.primaryResidence === 'Own' ? family.residenceEquity : null}
              onEdit={() => setModalVisible('primaryResidence')}
            />
            <UpdateProfileRow
              title="Own any additional investment properties?"
              description={String(getYesNoValue(family?.ownsInvestmentProperty))}
              value={family?.investmentEquity ? family?.investmentEquity : null}
              onEdit={() => setModalVisible('ownsInvestmentProperty')}
            />
            <UpdateProfileRow
              title="Have cash value life insurance accounts?"
              description={String(getYesNoValue(family?.hasLifeInsuranceAccount))}
              value={family?.insuranceAmount ? family?.insuranceAmount : null}
              onEdit={() => setModalVisible('hasLifeInsuranceAccount')}
            />
            <UpdateProfileRow
              title="Have business/farm assets?"
              description={String(getYesNoValue(family?.hasBusinessAssets))}
              value={family?.businessAssetsAmount ? family?.businessAssetsAmount : null}
              onEdit={() => setModalVisible('hasBusinessAssets')}
            />
            <UpdateProfileRow
              title="Own annuities?"
              description={String(getYesNoValue(family?.hasAnnuities))}
              value={family?.annuitiesAmount ? family?.annuitiesAmount : null}
              onEdit={() => setModalVisible('annuitiesAmount')}
            />
            {/* <UpdateProfileRow
              title="Property ownership"
              description={
                family?.hasEquityInvestmentProperties
                  ? `Yes  ${family?.isRealEstateLLCOrBusiness && 'In real estate LLC or Business'}`
                  : 'No'
              }
              value={family?.hasEquityInvestmentProperties ? family?.investmentEquity : null}
              onEdit={() => setModalVisible('propertyOwnership')}
            /> */}
          </div>
        </OnboardingContainer>
      </div>
    </>
  );
};

export default HouseHoldFinance;
