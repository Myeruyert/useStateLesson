import React from "react";

const UserCard = ({
  id,
  firstName,
  age,
  email,
  address,
  phone,
  jobTitle,
  userImg,
}) => {
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
      <p className="col-span-3">{address}</p>
    </div>
  );
};

export default UserCard;
