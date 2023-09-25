import React, { PropsWithChildren } from 'react';
import image from '../../../public/img/one.webp';

interface WelcomeComponentsProps {
  children: React.ReactNode;
}

export default function WelcomeComponents({
  children,
}: WelcomeComponentsProps) {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg ">
          <div className="flex justify-center flex-col items-center">
            <div className="mx-auto  p-8">

                <img
                  src={image}
                  alt="User Profile"
                  className="w-[20rem] h-auto mx-20  sm:mb-[-2rem]  hover:scale-105 transform transition-transform duration-500"
                />
        
              <div className="flex flex-col items-center ">
                <h1 className="text-3xl font-semibold text-gray-800">
                  Welcome to ConvoApp
                </h1>
                <p className="text-gray-600 text-lg">
                  We are excited to have you here. 
                </p>
                <div className='my-20'>
                {children}
                </div>
       
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
