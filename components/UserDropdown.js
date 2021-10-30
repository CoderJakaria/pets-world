import React from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";

const UserDropdown = () => {
  const router = useRouter();
  const [session] = useSession();

  return (
    <div
      className="p-3 bg-white rounded-md absolute top-10 -left-28 w-44 shadow-md"
      onClick={() => {
        router.push("/profile");
      }}
    >
      <div className="flex items-center space-x-3 cursor-pointer">
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <p className="font-medium text-md">{session.user.name}</p>
      </div>

      <button
        onClick={signOut}
        className="bg-mainblue py-1 px-2 text-center text-sm w-full mt-2 rounded-sm active:scale-95"
      >
        Logout
      </button>
    </div>
  );
};

export default UserDropdown;
