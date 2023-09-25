import React from 'react';
import { Link } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/react';
import WelcomeComponents from '@/Components/Welcome';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

export default function Welcome({ canLogin, canRegister }: Props) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <>
      <Head title="Welcome" />
      <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
        <WelcomeComponents>
          {canLogin ? (
            <div className="p-8 text-center">
              {page.props.auth.user ? (
                <Link
                  href={route('dashboard')}
                  className="text-2xl font-semibold rounded-md border-2 p-4 border-black text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring focus:ring-gray-300 transition duration-300"
                >
                  Welcome Back
                </Link>
              ) : (
                <>
                <div className='flex justify-center items-center my-auto '>
                  <Link
                    href={route('login')}
                    className="text-xl mx-10 rounded-md border-2 p-4 border-blue-800 font-semibold text-blue-500 hover:text-blue-800 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
                  >
                    Login
                  </Link>
                  {canRegister ? (
                    <Link
                      href={route('register')}
                      className=" mx-10 rounded-md border-2 border-yellow-600 p-4 text-xl font-semibold text-yellow-600 hover:text-yellow-800 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring focus:ring-pink-300 transition duration-300"
                    >
                      Register
                    </Link>
                  ) : null}
                  </div>
                </>
              )}
            </div>
          ) : null}
        </WelcomeComponents>
      </div>
    </>
  );
}
