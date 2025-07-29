"use client";
import React from 'react'

import { useRouter } from 'next/navigation';
import { SignUpButton } from '@clerk/nextjs';

const CoolCard = ({
    title,
    description,
    image,
    link,
}) => {
    const router = useRouter()
    return (
        <div className="">
            <div onClick={() => router.push(link)}>

                <div className="bg-slate-200/10  backdrop-blur-md relative group/card border-blue-900/30 hover:shadow-2xl hover:shadow-teal-500/[0.1] w-auto h-auto rounded-xl p-6 border-2  ">
                    <div className="text-xl font-bold text-slate-200"  >
                        {title}
                    </div>
                    <div className="text-slate-200 text-sm  mt-2" >
                        {description}
                    </div>
                    <div className="w-auto mt-2 ">
                        <img
                            src={image}
                            className=" w-full hover:scale-105 aspect-video object-contain rounded-xl cursor-pointer"
                            alt="thumbnail"
                        />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div href={link} className="px-4 py-2 text-slate-200 rounded-xl text-xs font-normal group-hover/card:text-shadow-sm cursor-pointer" >
                            Learn More →
                        </div>
                        <div className="px-4 py-2 hover:scale-105 rounded-xl bg-black text-white text-xs font-bold cursor-pointer group-hover/card:shadow-sm" >
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoolCard