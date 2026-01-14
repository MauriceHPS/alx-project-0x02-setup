import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <>
      <div>
        <div className="grid md:grid-cols-3 sm:md-grid-cols-1 lg:grid-cols-4 bg-purple-200">
          <div className="text-2xl font-bold text-gray-800">
            <span>ID: {id}</span>
          </div>

          <div className="font-medium text-gray-700">
            <span>Name: {name}</span>
            <span>Username: @{username}</span>
            <span>Email: {email}</span>
            <span>Street: {address.street}</span>
            <span>Suite: {address.suite}</span>
            <span>City: {address.city}</span>
            <span>Zipcode: {address.zipcode}</span>
            <span>Lat: {address.geo.lat}</span>
            <span>Longitude: {address.geo.lng}</span>
            <span>Company Name: {company.name}</span>
            <span>Catch Phrase: {company.catchPhrase}</span>
            <span>BS: {company.bs}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
