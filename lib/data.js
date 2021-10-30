const DATA = [
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
];

export default DATA;
