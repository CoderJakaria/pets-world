import React from "react";
import {
  SearchIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { LocationMarkerIcon, AcademicCapIcon } from "@heroicons/react/solid";

const MissingCard = () => {
  return (
    <div className="flex items-center sm:w-auto w-full space-x-5 p-4 bg-white rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-32 h-32 rounded-md"
      />

      <div>
        <h3>Black cat (Missing)</h3>
        <div className="flex items-center space-x-2">
          <UserIcon className="h-3 w-3 text-gray-500" />{" "}
          <p className="text-sm">Mohammed Jakaria</p>
        </div>
        <div className="flex items-center space-x-2">
          <LocationMarkerIcon className="h-3 w-3 text-gray-500" />{" "}
          <p className="text-sm">CTG, Bangladesh</p>
        </div>
        <p className="text-red-500 text-sm">If found please return to owner</p>
      </div>
    </div>
  );
};

export default MissingCard;
