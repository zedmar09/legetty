import Button from '@components/Button/Button';
import CloseIcon from '@components/Icons/CloseIcon';
import { SelectOption } from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import { states } from '@core/data/states';
import { useAppSelector } from '@core/redux/store';
import { Dialog, Transition } from '@headlessui/react';
import { CollegeFilters } from '@typings/filters/college';
import { getStateName } from '@utils/state';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface SavedSearchModalProps {
  onApply: (value: CollegeFilters) => void;
  onClose: (visible: false) => void;
}

const SavedSearchModal: React.FC<SavedSearchModalProps> = (props) => {
  const { onApply, onClose } = props;

  const isMobile = useMediaQuery({ maxWidth: breakpoints.sm });

  const savedSearches = useAppSelector((state) => state.auth.savedSearches);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show as={Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        initialFocus={cancelButtonRef}
        className="fixed z-10 inset-0 overflow-y-auto w-full">
        <div className="flex w-full md:items-end md:justify-center min-h-screen pt-4 pb-20 sm:px-8 text-center sm:block sm:p-0">
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
            <div className="inline-block align-bottom bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-[full] lg:max-w-5xl">
              <div className="p-8">
                <div className="flex justify-between">
                  <Typography variation="title2">Saved Searches</Typography>
                  <div className="cursor-pointer" onClick={() => onClose?.(false)}>
                    <CloseIcon />
                  </div>
                </div>

                <div className="mt-12 divide-y-2 divide-gray-100">
                  {savedSearches.map((search, index) => {
                    const { filters } = search;

                    const handleApply = () => {
                      onApply?.(filters);
                      onClose?.(false);
                    };

                    let locationText = '';

                    if (!filters.state) {
                      locationText = 'N/A';
                    } else if (filters.state === '*') {
                      locationText = 'All States';
                    } else {
                      const locationArr = filters.state.split(',').filter((loc) => !!loc);
                      if (locationArr.length === 1) {
                        locationText = getStateName(locationArr[0]);
                      } else {
                        locationText = `${locationArr.length} States Selected`;
                      }
                    }

                    return (
                      <div key={search.id} className="px-4 py-2 mb-2" onClick={handleApply}>
                        <div className="flex items-center">
                          <div className="mr-8">
                            <Typography variation="title3">S.N</Typography>
                            <Typography variation="title2" className="font-bold">
                              {index + 1}
                            </Typography>
                          </div>
                          <div className="mr-8">
                            <Typography variation="title3">Admission</Typography>
                            <Typography variation="title2" className="font-bold">
                              {search.filters.admission}
                            </Typography>
                          </div>
                          <div className="mr-auto">
                            <Typography variation="title3">Locations</Typography>
                            <Typography variation="title2" className="font-bold">
                              {locationText}
                            </Typography>
                          </div>
                          <Button>Apply</Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SavedSearchModal;
