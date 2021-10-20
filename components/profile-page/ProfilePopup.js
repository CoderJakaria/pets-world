import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ProfilePopup = ({ isPopup, setIsPopup }) => {
  //   this is for closing modal
  const onCloseModal = () => setIsPopup(false);
  return (
    <Modal open={isPopup} onClose={onCloseModal} center>
      <div className="bg-mainblue p-10">
        <h2>Mohammed Jakaria</h2>
      </div>
    </Modal>
  );
};

export default ProfilePopup;
