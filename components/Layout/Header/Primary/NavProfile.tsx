import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavProfile = () => (
  <Menu as='div' className='relative inline-block text-left'>
    <Menu.Button>
      <Link href='/profile'>
        <div className='inline-flex w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
          <span className='flex items-center hover:animate-pulse'>RS Shonjoy</span>
        </div>
      </Link>
    </Menu.Button>

    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <Menu.Items className='absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <div className='py-1'>
          <Menu.Item>
            {({ active }) => (
              <span
                className={classNames(
                  active
                    ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:hover:text-light-100'
                    : 'text-gray-700 dark:text-light-100',
                  'block px-4 py-2 text-sm w-full text-left'
                )}
              >
                <Link href='/profile'>Profile</Link>
              </span>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <span
                className={classNames(
                  active
                    ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:hover:text-light-100'
                    : 'text-gray-700  dark:text-light-100',
                  'block px-4 py-2 text-sm w-full text-left'
                )}
              >
                <Link href='/dashboard'>Dashboard</Link>
              </span>
            )}
          </Menu.Item>
          <form method='POST' action='#'>
            <Menu.Item>
              {({ active }) => (
                <button
                  type='submit'
                  className={classNames(
                    active
                      ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 hover:text-error-300'
                      : 'text-error-600',
                    'block w-full text-left px-4 py-2 text-sm'
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </form>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default NavProfile;