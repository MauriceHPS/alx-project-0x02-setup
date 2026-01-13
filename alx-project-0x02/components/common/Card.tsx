import { CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <>
      <div>
        <p>Title: {title}</p>
        <p>Content: {content}</p>
      </div>
    </>
  );
};

export default Card;
