import React from "react";

function Input({ label, type = "text", id, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-1 text-slate-400" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-transparent rounded-xl border 
        border-slate-500 text-slate-400 w-full 
        md:w-auto pl-2 pr-2 pt-3 pb-3"
      />
    </div>
  );
}

export default Input;
