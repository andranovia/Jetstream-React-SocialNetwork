import React from 'react';

export default function UserComments({ posts }: any) {
  console.log(posts);
  return (
    <>
      <div className="relative">
        <h1>My Super Blog</h1>
        <hr />
        <div>
        <div className="grid grid-cols-4 mt-10">
         
          {posts &&
            posts.map(item => (
              <div key={item.id} className='flex justify-center gap-2'>
                 <img
            src="https://via.placeholder.com/50"
            alt="User Profile"
            className="w-[2rem] h-auto rounded-full"
          />
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
        </div>
        </div>
      </div>
    </>
  );
}
