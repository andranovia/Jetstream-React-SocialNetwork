import React from 'react';

import CommentInput from './CommentInput';
import UserComments from './UserComments';

export default function CommentComponents({ posts }:any) {
  return (
    <div>
      <div className=" flex flex-col mt-">
        <div className="bg-gray-100 min-h-screen p-4 ">
          <div className="container mx-auto mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex flex-col items-center space-x-4">
             
                <div>
                  <CommentInput />
                </div>
              </div>
              <UserComments posts={posts}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
