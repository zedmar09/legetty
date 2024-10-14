import SimpleDropdown from '@components/DropDown/SimpleDropdown';
import Modal from '@components/Modal/Modal';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { refetchFamilyProfile } from '@core/redux/reducers/authSlice';
import { setSelectedStudent } from '@core/redux/reducers/familySlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import OnboardingContainer from '@modules/Family/OnboardingContainer/OnboardingContainer';
import { useMutation } from '@tanstack/react-query';
import { Student } from '@typings/model/family';
import { getYesNoValue } from '@utils/common';
import React, { useState } from 'react';
import UpdateProfileRow from './updateComponents/UpdateProfileRow';
import UpdateStudentACT from './updateComponents/UpdateStudentACT';
import UpdateStudentFiledTaxes from './updateComponents/UpdateStudentFiledTaxes';
import UpdateStudentGPA from './updateComponents/UpdateStudentGPA';
import UpdateStudentGraduationYear from './updateComponents/UpdateStudentGraduationYear';
import UpdateStudentIncomeAmount from './updateComponents/UpdateStudentIncomeAmount';
import UpdateStudentName from './updateComponents/UpdateStudentName';
import UpdateStudentSAT from './updateComponents/UpdateStudentSAT';
import UpdateStudentSavingAmount from './updateComponents/UpdateStudentSavingAmount';
import UpdateStudentTrustAccount from './updateComponents/UpdateStudentTrustAccount';

interface studentProps {}

