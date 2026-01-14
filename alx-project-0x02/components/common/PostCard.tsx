import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ content, title, userId, body }) => {
  return (
    <>
      <div
        className="h-full flex flex-col max-w-xl my-6 p-6 bg-purple-100 rounded-lg shadow-lg
       hover:shadow-x1 transition-shadow duration-300"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        </div>
        <p>User ID: {userId}</p>
        <p
          className="grow mt-4 flex items-center justify-between 
        text-sm text-gray-500"
        >
          Content: {content}
        </p>
      </div>
    </>
  );
};

export default PostCard;
