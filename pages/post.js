import React from "react";
import Header from "../components/Header";
import {
  SearchIcon,
  PhotographIcon,
  InboxIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";

const post = () => {
  return (
    <div>
      <Header pagename="Post" />

      <div className="min-h-screen max-w-6xl mx-auto block sm:flex justify-center items-center flex-col pb-28 sm:pb-0">
        <div className="hidden sm:block text-center w-full">
          <h3 className="text-mainblue text-lg font-medium mb-5 ml-5">Post</h3>
        </div>

        <div className="max-w-3xl flex space-x-5 px-5 lg:px-0 mt-5 sm:mt-0">
          <div className="left-box flex-half">
            <label htmlFor="file-up">
              <div
                className="p-7 flex items-center justify-center flex-col rounded-md mb-5"
                style={{
                  background:
                    "linear-gradient(to right, #000 33%, #fff 0%) top/15px 2px repeat-x, linear-gradient(#000 33%, #fff 0%) right/2px 15px repeat-y, linear-gradient(to right, #000 33%, #fff 0%) bottom/15px 2px repeat-x,linear-gradient(#000 33%, #fff 0%) left/2px 15px repeat-y",
                }}
              >
                <PhotographIcon className="w-28 h-28 text-gray-500" />
                <button className="text-sm bg-mainblue p-1 px-2 rounded-sm">
                  Upload photo
                </button>
              </div>
            </label>
            <input
              type="file"
              className="up-here"
              id="file-up"
              className="hidden"
            />

            <div className="relative">
              <div
                alt=""
                className="up-img h-44 w-64 object-cover rounded-md bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                  backgroundPosition: "0 -50px",
                }}
              />

              <div className="absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center flex-col">
                <CheckCircleIcon className="h-10 w-10 text-green-500" />
                <p className="text-base text-white font-medium">Uploaded</p>
              </div>
            </div>
          </div>

          <div className="flex-half">
            <textarea
              placeholder="Write something here"
              cols="5"
              rows="5"
              className="block w-full outline-none text-base p-3 rounded-md mb-5 bg-gray-200"
            ></textarea>

            <label className="text-base" htmlFor="phone">
              Phone
            </label>
            <div className="flex items-center py-2 px-3 bg-gray-200 rounded-lg space-x-2 mb-5">
              <PhoneIcon className="h-5 w-5 text-gray-500" />
              <input
                className="w-full pr-10 sm:text-sm rounded-md outline-none bg-transparent"
                type="text"
                placeholder="Search"
              />
            </div>

            <label className="text-base" htmlFor="email">
              Email
            </label>
            <div className="flex items-center py-2 px-3 bg-gray-200 rounded-lg space-x-2 mb-5">
              <InboxIcon className="h-5 w-5 text-gray-500" />
              <input
                className="w-full pr-10 sm:text-sm rounded-md outline-none bg-transparent"
                type="email"
                placeholder="yourmail@gmail.com"
              />
            </div>

            <label className="text-base" htmlFor="find">
              Where you find?
            </label>
            <div className="flex items-center py-2 px-3 bg-gray-200 rounded-lg space-x-2 mb-5">
              <LocationMarkerIcon className="h-5 w-5 text-gray-500" />
              <input
                className="w-full pr-10 sm:text-sm rounded-md outline-none bg-transparent"
                type="text"
                placeholder="Search"
              />
            </div>

            <button className="w-full bg-mainblue py-2 text-sm rounded-md mt-2 text-white">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default post;
