import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const UserCard = ({
  userId,
  firstName,
  age,
  email,
  address,
  phone,
  jobTitle,
  userImg,
  deleteUser,
}) => {
  // const deleteLine = (e) => {
  //   deleteChange(e.target.value);
  // };

  return (
    <div className="grid grid-cols-12 p-5 gap-3 items-center border w-11/12">
      <div className="flex items-center gap-5">
        <div> {userId}</div>
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
      {/* <button className="text-xl ml-10" onClick={deleteChange}>
        <TiDeleteOutline />
      </button> */}
      <button
        onClick={() => {
          deleteUser(userId);
        }}
      >
        <TiDeleteOutline />
      </button>
    </div>
  );
};

export default UserCard;
