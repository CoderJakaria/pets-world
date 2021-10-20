import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ContactPopup from "../../components/contactPopup";
import { useSelector } from "react-redux";

const Pet = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [localPet, setLocalPet] = useState({});
  const pet = useSelector(state => state.missingPet.pet[0]);

  // we getting the pet info from localstorage when redux is empty (haha)
  useEffect(() => {
    setLocalPet(JSON.parse(localStorage.getItem("missingPet")));
  }, []);

  return (
    <div className="max-h-screen">
      <Header pagename="Details" />
      <Main
        setIsPopup={setIsPopup}
        title={pet ? pet.title : localPet?.title}
        description={pet ? pet.description : localPet?.description}
        image={pet ? pet.image : localPet?.image}
        city={pet ? pet.city : localPet?.title}
        country={pet ? pet.country : localPet?.country}
        comments={pet ? pet.comments : localPet?.comments}
        owner={pet ? pet.owner : localPet?.owner}
      />

      <ContactPopup isPopup={isPopup} setIsPopup={setIsPopup} />
    </div>
  );
};

export default Pet;
