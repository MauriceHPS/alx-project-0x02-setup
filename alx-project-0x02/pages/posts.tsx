import Header from "@/components/layout/Header";
import React from "react";

const posts = () => {
  return (
    <>
      <Header />
      <div
        className="bg-linear-to-r from-indigo-300 to-purple-100
      grid grid-col-1 justify-center items-center min-h-screen"
      >
        <h1>This is the posts page.</h1>
      </div>
    </>
  );
};

export default posts;
