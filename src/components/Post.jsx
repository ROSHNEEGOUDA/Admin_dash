import React from 'react';

const Post = ({ post, onDelete }) => {
  return (
    <div className="relative border p-4 rounded-lg shadow-lg mb-4 bg-white">
      <button
        onClick={() => onDelete(post.id)}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800"
      >
        Delete
      </button>
      <div className="flex items-center mb-2">
        <img
          src={post.profilePic}
          alt="profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="font-semibold">{post.username}</span>
      </div>
      <div className="text-gray-800">{post.content}</div>
    </div>
  );
};

export default Post;
