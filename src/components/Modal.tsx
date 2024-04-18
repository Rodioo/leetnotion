import React from 'react';
import SuccessModal from './SuccessModal.tsx';
import ErrorModal from './ErrorModal.tsx';
import LoadingModal from './LoadingModal.tsx';
import {ModalState} from '../common/types/modal_state.type.ts';

interface Props extends ModalState {
  onClose: () => void;
}

const Modal = ({isActive, type, onClose}: Props): React.JSX.Element => {
  return (
    <div
      className={`
        left-0 top-0 h-screen w-screen cursor-not-allowed bg-black bg-opacity-20
        ${isActive ? 'absolute' : 'hidden'}
      `}>
      <div
        className={`
          absolute left-0 right-0 top-16 ml-auto mr-auto w-96 cursor-default rounded-md border px-6 pb-4 pt-2 opacity-100
          ${type === 'success' && 'bg-green-600'}
          ${type === 'error' && 'bg-red-600'}
          ${type === 'loading' && 'bg-black'}
        `}>
        {type === 'success' && <SuccessModal onClose={onClose} />}
        {type === 'error' && <ErrorModal onClose={onClose} />}
        {type === 'loading' && <LoadingModal />}
      </div>
    </div>
  );
};

export default Modal;
