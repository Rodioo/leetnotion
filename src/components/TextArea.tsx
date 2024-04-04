import React from 'react';

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({id, label, value, onChange}: Props): React.JSX.Element => {
  return (
    <div className="text-lg">
      <label
        htmlFor={id}
        className="ml-0.5 font-medium">
        {label}
      </label>
      <textarea
        className={`min-h-12 w-full rounded-lg border-2 border-gray-200 bg-transparent p-2 font-light`}
        placeholder="Describe your algorithm in a few words"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
