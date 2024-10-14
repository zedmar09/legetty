import CloseIcon from '@components/Icons/CloseIcon';
import UserAvatar from '@components/Icons/UserAvatar';
import Typography from '@components/Typography/Typography';
import { Dialog, Transition } from '@headlessui/react';
import SchoolMarksTable from '@modules/common/SchoolMarksTable/SchoolMarksTable';
import { College } from '@typings/model/college';
import { Student } from '@typings/model/family';
import React, { Fragment, useRef } from 'react';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  student: Partial<Student>;
  schools: {
    college: College;
    id: string;
  }[];
}

const FavouriteSchoolModal: React.FC<Props> = (props) => {
  const { open, setOpen, student, schools } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={handleClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full lg:max-w-[1278px]">
              <div className="bg-lightest4 px-6 py-4 rounded-t-xl flex flex-col md:flex-row md:items-center justify-between border md:border-b border-lightest3">
                <div className="flex">
                  <UserAvatar />
                  <div className="ml-4 mr-auto">
                    <Typography variation="title2" className="text-darker">
                      {student?.name}
                    </Typography>

                    {/* <Typography variation="description1" className="text-darker">
                      {/* {student?.age} 
                      18 years old
                    </Typography> */}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <Typography variation="description1">
                      Viewed as:
                      {student.overallStudentType}
                    </Typography>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <Typography variation="description1">
                      HS Graduation Year:
                      {student.graduationYear}
                    </Typography>
                  </div>
                  <div
                    onClick={handleClose}
                    className="absolute top-4 right-4 md:static ml-12 cursor-pointer">
                    <CloseIcon fill="#0068F8" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                {schools?.map((school) => (
                  <div key={1} className="flex flex-col px-4 py-5 border-b border-r">
                    <div className="flex-grow flex items-center">
                      <Typography variation="title3" className="font-bold flex-grow">
                        {school.college.name}
                      </Typography>
                    </div>
                    <SchoolMarksTable
                      student={student}
                      schoolTitleName="School"
                      studentTitleName="Student"
                      school={school.college}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FavouriteSchoolModal;
