import React from "react";
import Header from "../components/Header";
import MissingCard from "../components/MissingCard";

const missing = () => {
  return (
    <div>
      <Header pagename="Missing" backIcon={true} searchBox={true} />

      <div className="min-h-screen max-w-6xl mx-auto block sm:flex justify-center items-center flex-col pb-28 sm:pb-0">
        <div className="hidden sm:block text-left w-full">
          <h3 className="text-mainblue text-lg font-medium mb-5 ml-5">
            Missing
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 px-5 lg:px-0 mt-5 sm:mt-0">
          <MissingCard />
          <MissingCard />
          <MissingCard />
          <MissingCard />
          <MissingCard />
          <MissingCard />
          <MissingCard />
          <MissingCard />
          <MissingCard />
        </div>
      </div>
    </div>
  );
};

export default missing;
