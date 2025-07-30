"use client"
import React from 'react'
import Logo from './Logo'
import { IconBrandYoutube, IconMail, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
const Footer = () => {
    const router = useRouter()
    return (
        <div className="relative text-slate-200 bottom-0 left-0 z-50 w-full h-20 backdrop-blur-md bg-black/20 border-t border-blue-900 shadow-[0_0_40px_10px_rgba(0,255,255,0.1)] flex justify-center items-center">
            <div className='flex items-center justify-evenly px-4  md:px-10 lg:px-40  w-[45%] h-full'>
                <IconBrandYoutube
                    onClick={() => router.push('https://www.youtube.com/@Mix-Techniques')}
                    className='h-8 w-8 stroke-cyan-500 cursor-pointer' />
                <IconMail
                    onClick={() => router.push('/')}
                    className='h-8 w-8 stroke-cyan-500 cursor-pointer' />
                <IconBrandX
                    onClick={() => router.push('/')}
                    className='h-8 w-8 stroke-cyan-500 cursor-pointer' />
                <IconBrandInstagram
                    onClick={() => router.push('/')}
                    className='h-8 w-8 stroke-cyan-500 cursor-pointer' />
            </div>
            <div className='place-self-center  w-[10%] flex items-center justify-center'>
                <Logo height={50} width={50} />
            </div>
            <div className='flex items-center text-xs font-bold justify-center  w-[45%] h-full'>
                ©2025 MIX TECHNIQUES
            </div>

            {/* Optional background glow effect */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-md" />
        </div>
    )
}

export default Footer