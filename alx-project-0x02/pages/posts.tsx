import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import React from "react";

const posts: React.FC<PostProps[]> = ({ posts }) => {
  return (
    <>
      <Header />
      <div
        className="bg-linear-to-r from-indigo-300 to-purple-100
     flex flex-col min-h-screen"
      >
        <main className="p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Posts Page</h1>
            <button className="bg-blue-700 hover:bg-blue-500 px-4 py-2 rounded-full text-white">
              Add Post
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
            {posts?.map(
              ({ title, content, userId, body }: PostProps, key: number) => (
                <PostCard
                  title={title}
                  content={content ? content : body}
                  userId={userId}
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
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default posts;