const StudentStep: React.FC<studentProps> = () => {
  const family = useAppSelector((state) => state.auth.family);
  const dispatch = useAppDispatch();
  // const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const selectedStudent = useAppSelector((state) => state.family.selectedStudent);

  const [modalVisible, setModalVisible] = useState<
    | 'graduationYear'
    | 'act'
    | 'sat'
    | 'gpa'
    | 'name'
    | 'hasSavingsAccount'
    | 'incomeAmount'
    | 'hasTrustAccount'
    | 'hasFiledTaxes'
    | null
  >(null);

  const { isLoading, mutate: updateStudent } = useMutation(API.family.auth.updateStudent, {
    onSuccess() {
      setModalVisible(null);
      dispatch(refetchFamilyProfile());
      showToast('Profile updated successfully');
    },
    onError() {
      showToast('Something went wrong, please try again!');
    },
  });

  const handleChange = (studentId: string) => {
    const selectedStudent = family?.students.find((item) => item.id === studentId);
    if (selectedStudent) {
      dispatch(setSelectedStudent(selectedStudent));
    }
  };

  const options =
    family?.students.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    }) || [];

  const handelSave = (data: Partial<Student>) => {
    if (selectedStudent) {
      updateStudent({ studentId: selectedStudent.id, data: data });
    }
  };

  if (selectedStudent) {
    return (
      <>
        <Modal
          className="p-0 bg-lightest4"
          visible={modalVisible !== null}
          onClose={() => setModalVisible(null)}>
          <>
            {modalVisible === 'act' && (
              <UpdateStudentACT
                isLoading={isLoading}
                act={selectedStudent?.act}
                onSave={handelSave}
              />
            )}
            {modalVisible === 'sat' && (
              <UpdateStudentSAT
                isLoading={isLoading}
                sat={selectedStudent.sat}
                onSave={handelSave}
              />
            )}
            {modalVisible === 'gpa' && (
              <UpdateStudentGPA
                isLoading={isLoading}
                gpa={selectedStudent.gpa}
                onSave={handelSave}
              />
            )}
            {modalVisible === 'name' && (
              <UpdateStudentName
                isLoading={isLoading}
                name={selectedStudent.name}
                onSave={handelSave}
              />
            )}
            {modalVisible === 'graduationYear' && (
              <UpdateStudentGraduationYear
                isLoading={isLoading}
                graduationYear={selectedStudent.graduationYear}
                onSave={handelSave}
              />
            )}
            {modalVisible === 'hasFiledTaxes' && (
              <UpdateStudentFiledTaxes
                isLoading={isLoading}
                hasFiledTaxes={String(getYesNoValue(selectedStudent?.hasFiledTaxes))}
                onSave={handelSave}
              />
            )}
            {modalVisible === 'incomeAmount' && (
              <UpdateStudentIncomeAmount
                isLoading={isLoading}
                hasIncome={String(getYesNoValue(selectedStudent?.hasIncome))}
                incomeAmount={selectedStudent.incomeAmount}
                updateProfile={handelSave}
              />
            )}
            {modalVisible === 'hasSavingsAccount' && (
              <UpdateStudentSavingAmount
                isLoading={isLoading}
                hasSavingsAccount={String(getYesNoValue(selectedStudent?.hasSavingsAccount))}
                savingsAmount={selectedStudent?.savingsAmount}
                updateProfile={handelSave}
              />
            )}
            {modalVisible === 'hasTrustAccount' && (
              <UpdateStudentTrustAccount
                isLoading={isLoading}
                hasTrustAccount={String(getYesNoValue(selectedStudent?.hasTrustAccount))}
                onSave={handelSave}
              />
            )}
          </>
        </Modal>
        <div className="h-full flex flex-col">
          <OnboardingContainer>
            <div className="flex justify-between items-end">
              <Typography variation="title0" className="font-bold text-darker mb-1">
                student
              </Typography>
            </div>
            <div className="border border-gray-300 rounded-lg">
              <div className="border-b border-gray-300 divide-y">
                <div className="p-4 flex justify-between items-start h-20">
                  <div>
                    <Typography className="font-bold">Student</Typography>
                    {family?.students[1] && selectedStudent ? (
                      <SimpleDropdown
                        options={options}
                        value={{
                          label: selectedStudent?.name,
                          value: selectedStudent?.id,
                        }}
                        onChange={handleChange}
                        className="text-dark"
                        iconColor="#000000"
                      />
                    ) : (
                      <Typography variation="description1" className="text-gray-400 font-semibold">
                        {selectedStudent?.name}
                      </Typography>
                    )}
                  </div>
                </div>
                <UpdateProfileRow
                  title="Student name"
                  description={selectedStudent?.name}
                  onEdit={() => setModalVisible('name')}
                />
                <UpdateProfileRow
                  title="ACT"
                  description={selectedStudent?.act?.toString() || 'N/A'}
                  onEdit={() => setModalVisible('act')}
                />
                <UpdateProfileRow
                  title="SAT"
                  description={selectedStudent?.sat?.toString() || 'N/A'}
                  onEdit={() => setModalVisible('sat')}
                />
                <UpdateProfileRow
                  title="GPA"
                  description={selectedStudent?.gpa?.toString()}
                  onEdit={() => setModalVisible('gpa')}
                />
                <UpdateProfileRow
                  title="Graduation Year"
                  description={selectedStudent?.graduationYear}
                  onEdit={() => setModalVisible('graduationYear')}
                />
                <UpdateProfileRow
                  title="Has student filed taxes?"
                  description={String(getYesNoValue(selectedStudent?.hasFiledTaxes))}
                  onEdit={() => setModalVisible('hasFiledTaxes')}
                />
                <UpdateProfileRow
                  title="Student Income Amount"
                  description={String(getYesNoValue(selectedStudent?.hasIncome))}
                  value={selectedStudent?.incomeAmount ? selectedStudent?.incomeAmount : null}
                  onEdit={() => setModalVisible('incomeAmount')}
                />
                <UpdateProfileRow
                  title="Student Saving Amount"
                  description={String(getYesNoValue(selectedStudent?.hasSavingsAccount))}
                  value={selectedStudent?.savingsAmount ? selectedStudent?.savingsAmount : null}
                  onEdit={() => setModalVisible('hasSavingsAccount')}
                />
                <UpdateProfileRow
                  title="Does student have UTMA / UGMA or Other Trust Accounts?"
                  description={String(getYesNoValue(selectedStudent?.hasTrustAccount))}
                  onEdit={() => setModalVisible('hasTrustAccount')}
                />
              </div>
            </div>
          </OnboardingContainer>
        </div>
      </>
    );
  }

  return <></>;
};

export default StudentStep;
