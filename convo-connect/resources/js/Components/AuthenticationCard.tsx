import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col sm:bottom-20  sm:justify-center items-center sm:pt-0  dark:bg-gray-900">
      <div>
        <AuthenticationCardLogo />
      </div>
      

      <div className="w-[20rem] sm:w-full sm:max-w-md  px-6 py-4 bg-white dark:bg-gray-800 shadow-ShadowCard overflow-hidden sm:rounded-lg">
        {children}
      </div>
      <div className="absolute -top-40 sm:top-0 left-40  w-[20rem] h-[18rem] mix-blend-multiply filter blur-xl opacity-[8%] bg-yellow-400 rounded-full animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 sm:top-20 -left-10 w-[20rem] h-[15rem] sm:w-[25rem] sm:h-[25rem] mix-blend-multiply filter blur-xl opacity-10 bg-blue-400 rounded-full animate-blob animation-delay-4000"></div>
    </div>
  );
}
