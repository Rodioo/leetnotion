import React from 'react';

interface Props {
  type: 'submit' | 'reset' | 'button';
  text: string;
}

const Input = ({type, text}: Props): React.JSX.Element => {
  return (
    <button
      className="text-lg text-white bg-black rounded-lg py-2"
      type={type}>
      {text}
    </button>
  );
};

export default Input;
