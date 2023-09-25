import React, { PropsWithChildren } from 'react';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <div className="relative h-screen flex flex-col sm:bottom-20 sm:justify-center items-center sm:pt-0 mx-10 dark:bg-gray-900">
      <div>
        <AuthenticationCardLogo />
      </div>

      <div className="w-full sm:max-w-md  px-6 py-4 bg-white dark:bg-gray-800 shadow-ShadowCard overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
