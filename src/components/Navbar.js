import React from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import { useState } from 'react'
import Logo from '../assests/logo1.png'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24  max-w-[1240px] mx-0 px-4 text-white relative'>
        <img src={Logo} alt="Logo" className='w-auto h-8 sm:h-14' />
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-green-700'>Home</li>
            <li className='p-4 hover:text-green-700'>All products</li>
            <li className='p-4 hover:text-green-700'>About</li>
            <li className='p-4 hover:text-green-700'>Contact</li>
            <li className='pt-2.5 hover:text-green-700'>
                <Menu as="div" className="relative inline-block text-left z-10">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2  text-sm font-medium text-white hover:text-green-700 focus:outline-none">
                            My Account
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="/login"
                                        href="google.com"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Login
                                    </Link>
                                )}
                            </Menu.Item>
                            <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                <Link to="/signup">
                                    <button
                                        type="submit"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                        >
                                        Sign Up
                                    </button>
                                </Link>
                                    )}
                                </Menu.Item>
                            </form>
                        </div>
                    </Menu.Items>
                </Transition>
                </Menu>
            </li>
            <Link to="/cart">
                <BiShoppingBag size={45} className='w-20 mt-1 h-30 hover:text-green-700'/>
            </Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] bg-[#2F2F2F] h-full border-r-gray-900 ease-in-out duration-500' :  'fixed left-[-100%]'}>
            <ul className=' p-4'>
                <img src={Logo} alt="Logo" className='w-auto h-8 sm:h-10' />
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>All Products</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
                <li className='pt-2.5 border-b border-gray-600'>
                <Menu as="div" className="relative inline-block text-left z-10">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2  text-sm font-medium text-white hover:text-green-700 focus:outline-none">
                            My Account
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="/login"
                                        href="google.com"
                                        className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                        )}
                                        >
                                        Login
                                    </Link>
                                )}
                            </Menu.Item>
                            <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                    <Link to="/signup">
                                        <button
                                            type="submit"
                                            className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full text-left px-4 py-2 text-sm'
                                            )}
                                            >
                                            Sign Up
                                        </button>
                                    </Link>
                                    
                                    )}
                                </Menu.Item>
                            </form>
                        </div>
                    </Menu.Items>
                </Transition>
                </Menu>
                </li>
            </ul>
            <Link to="/cart">
                <BiShoppingBag size={45} className='w-20 mt-1 h-30 hover:text-green-700'/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar