import { Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface FederalSAIModalProps {
  onClose: (visible: false) => void;
}

const FederalSAIModal: React.FC<FederalSAIModalProps> = (props) => {
  const { onClose } = props;

  return (
    <Transition.Root show as={Fragment}>
      <div>hello</div>
    </Transition.Root>
  );
};

export default FederalSAIModal;
