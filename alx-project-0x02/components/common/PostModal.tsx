import React, { useState } from "react";
import { CardProps, PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSave }) => {
  // Local state for the form inputs
  const [formData, setFormData] = useState<CardProps>({
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    title: "",
    content: "",
  });

  // Handle input changes dynamically
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData); // Pass data up to parent

    // Reset form (optional)
    setFormData({
      id: "",
      username: "",
      firstName: "",
      lastName: "",
      title: "",
      content: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-2xl relative animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: ID & Username */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
              required
            />
            <input
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>

          {/* Row 2: Names */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>

          {/* Title */}
          <input
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded-md w-full font-semibold"
            required
          />

          {/* Content */}
          <textarea
            name="content"
            placeholder="What's on your mind?"
            value={formData.content}
            onChange={handleChange}
            className="border p-2 rounded-md w-full h-24 resize-none"
            required
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 shadow-md transition"
            >
              Save Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
