import React from 'react';

const TextInput = props => {
  const {label, error, name} = props;

  const _onChange = e => {
    props.onChange(name, e.target.value);
  };

  return (
    <section className="form mb-4">
      <div className="w-48 mb-4 flex flex-row justify-between w-full">
        <label className="text-gray-500">{label}</label>
      </div>
      {props.isTextArea ? (
        <textarea
          className={`border-2 rounded-sm h-24 w-full p-4 text-sm bg-gray-200  focus:outline-none text-dark ${
            error ? 'border-red-400' : 'border-none'
          }`}
          onChange={_onChange}
          {...props}
        />
      ) : (
        <input
          className={`border-2 rounded-sm h-10 w-full px-2 bg-gray-200  focus:outline-none text-dark ${
            error ? 'border-red-400' : 'border-none'
          }`}
          onChange={_onChange}
          {...props}
        />
      )}
      {error && (
        <label className="flex flex-row self-end text-red-400 text-sm">
          *{error}
        </label>
      )}
    </section>
  );
};

export default TextInput;
