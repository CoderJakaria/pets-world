import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HomePetsArea from "../components/HomePetsArea";
import Loader from "../components/loader/Loader";
import data from "../lib/data";

const Index = ({ loader }) => {
  const [isLoading, setLoading] = useState(loader);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="pb-20 sm:pb-5">
      <Header pagename="Details" items={data} />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Missing thing here */}
          <HomePetsArea type="Missing" items={data} />

          {/* Found thing here */}
          <HomePetsArea type="Found" items={data} />

          {/* Adopt thing here */}
          <HomePetsArea type="Adopt" items={data} />
        </>
      )}
    </div>
  );
};

export default Index;

export function getServerSideProps() {
  return {
    props: {
      loader: true,
    },
  };
}
