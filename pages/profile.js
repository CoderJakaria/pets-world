import React, { useState } from "react";
import Header from "../components/Header";
import ProfilePopup from "../components/profile-page/ProfilePopup";
import { PencilAltIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import IconInput from "../components/profile-page/IconInput";

const profile = () => {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <div className="min-h-screen">
      <Header pagename="Profile" backIcon={true} />
      <ProfilePopup isPopup={isPopup} setIsPopup={setIsPopup} />

      <div className="max-w-3xl mx-auto py-5">
        <div className="hidden sm:block text-center w-full">
          <h3 className="text-mainblue text-lg font-medium mb-5 ml-5">
            Profile
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col">
          {/* Top (profile pic, name and account description) */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-20 h-20 rounded-full object-cover"
            />
            <PencilAltIcon
              className="h-5 w-5 rounded-full text-white bg-gray-700 absolute bottom-0 right-0 p-1 box-content cursor-pointer"
              onClick={() => {
                setIsPopup(true);
              }}
            />
          </div>

          <div className="text-center">
            <h3 className="font-bold text-lg text-gray-700">Eakub Ali</h3>
            <p className="font-normal text-sm text-gray-600 text-center">
              Hi Iam Mohammed Jakaria. Iam From Bangladesh. My Hobby is
              Programming, Learning new thing.
            </p>
          </div>
        </div>

        <div className="flex space-x-5 my-5">
          <div className="flex-half py-2 px-3 bg-gray-50 rounded-lg shadow-lg">
            <label className="block text-sm font-medium" htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              className="w-full py-2 pr-10 sm:text-sm rounded-md outline-none"
            />
          </div>
          <div className="flex-half py-2 px-3 bg-gray-50 rounded-lg shadow-lg">
            <label className="block text-sm font-medium" htmlFor="lastName">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter first name"
              className="w-full py-2 pr-10 sm:text-sm rounded-md outline-none"
            />
          </div>
        </div>

        <div className="flex space-x-5 mb-5">
          <IconInput
            label="First name"
            placeholder="first name"
            Icon={SearchIcon}
            type="text"
            id="firstname"
          />
          <IconInput
            label="Last name"
            placeholder="last name"
            Icon={SearchIcon}
            type="text"
            id="lastname"
          />
        </div>

        <div className="flex space-x-5 mb-5">
          <IconInput
            label="Phone"
            placeholder="enter your phone"
            Icon={SearchIcon}
            type="number"
            id="phone"
          />
          <IconInput
            label="Password"
            placeholder="enter password"
            Icon={SearchIcon}
            type="password"
            id="password"
          />
        </div>

        <div className="flex space-x-5 mb-5">
          <IconInput
            label="Street Address"
            placeholder="street address here"
            Icon={SearchIcon}
            type="text"
            id="street"
          />
          <IconInput
            label="Apartment"
            placeholder="apartment here"
            Icon={SearchIcon}
            type="text"
            id="apartment"
          />
        </div>

        <div className="flex space-x-5 mb-5">
          <IconInput
            label="City"
            placeholder="enter your city"
            Icon={SearchIcon}
            type="text"
            id="city"
          />
          <IconInput
            label="Zip"
            placeholder="enter your zip code"
            Icon={SearchIcon}
            type="text"
            id="zip"
          />
        </div>

        <div className="w-full py-2 px-3 mb-5 bg-gray-50 rounded-lg shadow-lg">
          <label htmlFor="country" className="text-sm font-medium">
            Country
          </label>
          <div className="flex items-center py-2 px-2 bg-gray-50 space-x-2">
            <SearchIcon className="h-5 w-5 text-gray-500" />
            <input
              className="w-full pr-10 sm:text-sm rounded-md outline-none"
              type="text"
              placeholder="write your country"
              id="country"
            />
          </div>
        </div>

        <button
          className={`bg-mainblue w-full text-white p-2 rounded-lg font-medium`}
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default profile;
