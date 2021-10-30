import React from "react";
import { LocationMarkerIcon, ShareIcon } from "@heroicons/react/solid";

const HomePetCard = ({ image, title, location }) => {
  return (
    <div className="rounded-md shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover rounded-md"
      />
      <div className="flex justify-between items-center mt-2 px-3 py-2">
        <div>
          <h3 className="font-semibold text-base">{title}</h3>
          <div className="flex items-center space-x-1">
            <LocationMarkerIcon className="h-4 w-4 text-gray-800" />
            <p className="text-base">{location}</p>
          </div>
        </div>

        <ShareIcon className="h-5 w-5 text-gray-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default HomePetCard;
