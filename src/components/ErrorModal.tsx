import React, {Fragment} from 'react';
import {IoMdClose} from 'react-icons/io';

interface Props {
  onClose: () => void;
}

const ErrorModal = ({onClose}: Props): React.JSX.Element => {
  return (
    <Fragment>
      <IoMdClose
        className="absolute right-0 top-0 m-2 h-6 w-6 text-white hover:cursor-pointer"
        onClick={onClose}
      />
      <div className="relative text-xl font-bold text-white">ERROR</div>
      <div className="text-md relative font-light text-white">
        Failed to add LeetCode 1. Two Sum:
      </div>
    </Fragment>
  );
};

export default ErrorModal;
