import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import React, { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  //receives data from PostModal and updates the state (Card in the home page.)
  const handleSavePost = (newPost: CardProps) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-linear-to-r from-pink-400 to-pink-100 text-black ">
        <Header />
        <main className="flex flex-col flex-1 items-center justify-center">
          <div className="p-6 m-4 grid rounded-lg place-items-center justify between bg-pink-200">
            <h1 className="items-center justify-between text-3xl font-bold">
              Welcome to the home page
            </h1>
            <h2 className="py-2 text-xl font-semibold">
              Would you like to add a new post?
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-semibold text-xl p-4 m-4 bg-red-200 text-gray-700
             hover:bg-gray-700 hover:text-pink-300 rounded-lg"
            >
              Add Post
            </button>
          </div>

          {/* //Display the data received from the modal form */}
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 ">
            {posts.length === 0 ? (
              <p className="text-white text-lg opacity-80">
                No Post added!!! Be the first to add one?
              </p>
            ) : (
              posts.map((post, Home) => (
                <div
                  key={Home}
                  className="m-4 bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl 
                  transition duration-300 border-l-4 border-pink-500 h-full flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {post.title}
                    </h3>
                    <span className="text-xs text-gray-400">ID: {post.id}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex items-center mt-4 border-t pt-4">
                    <div
                      className="w-8 h-8 rounded-full bg-pink-200 flex items-center 
                    justify-center text-pink-700 font-bold mr-3"
                    >
                      {post.firstName[0]}
                      {post.lastName[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {post.firstName} {post.lastName}
                      </p>
                      <p className="text-xs text-gray-500">@{post.username}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      {/* Modal Form */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
      />
    </>
  );
}
