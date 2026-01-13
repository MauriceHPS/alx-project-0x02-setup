import Header from "@/components/layout/Header";
import React from "react";

const index = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-linear-to-r from-pink-400 to-pink-100 text-black ">
        <Header />
        <main className="flex flex-col flex-1 items-center justify-center">
          <h1 className="items-center justify-between text-3xl font-bold">
            Welcome to the home page
          </h1>
        </main>
      </div>
    </>
  );
};

export default index;
