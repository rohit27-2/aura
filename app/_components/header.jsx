'use client';
import Image from 'next/image';
import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-3 h-16 items-center justify-center">

                        <span className="sr-only">Home</span>
                        <a href="#" className="block px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Tees</a>
                        <a href="#" className="block px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Joggers</a>
                        <Image src={'/AURALOGO.png'} height={80} width={80} alt='' />
                        <a href="#" className="block px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Shoes</a>
                        <a href="#" className="block px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md">Contact Us</a>
                    </div>

                    

                </div>
            </header>
        </div>
    );
}

export default Header;
