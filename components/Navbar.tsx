"use client";
import Link from 'next/link';
import { Search, Menu, User, Gamepad2 } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-2xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">OBLOVX</span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Discover</Link>
                                <Link href="/games" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Games</Link>
                                <Link href="/create" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Create</Link>
                                <Link href="/shop" className="hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors">Avatar Shop</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 max-w-md mx-8 hidden md:block">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-full leading-5 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:border-red-500 sm:text-sm transition-all" placeholder="Search experiences..." type="search" />
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6 gap-4">
                            <button className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <User className="h-6 w-6" />
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-bold transition-transform hover:scale-105">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Discover</Link>
                        <Link href="/games" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Games</Link>
                        <Link href="/create" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Create</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
