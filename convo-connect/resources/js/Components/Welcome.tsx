import React, { PropsWithChildren } from 'react';
import image from '../../../public/img/one.webp';

interface WelcomeComponentsProps {
  children: React.ReactNode;
}

export default function WelcomeComponents({
  children,
}: WelcomeComponentsProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative container ">
        <div className="absolute top-10 left-40  w-[25rem] h-[20rem] mix-blend-multiply filter blur-xl opacity-[8%] bg-yellow-400 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute top-10 right-40 w-[25rem] h-[20rem] mix-blend-multiply filter blur-xl opacity-10 bg-blue-400 rounded-full animate-blob animation-delay-4000"></div>
        <div className=" flex justify-center ">
          <div className="flex justify-center items-center">
            <div className="mx-auto sm:shadow-ShadowCard rounded-md bg-white">
              <img
                src={image}
                alt="User Profile"
                className="relative w-[20rem] left-[4em] h-auto   sm:mb-[-2rem]  hover:scale-105 transform transition-transform duration-500"
              />

              <div className="flex flex-col items-center ">
                <h1 className="text-3xl font-semibold text-gray-800">
                  Welcome to ConvoApp
                </h1>
                <p className="text-gray-600 text-lg">
                  We are excited to have you here.
                </p>
                <div className="my-20">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
