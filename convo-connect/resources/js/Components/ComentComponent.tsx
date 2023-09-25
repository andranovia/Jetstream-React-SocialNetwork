import React from 'react';

import CommentInput from './CommentInput';

export default function CommentComponents() {
  return (
    
    <div>
      <div className=" flex flex-col">
        

        <div className="bg-gray-100 h-full p-4 ">
          <div className="container mx-auto mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
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
