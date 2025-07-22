"use client"
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className='sticky top-0 left-0 z-50 bg-slate-900 shadow-black shadow-sm w-full h-20   flex items-center pl-4'>
            <div className='flex flex-row justify-between items-center w-full '>
                <Logo height={50} width={50} />
                <div className="flex justify-end items-center p-4 gap-4 h-16">
                    <button
                        onClick={() => router.push('https://academy.mixtechniques.com')}
                        className="hover:bg-purple-600 hover:border-purple-900  bg-purple-900/30 border-2 shadow-lg shadow-black/50 border-purple-500 text-slate-200 rounded-full font-medium text-sm sm:text-base h-10 px-4 cursor-pointer">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar