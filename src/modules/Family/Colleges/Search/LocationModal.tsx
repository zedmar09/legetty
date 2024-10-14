import Button from '@components/Button/Button';
import { SelectOption } from '@components/Select/Select';
import Typography from '@components/Typography/Typography';
import { breakpoints } from '@core/config/app';
import { states } from '@core/data/states';
import { Dialog, Transition } from '@headlessui/react';
import { getStateName } from '@utils/state';
import React, { Fragment, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface LocationModalProps {
  value?: string;
  onSelect: (value: string) => void;
  onClose: (visible: false) => void;
  locationType?: 'short';
}

const LocationModal: React.FC<LocationModalProps> = (props) => {
  const { value, onSelect, onClose } = props;

  const [selectedLocations, setSelectedLocations] = useState(() => {
    if (value) {
      if (value === '*') {
        return states;
      }
      const locations = value.split(',');
      return locations.map((location) => {
        return {
          label: getStateName(location),
          value: location,
        };
      });
    } else {
      return [];
    }
  });

  const isMobile = useMediaQuery({ maxWidth: breakpoints.sm });

  const cancelButtonRef = useRef(null);

  const handleApply = () => {
    if (selectedLocations.length === states.length) {
      onSelect('*');
    } else {
      onSelect(selectedLocations?.map((location) => location?.value).join(','));
    }
    onClose?.(false);
  };

  const handleSelect = (location: SelectOption) => {
    const exists = selectedLocations?.find((loc) => loc?.value === location?.value);
    if (exists) {
      setSelectedLocations(selectedLocations?.filter((loc) => loc.value !== location.value));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const handleCheckAll = () => {
    setSelectedLocations(states);
  };

  const handleUncheckAll = () => {
    setSelectedLocations([]);
  };

  let isCheckAllAllowed: boolean = selectedLocations?.length === states?.length ? false : true;

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
                <div className="sm:flex flex-col md:flex-row justify-between md:items-center">
                  <div className="flex items-center justify-between">
                    <Typography className="text-title2 md:text-title1 font-bold">
                      Possible College Locations
                    </Typography>
                    <button
                      onClick={handleApply}
                      className="text-mainBlue font-bold uppercase md:hidden">
                      Apply
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-6 md:mt-0">
                    <Button
                      onClick={handleUncheckAll}
                      className={`${
                        isCheckAllAllowed
                          ? '!bg-lightest3 !bg-opacity-50 !text-opacity-50  cursor-not-allowed '
                          : '!bg-lightest3  cursor-pointer'
                      } !text-xs md:!text-title3 rounded-lg !text-darker py-3 px-7`}>
                      Uncheck All
                    </Button>
                    <Button
                      onClick={handleCheckAll}
                      className={`${
                        !isCheckAllAllowed
                          ? '!bg-lightest3 !bg-opacity-50 !text-opacity-50 cursor-not-allowed'
                          : '!bg-lightest3  cursor-pointer'
                      } !text-xs md:!text-title3 rounded-lg !text-darker py-3 px-7`}>
                      Check All
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6">
                  {states?.map((state) => (
                    <div
                      key={state?.label}
                      className="group flex items-center group-hover:cursor-pointer text-darker">
                      <input
                        id={state?.value}
                        type="checkbox"
                        onChange={() => handleSelect(state)}
                        checked={
                          !!selectedLocations?.find((location) => location.value === state?.value)
                        }
                        className="mr-3 accent-mainBlue group-hover:cursor-pointer"
                      />
                      <label
                        htmlFor={state?.value}
                        className="text-title3 !text-darker py-5 group-hover:cursor-pointer w-full">
                        {state?.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t p-8 border-lightest3 flex justify-center space-x-4">
                <Button
                  onClick={() => onClose?.(false)}
                  size={isMobile ? 'small' : 'medium'}
                  className="!bg-lightest3 text-title3 !text-darker max-w-[246px] md:w-full py-4">
                  Cancel
                </Button>
                <Button
                  onClick={handleApply}
                  size={isMobile ? 'small' : 'medium'}
                  className="max-w-[246px] text-title3  md:w-full py-4">
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

export default LocationModal;
