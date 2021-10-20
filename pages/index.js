import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import ContactPopup from "../components/contactPopup";

const Index = () => {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <div>
      <Header pagename="Details" />
      <Main setIsPopup={setIsPopup} />

      <ContactPopup isPopup={isPopup} setIsPopup={setIsPopup} />
    </div>
  );
};

export default Index;
