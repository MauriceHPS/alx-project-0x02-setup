import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import React from "react";
import UserCard from "@/components/common/UserCard";

const users: React.FC<UserProps[]> = ({ users }) => {
  return (
    <>
      <div className="flex flex-col h-screen bg-purple-200">
        <Header />
        <main className="p-4">
          <div className="relative flex justify-between">
            <h1 className="font-semibold text-2xl text-amber-950 text-center">
              Users Page
            </h1>

            <button
              className="bg-blue-700 hover:bg-blue-500 px-4 py-2 
            rounded-full text-white"
            >
              Add User
            </button>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition">
            {users?.map(
              (
                {
                  id,
                  name,
                  username,
                  email,
                  address,
                  phone,
                  website,
                  company,
                }: UserProps,
                key: number
              ) => (
                <UserCard
                  id={id}
                  name={name}
                  username={username}
                  email={email}
                  address={address}
                  phone={phone}
                  website={website}
                  company={company}
                  key={key}
                />
              )
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default users;
