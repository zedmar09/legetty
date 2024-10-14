import CloseIcon from '@/components/Icons/CloseIcon';
import { cn } from '@utils/style';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface ModalProps {
  visible?: boolean;
  closeIcon?: boolean;
  onClose: (visible: false) => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { visible, onClose, closeIcon = true, className, children } = props;

  const handleClose = () => {
    onClose?.(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="text-black fixed top-0 left-0 bottom-0 right-0 w-full z-50 flex justify-center items-center">
          {visible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="block bg-black fixed top-0 left-0 bg-opacity-50 w-full h-screen z-10"
              onClick={handleClose}
            />
          )}
          <motion.div
            initial={{ opacity: 0.9, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just' }}
            exit={{ opacity: 0, y: 30 }}
            className={cn(
              'relative lg:max-w-[600px] lg:min-w-[500px] lg:h-auto lg:rounded-lg z-20',
              className
            )}>
            {closeIcon && (
              <div className="w-full flex justify-end">
                <button className="text-right p-2" onClick={handleClose}>
                  <CloseIcon height="24" width="24" fill="#1C1B1F" />
                </button>
              </div>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
