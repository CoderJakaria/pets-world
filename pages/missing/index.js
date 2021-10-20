import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loader from "../../components/loader/Loader";
import MissingCard from "../../components/MissingCard";

const missing = () => {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPets([
        {
          title: "Bella Cat",
          image:
            "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Robert",
            city: "Los Angeles",
          },
          phone: "+8801463964564",
          city: "CTG",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 5,
          id: 45,
        },

        {
          title: "X Dog",
          image:
            "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Jessica",
            city: "New York",
          },
          phone: "+880177-896-83-98",
          city: "Dhaka",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 3,
          id: 54,
        },

        {
          title: "Y Cat",
          image:
            "https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Mehmed",
            city: "Istanbul",
          },
          phone: "+880177-896-83-98",
          city: "CTG",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 10,
          id: 76,
        },

        {
          title: "Bella Cat",
          image:
            "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Robert",
            city: "Los Angeles",
          },
          phone: "+8801463964564",
          city: "CTG",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 5,
          id: 34,
        },

        {
          title: "X Dog",
          image:
            "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Jessica",
            city: "New York",
          },
          phone: "+880177-896-83-98",
          city: "Dhaka",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 3,
          id: 11,
        },

        {
          title: "Y Cat",
          image:
            "https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Mehmed",
            city: "Istanbul",
          },
          phone: "+880177-896-83-98",
          city: "CTG",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 10,
          id: 22,
        },
        {
          title: "Bella Cat",
          image:
            "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Robert",
            city: "Los Angeles",
          },
          phone: "+8801463964564",
          city: "CTG",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 5,
          id: 33,
        },

        {
          title: "X Dog",
          image:
            "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Jessica",
            city: "New York",
          },
          phone: "+880177-896-83-98",
          city: "Dhaka",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 3,
          id: 44,
        },

        {
          title: "Y Cat",
          image:
            "https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          owner: {
            name: "Mehmed",
            city: "Istanbul",
          },
          phone: "+880177-896-83-98",
          city: "CTG",
          country: "Bangladesh",
          description:
            "While I was walking on the street besides my home. Even that time was riny and strom. I found this cat there, it was crying. Maybe this owner lost him. Now, I am caring this pet. If the owner can see my post. please contact me to get this pet back. Thank you",
          comments: 10,
          id: 99,
        },
      ]);
    }, 3000);
  });

  return (
    <div className="min-h-screen">
      <Header pagename="Missing" backIcon={true} searchBox={true} />

      <div className="max-w-6xl mx-auto block sm:flex justify-center items-center flex-col pb-28 sm:pb-0">
        {pets ? (
          <>
            <div className="hidden sm:block text-left w-full">
              <h3 className="text-mainblue text-lg font-medium mt-2 mb-3 ml-5">
                Missing
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 px-5 lg:px-0 mt-5 sm:mt-0">
              {pets.map(pet => (
                <MissingCard
                  key={pet.id}
                  title={pet.title}
                  description={pet.description}
                  image={pet.image}
                  owner={pet.owner}
                  city={pet.city}
                  country={pet.country}
                  comments={pet.comments}
                />
              ))}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default missing;
