import React from "react";
import { SearchIcon, AdjustmentsIcon } from "@heroicons/react/outline";

const FilterableSearch = () => {
  return (
    <div className="flex items-center py-2 px-3 bg-gray-50 rounded-3xl space-x-2 shadow-md">
      <SearchIcon className="h-5 w-5 text-gray-500" />
      <input
        className="w-full pr-10 sm:text-sm rounded-md outline-none"
        type="text"
        placeholder="Search"
      />
      <AdjustmentsIcon className="h-5 w-5 text-gray-500" />
    </div>
  );
};

export default FilterableSearch;
