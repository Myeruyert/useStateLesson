import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const profiles = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const UserCard = ({
  id,
  firstName,
  age,
  email,
  address,
  phone,
  jobTitle,
  userImg,
  deleteChange
}

) => {
  const deleteLine = (e) => {
    deleteChange(e.target.value);
  }

  return (
    <div className="grid grid-cols-12 p-5 gap-3 items-center border w-11/12">
      <div className="flex items-center gap-5">
        <div> {id}</div>
        <img
          className="flex-none w-10 h-10 rounded-full"
          src={userImg}
          alt=""
        />
      </div>
      <h1 className="col-span-2 w-30 text-xl">{firstName}</h1>
      <p className="col-span-2">{jobTitle}</p>
      <p className="">{age}</p>
      <p className="">{phone}</p>
      <p className="col-span-2">{email}</p>
      <p className="col-span-2">{address}</p>
      <button className="text-xl ml-10"
        onClick={deleteLine}
      >
      <TiDeleteOutline />
      </button>
    </div>
  );
};

export default UserCard;
