import Button from '@components/Button/Button';
import { Dialog, Transition } from '@headlessui/react';
import { CollegeFilters } from '@typings/filters/college';
import { College } from '@typings/model/college';
import React, { Fragment, useRef } from 'react';
import Filter from './Filter';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filters: CollegeFilters;
  setFilters: React.Dispatch<React.SetStateAction<CollegeFilters>>;
  setAllColleges: React.Dispatch<React.SetStateAction<College[]>>;
  currentTab: string;
  allColleges: College[];
}

const FilterModal: React.FC<Props> = (props) => {
  const { open, setOpen, filters, setFilters, setAllColleges, currentTab, allColleges } = props;
  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

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
            <div className="inline-block align-bottom bg-white rounded-lg  text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[358px]">
              <div className="sm:flex sm:items-start">
                <Filter
                  filters={filters}
                  setFilters={setFilters}
                  setAllColleges={setAllColleges}
                  currentTab={currentTab}
                  allColleges={allColleges}
                />
              </div>
              <div className="border-t p-8 border-lightest3 flex justify-between">
                <Button size="small" className="bg-lightest3 text-[#161616]">
                  Clean
                </Button>
                <Button size="small" onClick={handleClose}>
                  Apply
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FilterModal;
