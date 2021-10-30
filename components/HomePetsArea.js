import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import FilterableSearch from "./FilterableSearch";
import HomePetCard from "./HomePetCard";

const HomePetsArea = ({ type, items }) => {
  return (
    <div className="max-w-6xl mx-auto mt-7 px-5 xl:px-0">
      <div className="flex justify-between my-5">
        <div className="flex items-center space-x-2">
          <h3 className="text-mainblue font-semibold text-xl">{type}</h3>
          <FilterableSearch />
        </div>

        <div className="hidden sm:flex items-center space-x-3">
          <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
          <ChevronRightIcon className="h-5 w-5 text-gray-800" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 sm:gap-4">
        {items.slice(0, 4).map(pet => (
          <HomePetCard
            key={pet.id}
            image={pet.image}
            title={pet.title}
            location={pet.owner.city}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePetsArea;
