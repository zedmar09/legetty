import ExModal from '@components/ExModal/ExModal';
import DeleteIcon from '@components/Icons/DeleteIcon';
import EditIcon from '@components/Icons/EditIcon';
import ThreeDotsShowMoreIcon from '@components/Icons/ThreeDotsShowMoreIcon';
import { Menu, Transition } from '@headlessui/react';
import { OnBoardingFields } from '@typings/onboarding';
import { cn } from '@utils/style';
import { useFormikContext } from 'formik';
import { Fragment, useState } from 'react';
import AddAndEditStudent from './AddAndEditStudent';
import { studentDetails } from './StudentRow/StudentRow';

interface Props {
  selectedStudent: studentDetails;
}

export default function ActionsDropdown(props: Props) {
  const { selectedStudent } = props;
  const [editStudentValue, setEditStudentValue] = useState('');
  const [activeModal, setActiveModal] = useState('');
  const formik = useFormikContext<OnBoardingFields>();

  return (
    <>
      <ExModal
        visible={activeModal === 'delete'}
        description="By deleting this student, you are also removing all information associated to it."
        title={`Are you sure you want to delete ?`}
        secondaryDescription="This action cannot be undone."
        confirmLabel="Delete"
        onConfirm={() => {
          formik.setFieldValue('students', [
            ...formik.values?.students?.filter((item, index) => index !== selectedStudent?.index),
          ]);
          setActiveModal('');
        }}
        onClose={() => setActiveModal('')}
        confirmBtnType="negative mainBlue"
      />
      <ExModal
        visible={activeModal === 'edit'}
        description={
          <AddAndEditStudent
            setAddAndEditValue={setEditStudentValue}
            selectedData={formik?.values?.students[selectedStudent?.index]}
          />
        }
        title="Edit Student"
        confirmLabel="Save"
        onConfirm={() => {
          formik.setFieldValue(`students.[${selectedStudent.index}].name`, editStudentValue);
          setActiveModal('');
        }}
        onClose={() => setActiveModal('')}
      />
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900">
            <ThreeDotsShowMoreIcon />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {!selectedStudent ? null : (
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => setActiveModal('edit')}
                      className={cn(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex space-x-2 items-center px-2 py-2 text-sm cursor-pointer'
                      )}>
                      <EditIcon fill="#1C1B1F" />
                      <span>Edit Student</span>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => setActiveModal('delete')}
                      className={cn(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex space-x-2 items-center px-2 py-2 text-sm cursor-pointer'
                      )}>
                      <DeleteIcon fill="#1C1B1F" />
                      <span>Delete Student</span>
                    </div>
                  )}
                </Menu.Item>
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
