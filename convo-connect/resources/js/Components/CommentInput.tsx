import React, { useState } from 'react';

const CommentInput = () => {
  return (
    <form>
      <input
        id="comment"
        type="text"
        className="bg-gray-100 border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-full py-2 px-4 w-full"
        placeholder="What's on your mind?"
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentInput;
