import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import classNames from 'classnames';
import { router } from '@inertiajs/core';
import { useState } from 'react';

export default function ProfileDropdown() {
  const page = useTypedPage();
  const route = useRoute();
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  function logout(e: React.FormEvent) {
    e.preventDefault();
    router.post(route('logout'));
  }

  return (
    <div className="">
      <nav className="border-b border-gray-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="ml-3 relative">
                <Dropdown
                  align="right"
                  width="48"
                  renderTrigger={() => (
                    <span className="inline-flex rounded-md mx-20">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-md leading-4 font-bold rounded-md text-gray-500 dark:text-gray-400  dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
                      >
                        {page.props.auth.user?.name}

                        <svg
                          className="ml-2 -mr-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                    </span>
                  )}
                >
                  <div className="block px-4 py-2 text-sm text-gray-400">
                    Manage Account
                  </div>

                  <DropdownLink href={route('profile.show')}>
                    Profile
                  </DropdownLink>

                  {page.props.jetstream.hasApiFeatures ? (
                    <DropdownLink href={route('api-tokens.index')}>
                      API Tokens
                    </DropdownLink>
                  ) : null}

                  <div className="border-t border-gray-200 dark:border-gray-600"></div>

                  <form onSubmit={logout}>
                    <DropdownLink as="button">Log Out</DropdownLink>
                  </form>
                </Dropdown>
              </div>
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(!showingNavigationDropdown)
                }
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={classNames({
                      hidden: showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    })}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={classNames({
                      hidden: !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    })}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={classNames('sm:hidden', {
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          })}
        >
          <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center px-4">
              {page.props.jetstream.managesProfilePhotos ? (
                <div className="flex-shrink-0 mr-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={page.props.auth.user?.profile_photo_url}
                    alt={page.props.auth.user?.name}
                  />
                </div>
              ) : null}

              <div>
                <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                  {page.props.auth.user?.name}
                </div>
                <div className="font-medium text-sm text-gray-500">
                  {page.props.auth.user?.email}
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink
                href={route('profile.show')}
                active={route().current('profile.show')}
              >
                Profile
              </ResponsiveNavLink>

              <form method="POST" onSubmit={logout}>
                <ResponsiveNavLink as="button">Log Out</ResponsiveNavLink>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
