import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import { ButtonProps } from "@/interfaces";
import React from "react";

const About: React.FC<ButtonProps[]> = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-linear-to-r from-red-400 to-red-200">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">This is the About page.</h1>
          <div
            className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-5  
          place-items-center justify-center"
          >
            <Button size="small" shape="rounded-sm" name="Button 1" />
            <Button size="medium" shape="rounded-md" name="Button 2" />
            <Button size="large" shape="rounded-full" name="Button 3" />
            <Button size="large" shape="rounded-lg" name="Button 4" />
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
