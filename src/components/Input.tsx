import React from 'react';

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({id, label, value, onChange}: Props): React.JSX.Element => {
  return (
    <div className="text-lg">
      <label
        htmlFor={id}
        className="ml-0.5 font-medium">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-lg border-2 border-gray-200 bg-transparent p-2 font-light`}
        placeholder="Which problem did you solve? (Enter the complete URL)"
        type="url"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
