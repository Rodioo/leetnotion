import React, {Fragment} from 'react';
import {IoMdClose} from 'react-icons/io';

interface Props {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: Props): React.JSX.Element => {
  return (
    <Fragment>
      <IoMdClose
        className="m-2 absolute right-0 top-0 hover:cursor-pointer text-white w-6 h-6"
        onClick={onClose}
      />
      <div className="relative text-white font-bold text-xl">SUCCESS</div>
      <div className="relative text-white font-light text-md">You've successfully added LeetCode 1.Two Sum to your Notion page.</div>
    </Fragment>
  );
};

export default SuccessModal;