import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import React from "react";

const home: React.FC<CardProps> = () => {
  return (
    <>
      <div>
        <Header />
        <h1>This is the pages/home page.</h1>
        <Card title="How to get away with anything." content="Coming soon" />
      </div>
    </>
  );
};

export default home;
