import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ size, shape, name }) => {
  return (
    <>
      <div>
        <button
          className={`${size} ${shape} font-semibold  bg-linear-to-r from-green-400 to-green-200 
          gap-6 m-4 p-4`}
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
