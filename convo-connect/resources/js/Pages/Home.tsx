import React from 'react';

import AppLayout from '@/Layouts/AppLayout';
import CommentComponents from '@/Components/ComentComponent';


export default function Dashboard({ posts }:any) {
  return (
    <AppLayout title="Home">
      <div className="py-12">
        <div className="max-w-7xl h-[20rem] mx-auto sm:px-6 lg:px-8">
          <div className="bg-white  overflow-hidden shadow-xl sm:rounded-lg">
            <CommentComponents posts={posts}/>
      
          </div>
          
        </div>
      </div>
    </AppLayout>
  );
}
