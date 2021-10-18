import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../public/images/logo.png";
import {
  SearchIcon,
  SearchCircleIcon,
  HomeIcon,
  PhotographIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  ChevronLeftIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";
import {
  LocationMarkerIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const Header = ({ pagename, backIcon, searchBox }) => {
  const router = useRouter();

  return (
    <header className="sticky top-0">
      {/* this is for big screen */}
      <div className="hidden sm:block bg-mainblue sticky top-0 z-50">
        <div className="max-w-6xl mx-5 lg:mx-auto py-4 flex items-center justify-between">
          <div>
            <Link href="/">
              <a>
                <Image src={logo} className="cursor-pointer w-32 h-32" />
              </a>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:underline text-gray-700 text-sm hover:text-white transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/missing"
                  className="hover:underline text-gray-700 text-sm hover:text-white transition duration-200"
                >
                  Missing
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-700 text-sm hover:text-white transition duration-200"
                >
                  Found
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-700 text-sm hover:text-white transition duration-200"
                >
                  Adopt
                </a>
              </li>
              <li>
                <Link
                  href="/post"
                  className="hover:underline text-gray-700 text-sm hover:text-white transition duration-200"
                >
                  Post
                </Link>
              </li>
            </ul>

            {/* Search And SearchIcon */}
            <div className="hidden sm:flex items-center py-2 px-3 bg-gray-50 rounded-3xl">
              <input
                className="w-full pr-10 sm:text-sm rounded-md outline-none"
                type="text"
                placeholder="Search"
              />
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>

            <UserIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* this is for mobile top */}
      <div className="sm:hidden flex items-center justify-between bg-mainblue py-2 px-2 ">
        <div>
          {backIcon ? (
            <ChevronLeftIcon
              className="h-5 w-5 text-white cursor-pointer"
              onClick={() => {
                router.back();
              }}
            />
          ) : (
            <Image src={logo} className="cursor-pointer w-32 h-32" />
          )}
        </div>

        {searchBox ? (
          <div className="flex sm:hidden items-center py-2 px-3 bg-gray-50 rounded-3xl space-x-2">
            <SearchIcon className="h-5 w-5 text-gray-500" />
            <input
              className="w-full pr-10 sm:text-sm rounded-md outline-none"
              type="text"
              placeholder="Search"
            />
            <AdjustmentsIcon className="h-5 w-5 text-gray-500" />
          </div>
        ) : (
          <h3 className="text-white text-sm font-medium">{pagename}</h3>
        )}

        <img
          src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>

      {/*this is for mobile Bottom */}
      <div
        className="block sm:hidden bg-white drop-shadow-lg fixed w-full bottom-0 z-50 flex items-center justify-between px-2 pt-2 pb-5"
        style={{ boxShadow: "0 0 35px -20px grey" }}
      >
        <Link href="/">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <HomeIcon className="h-5 w-5 text-gray-800" />
            <p className="text-xs truncate text-gray-800">Home</p>
          </div>
        </Link>

        <Link href="/missing">
          <a>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <SearchIcon className="h-5 w-5 text-gray-800" />
              <p className="text-xs truncate text-gray-800">Missing</p>
            </div>
          </a>
        </Link>

        <Link href="/post">
          <a>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <PhotographIcon className="h-5 w-5 text-gray-800" />
              <p className="text-xs truncate text-gray-800">Post</p>
            </div>
          </a>
        </Link>

        <div className="flex flex-col items-center justify-center cursor-pointer">
          <UserGroupIcon className="h-5 w-5 text-gray-800" />
          <p className="text-xs truncate text-gray-800">Adopt</p>
        </div>

        <Link href="/">
          <a>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <SearchCircleIcon className="h-5 w-5 text-gray-800" />
              <p className="text-xs truncate text-gray-800">Found</p>
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
