import React from "react";

const IconInput = ({ label, Icon, placeholder, type, id }) => {
  return (
    <div className="flex-half py-2 px-3 bg-gray-50 rounded-lg shadow-lg">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="flex items-center py-2 px-2 bg-gray-50 space-x-2">
        <Icon className="h-5 w-5 text-gray-500" />
        <input
          className="w-full pr-10 sm:text-sm rounded-md outline-none"
          type={type}
          placeholder={placeholder}
          id={id}
        />
      </div>
    </div>
  );
};

export default IconInput;
