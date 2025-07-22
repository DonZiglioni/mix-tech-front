import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className=' text-slate-200 bottom-0 left-0 z-50 bg-slate-900 shadow-black shadow-sm w-full h-20 flex justify-evenly items-center'>
            <div>
                Contact
            </div>
            <Logo height={50} width={50} />
            <div>
                Info
            </div>

        </div>
    )
}

export default Footer