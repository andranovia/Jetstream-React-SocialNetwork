import React from 'react';

import CommentInput from './CommentInput';

export default function CommentComponents() {
  return (
    
    <div>
      <div className=" flex flex-col mt-">

        <div className="bg-gray-100 min-h-screen p-4 ">
          <div className="container mx-auto mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex flex-col items-center space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User Profile"
                  className="w-[5rem] h-auto rounded-full"
                />
                <div>
                  <CommentInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
