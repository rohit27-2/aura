'use client'
import Image from 'next/image';
import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);

    };

    const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

    const toggleMenuDropdown = () => {
        setIsMenuDropdownOpen((prev) => !prev);
    };

    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-5  h-16 items-center justify-center ">



                        <span className="sr-only">Home</span>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Tees</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Joggers</a>
                        <Image src={'/AURALOGO.png'} height={80} width={80} alt='' />

                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Shoes</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Contact Us</a>


                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            {/* <button
                                    type="button"
                                    onClick={toggleMenu}
                                    className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                                >
                                    <span className="sr-only">Toggle dashboard menu</span>

                                    <img
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                        className="h-10 w-10 object-cover"
                                    />
                                </button> */}

                            {isMenuOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                                    role="menu"
                                >
                                    <div className="p-2">
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            My profile
                                        </a>
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Billing summary
                                        </a>
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            Team settings
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <form method="POST" action="#">
                                            <button
                                                type="submit"
                                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                role="menuitem"
                                            >
                                                Logout
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </header>
        </div>
    );
}

export default Header;
