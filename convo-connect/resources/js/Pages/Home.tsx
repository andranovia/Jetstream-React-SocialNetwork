import React from 'react';

import AppLayout from '@/Layouts/AppLayout';
import CommentComponents from '@/Components/ComentComponent';

export default function Dashboard() {
  return (
    <AppLayout title="Home">
      <div className="py-12">
        <div className="max-w-7xl h-[20rem] mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
            <CommentComponents/>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
