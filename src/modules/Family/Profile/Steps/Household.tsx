import Modal from '@components/Modal/Modal';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';
import { useMutation } from '@tanstack/react-query';
import { getStateName } from '@utils/state';
import React, { useState } from 'react';
import UpdateAmountOfPeople from './updateComponents/UpdateAmountOfPeople';
import UpdateAmountOfPeopleInCollege from './updateComponents/UpdateAmountOfPeopleInCollege';
import UpdateHouseholdState from './updateComponents/UpdateHouseholdState';
import UpdateProfileRow from './updateComponents/UpdateProfileRow';

interface HouseholdProps {}

const Household: React.FC<HouseholdProps> = (props) => {
  const family = useAppSelector((state) => state.auth.family);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState<
    'state' | 'noOfPeople' | 'familyMembersInCollege' | null
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
        {modalVisible === 'state' && (
          <UpdateHouseholdState
            isLoading={isLoading}
            state={family?.state as string}
            onSave={updateProfile}
          />
        )}
        {modalVisible === 'noOfPeople' && (
          <UpdateAmountOfPeople
            isLoading={isLoading}
            familyMembersCount={family?.familyMembersCount as number}
            onSave={updateProfile}
          />
        )}
        {modalVisible === 'familyMembersInCollege' && (
          <UpdateAmountOfPeopleInCollege
            isLoading={isLoading}
            familyMembersInCollege={family?.familyMembersInCollege as number}
            onSave={updateProfile}
          />
        )}
      </Modal>

      <div className="h-full flex flex-col">
        <OnboardingContainer>
          <div className="flex justify-between items-end">
            <Typography variation="title0" className="font-bold text-darker mb-1">
              Household
            </Typography>
          </div>
          <div className="border border-gray-300 rounded-lg divide-y">
            <UpdateProfileRow
              title="State"
              description={getStateName(family?.state as string)}
              onEdit={() => setModalVisible('state')}
            />
            <UpdateProfileRow
              title="Amount of people"
              description={String(family?.familyMembersCount)}
              onEdit={() => setModalVisible('noOfPeople')}
            />
            <UpdateProfileRow
              title="Number of people from household in college"
              description={String(family?.familyMembersInCollege)}
              onEdit={() => setModalVisible('familyMembersInCollege')}
            />
          </div>
        </OnboardingContainer>
      </div>
    </>
  );
};

export default Household;
