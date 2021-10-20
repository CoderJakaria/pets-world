import React from "react";
import { DotsCircleHorizontalIcon, UserIcon } from "@heroicons/react/outline";
import {
  LocationMarkerIcon,
  AcademicCapIcon,
  ChatIcon,
} from "@heroicons/react/solid";

const Main = ({
  setIsPopup,
  image,
  title,
  description,
  comments,
  city,
  country,
  owner,
}) => {
  return (
    <div className="w-full flex justify-center items-center pb-28 sm:pb-0">
      <div className="mt-5">
        <h3 className="hidden sm:block text-mainblue text-base font-medium text-center">
          Details
        </h3>

        <div className="block sm:flex max-w-full sm:max-w-3xl mx-4 mt-4">
          <img
            src={image}
            alt={title}
            className="w-full sm:w-72 h-96 object-cover  rounded-xl shadow-lg flex-half"
          />

          <div className="pl-5 flex-half">
            <h2 className="font-semibold text-center sm:text-left mt-4 sm:mt-0 text-xl text-gray-700">
              {title} (Found)
            </h2>
            <p className="text-sm text-center sm:text-left text-gray-500">
              {description}
            </p>

            <div className="flex items-center justify-center sm:justify-start space-x-5 my-7">
              <div className="flex flex-col items-center justify-center p-3 shadow-none sm:shadow-md bg-white w-20 h-20 rounded-md">
                <DotsCircleHorizontalIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm truncate text-gray-500">{comments}</p>
              </div>
              <div className="flex flex-col items-center justify-center p-3 shadow-none sm:shadow-md bg-white w-20 h-20 rounded-md">
                <LocationMarkerIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm truncate text-gray-500">{city}</p>
              </div>
              <div className="flex flex-col items-center justify-center p-3 shadow-none sm:shadow-md bg-white w-20 h-20 rounded-md">
                <AcademicCapIcon className="h-5 w-5 text-gray-500" />
                <p className="text-sm truncate text-gray-500">{country}</p>
              </div>
            </div>

            <div
              className="flex items-center justify-center sm:justify-start w-36 sm:w-auto bg-white space-x-4 py1 px-4 shadow-md mx-auto sm:mx-0 "
              style={{ width: "fit-content", padding: "20px 30px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />

              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-3 w-3 text-gray-500" />
                  <p className="text-sm">{owner?.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <LocationMarkerIcon className="h-3 w-3 text-gray-500" />
                  <p className="text-sm">{owner?.city}</p>
                </div>
                <button
                  className="flex items-center space-x-2 bg-mainblue px-4 py-1 text-white text-sm rounded-sm"
                  onClick={() => {
                    setIsPopup(true);
                  }}
                >
                  <ChatIcon className="h-3 w-3" />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
