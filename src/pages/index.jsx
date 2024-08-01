import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";
import UserCard from "@/components/user.card";
import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const inter = Inter({ subsets: ["latin"] });

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

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(profiles);

  const handleChange = (text) => {
    setSearchValue(text);

    const findUser = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };

  const deleteUser = (userId) => {
    console.log("userId", userId);
    const deletedUser = users.filter((user) => user.id !== userId);
    setUsers(deletedUser);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl text-gray-950 mb-5">User Find Application</h1>
      <div className="mb-10">
        <Input handleChange={handleChange} />
        {/* <input
          className="border border-gray-400"
          type="text"
          onChange={handleChange}
        /> */}
        <p>Search value: {searchValue}</p>
        <button
          className="border rounded px-2 mr-2 mt-2"
          onClick={() => {
            console.log("clear");
            setUsers(null);
          }}
        >
          Clear
        </button>
        <button
          className="border rounded px-2"
          onClick={() => {
            console.log("view");
            setUsers(profiles);
          }}
        >
          View
        </button>
        {/* <button className="text-center ml-2"
        onClick={() => {
          console.log("delete");
            setUsers(users.splice(1));
        }}
      >
      <TiDeleteOutline />
      </button> */}
      </div>
      {/* {profiles?.length !== 0 ? (
        profiles?.map((profile) => (
          <UserCard
            id={profile.id}
          />
        ))
      ) : (
        <p>Empty</p>
      )} */}

      {users?.map((profile) => (
        <UserCard
          userId={profile.id}
          firstName={profile.firstName}
          age={profile.age}
          email={profile.email}
          address={profile.address}
          phone={profile.phone}
          jobTitle={profile.jobTitle}
          userImg={profile.imageUrl}
          deleteUser={deleteUser}
        />
      ))}
      {!profiles && <p>Empty</p>}
    </main>
  );
}
