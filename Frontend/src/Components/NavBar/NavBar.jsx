import React from 'react'
import { Link } from 'react-router-dom'
import viteLogo from '../../assets/vite.svg'
import NavLink from '../NavLink/NavLink'
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn'

function NavBar() {
  return (
    <nav className='bg-primary-50 dark:bg-primary-950 fixed w-full z-50 top-0 left-0 border-b border-primary-200 dark:border-primary-400'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center max-w-max'>
          <img src={viteLogo} className='w-10 mr-1' alt='Vite logo' />
          <span className='text-primary-900 text-2xl font-bold tracking-tighter dark:text-primary-50'>
            LinkedIn<span className='text-primary-600'>React</span>
          </span>
        </Link>

        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-primary-500 rounded-lg md:hidden hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:text-primary-400 dark:hover:bg-primary-800 dark:focus:ring-primary-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            />
          </svg>
        </button>

        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-primary-100 rounded-lg bg-primary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-primary-800 md:dark:bg-primary-900 lg:dark:bg-transparent dark:border-primary-700'>
            <NavLink path='/' text='Home' isActive='true' />
            <NavLink path='/about-us' text='About Us' isActive='false' />
            <NavLink path='/blog' text='Blog' isActive='false' />
            <li>
              <DarkModeBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
