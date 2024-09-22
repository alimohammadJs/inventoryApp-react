import React from "react";

function SelectInput({ label, id, name, onChange, options, value }) {
  return (
    <div>
      <label className="block mb-1 text-slate-400" htmlFor={id}>
        {label}
      </label>
      <select
        className="bg-transparent text-slate-400 rounded-xl w-full pl-2 pr-2 pt-3 pb-3"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      >
        <option value=""></option>
        {options.map((option) => {
          return (
            <option
              className="bg-slate-500 text-slate-300"
              key={option.id || option.title}
              value={option.title}
            >
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;
