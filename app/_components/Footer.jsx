import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className="relative text-slate-200 bottom-0 left-0 z-50 w-full h-20 backdrop-blur-md bg-black/20 border-t border-blue-900 shadow-[0_0_40px_10px_rgba(0,255,255,0.1)] flex justify-evenly items-center">
            <div>Contact</div>
            <Logo height={50} width={50} />
            <div>Info</div>

            {/* Optional background glow effect */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-md" />
        </div>
    )
}

export default Footer