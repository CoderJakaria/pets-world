import React, { useState, useRef } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import emailjs from "emailjs-com";

const ContactPopup = ({ isPopup, setIsPopup }) => {
  // reference of our form we need it for sending email
  const form = useRef();

  //   state of button text (for dynamic changing)
  const [btnText, setBtnText] = useState("Send");

  //   state for button (disable/enable) dynamically disable or enable
  const [btnDisable, setBtnDisable] = useState(true);

  //   our inputs states
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  //   when inputs are typing this function will run
  const handleChanges = e => {
    const name = e.target.name;
    const value = e.target.value;

    // set the value of input (dynamically)
    setInputs({ ...inputs, [name]: value });

    // simple validating if inputs are valid
    if (inputs.fullName && inputs.email && inputs.message.length > 50) {
      // if inputs are valid we enable the button   (by default we disabled the button)
      setBtnDisable(false);
    } else {
      // if inputs are invalid button is disabled
      setBtnDisable(true);
    }

    setBtnText("Send");
  };

  //   this is for closing modal
  const onCloseModal = () => setIsPopup(false);

  //   when button was clicked this function will run
  const hitToSend = e => {
    e.preventDefault();

    // changing the (send button text) (dynamically)
    setBtnText("Sending");
    // disable the button when its submited
    setBtnDisable(true);

    // sending the email
    emailjs
      .sendForm(
        "default_service",
        "template_j1nzpj8",
        form.current,
        "user_xemH8haU29QuVqvSqCva5"
      )
      .then(
        result => {
          setBtnText("Sended Successfully");

          setTimeout(() => {
            setInputs({ fullName: "", email: "", message: "" });
            setIsPopup(false);
            setBtnText("Send");
          }, 2000);
        },
        error => {
          console.log(error.text);
          setBtnText("Sending Failed!");
        }
      );
  };

  return (
    <Modal open={isPopup} onClose={onCloseModal} center>
      <form ref={form} onSubmit={hitToSend} className="flex flex-col p-5">
        <h3 className="font-semibold text-2xl mb-5 text-center">Contact Me</h3>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={inputs.fullName}
          onChange={handleChanges}
          className="bg-gray-100 border border-gray-200 mb-3 py-2 px-5 rounded-lg outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={inputs.email}
          onChange={handleChanges}
          className="bg-gray-100 border border-gray-200 mb-3 py-2 px-5 rounded-lg outline-none"
        />

        <textarea
          cols="30"
          rows="5"
          placeholder="Write your message..."
          name="message"
          value={inputs.message}
          onChange={handleChanges}
          className="bg-gray-100 border border-gray-200 py-2 px-5 rounded-lg outline-none"
        ></textarea>
        {/* validating when this label will show */}
        {inputs.message.length < 50 && (
          <label className="text-mainblue text-red-500 text-sm">
            Enter minimum 50 characters ({inputs.message.length})
          </label>
        )}

        <button
          className={`bg-mainblue mt-5 text-white p-2 rounded-lg font-medium ${
            btnDisable && "cursor-not-allowed"
          } `}
          disabled={btnDisable}
          type="submit"
        >
          {btnText}
        </button>
      </form>
    </Modal>
  );
};

export default ContactPopup;
