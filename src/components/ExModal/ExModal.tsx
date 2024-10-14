import Typography from '@components/Typography/Typography';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef } from 'react';

interface ExModalProps {
  visible: boolean;
  title: string;
  description: string | React.ReactNode;
  secondaryDescription?: string;
  confirming?: boolean;
  onClose: (visible: false) => void;
  onConfirm: () => void;
  confirmBtnType?: 'mainBlue' | 'negative mainBlue';
  confirmLabel?: string;
}

const ExModal: React.FC<ExModalProps> = (props) => {
  const {
    visible,
    title,
    description,
    secondaryDescription,
    confirming,
    onClose,
    onConfirm,
    confirmLabel = 'Delete',
    confirmBtnType = 'mainBlue',
  } = props;

  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    onClose?.(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
  };

  return (
    <Transition.Root show={visible} as={Fragment}>
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
            <div className="inline-block align-bottom bg-white rounded-lg py-8 px-6 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[358px] sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <Dialog.Title as="h3" className="text-darker text-title3 font-bold">
                    {title}
                  </Dialog.Title>
                  <div className="mt-8">
                    <div className="text-dark w-full text-description1 font-bold">
                      {description}
                    </div>
                    <Typography variation="description1" className="text-dark font-bold mt-2">
                      {secondaryDescription}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-8 flex space-x-4">
                <button
                  type="button"
                  className="mt-3 w-full flex-grow inline-flex justify-center rounded-md border border-lightest3 px-4 py-2 bg-lightest3 text-base font-medium text-darker shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainBlue sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={handleClose}
                  ref={cancelButtonRef}>
                  Cancel
                </button>
                <button
                  type="button"
                  className={`inline-flex flex-grow justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 ${
                    confirmBtnType === 'mainBlue'
                      ? 'bg-mainBlue hover:bg-mainBlue focus:ring-mainBlue'
                      : 'bg-negativeAction hover:bg-negativeAction focus:ring-negativeAction'
                  }  text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:w-auto sm:text-sm`}
                  onClick={handleConfirm}>
                  {confirmLabel}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ExModal;
