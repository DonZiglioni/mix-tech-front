"use client"
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="sticky top-0 left-0 z-50 w-full h-20 backdrop-blur-md bg-black/20 border-b border-blue-900 shadow-[0_0_40px_10px_rgba(0,255,255,0.2)]">
            <div className="relative w-full h-full flex items-center px-4">
                <div className="flex flex-row justify-between items-center w-full">
                    <Logo height={50} width={50} />
                    <div className="flex justify-end items-center p-4 gap-4 h-16">
                        <button
                            onClick={() => router.push('https://academy.mixtechniques.com')}
                            className="hover:bg-cyan-700/40 bg-cyan-500/20 border-2 border-cyan-400 shadow-md shadow-cyan-400/30 text-white rounded-full font-medium text-sm sm:text-base h-10 px-4 transition-all duration-300">
                            Sign In
                        </button>
                    </div>
                </div>
                {/* Optional glow effect background overlay */}
                <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-xl" />
            </div>
        </div>
    )
}

export default Navbar