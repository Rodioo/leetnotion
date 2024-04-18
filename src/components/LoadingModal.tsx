import React, {Fragment} from 'react';

const LoadingModal = (): React.JSX.Element => {
  return (
    <Fragment>
      <div className="relative text-xl font-bold text-white">Loading</div>
      <div className="text-md relative font-light text-white">
        You've successfully added LeetCode 1.Two Sum to your Notion page.
      </div>
    </Fragment>
  );
};

export default LoadingModal;
