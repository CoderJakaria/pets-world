import React from "react";
import { UserIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { missingPet } from "../lib/redux/pet-reducer";
import { useRouter } from "next/router";

const MissingCard = ({
  title,
  description,
  image,
  owner,
  city,
  country,
  comments,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const clickToSingleView = () => {
    const items = {
      title,
      description,
      image,
      owner,
      city,
      country,
      comments,
    };
    dispatch(missingPet(items));

    localStorage.setItem("missingPet", JSON.stringify(items));
    router.push(`/missing/${title}`);
  };

  return (
    <div
      className="flex items-center sm:w-auto w-full space-x-5 p-4 bg-white rounded-lg cursor-pointer"
      onClick={clickToSingleView}
    >
      <img src={image} alt={title} className="w-32 h-32 rounded-md" />

      <div>
        <h3>{title} (Missing)</h3>
        <div className="flex items-center space-x-2">
          <UserIcon className="h-3 w-3 text-gray-500" />
          <p className="text-sm">{owner.name}</p>
        </div>
        <div className="flex items-center space-x-2">
          <LocationMarkerIcon className="h-3 w-3 text-gray-500" />
          <p className="text-sm">
            {city}, {country}
          </p>
        </div>
        <p className="text-red-500 text-sm">If found please return to owner</p>
      </div>
    </div>
  );
};

export default MissingCard;
