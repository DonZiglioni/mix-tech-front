"use client"

import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/navigation'
import { IconMenu2, IconX } from '@tabler/icons-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <div className="sticky top-0 left-0 z-50 w-full h-20 backdrop-blur-md bg-black/20 border-b border-blue-900 shadow-[0_0_40px_10px_rgba(0,255,255,0.2)]">
            <div className="relative w-full h-full flex items-center px-4">
                <div className="flex flex-row justify-between items-center w-full h-full relative">
                    <div className='hidden md:flex w-auto'>
                        <Logo height={50} width={50} />
                        <div className='flex items-center gap-x-6 pl-10 font-bold justify-center text-blue-100'>
                            <div onClick={() => {
                                setIsOpen(false)
                                router.push('/')
                            }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                HOME
                            </div>
                            <div onClick={() => {
                                setIsOpen(false)
                                router.push('/courses')
                            }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                COURSES
                            </div>
                            <div onClick={() => {
                                setIsOpen(false)
                                router.push('/certificate')
                            }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                CERTIFICATION
                            </div>
                            <div onClick={() => {
                                setIsOpen(false)
                                router.push('/workshops')
                            }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                WORKSHOPS
                            </div>
                            <div onClick={() => {
                                setIsOpen(false)
                                router.push('/lessons')
                            }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                LESSONS
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden '>
                        <div >
                            {isOpen && (
                                <div className='h-auto w-full absolute top-4 left-0 p-4 border-2 border-cyan-500/50 rounded-lg bg-black/95'>
                                    <div className='h-[75vh] w-full'>
                                        <div>
                                            <IconX onClick={() => setIsOpen(!isOpen)} className='h-8 w-8 hover:scale-120 stroke-cyan-500 place-self-end' />
                                        </div>
                                        <div className=' h-auto w-full'>
                                            <div className='text-blue-200 flex flex-col gap-y-4 pt-10 text-lg font-bold justify-evenly'>
                                                <div onClick={() => {
                                                    setIsOpen(false)
                                                    router.push('/')
                                                }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                                    HOME
                                                </div>
                                                <div onClick={() => {
                                                    setIsOpen(false)
                                                    router.push('/courses')
                                                }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                                    COURSES
                                                </div>
                                                <div onClick={() => {
                                                    setIsOpen(false)
                                                    router.push('/certificate')
                                                }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                                    CERTIFICATION
                                                </div>
                                                <div onClick={() => {
                                                    setIsOpen(false)
                                                    router.push('/workshops')
                                                }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                                    WORKSHOPS
                                                </div>
                                                <div onClick={() => {
                                                    setIsOpen(false)
                                                    router.push('/lessons')
                                                }} className='hover:underline hover:text-cyan-100 cursor-pointer'>
                                                    LESSONS
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                            {!isOpen && (
                                <IconMenu2 onClick={() => setIsOpen(!isOpen)} className='h-8 w-8 stroke-cyan-500' />
                            )}
                        </div>
                    </div>
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