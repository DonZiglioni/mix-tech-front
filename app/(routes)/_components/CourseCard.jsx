"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const CourseCard = ({
    title,
    description,
    image,
    price,
}) => {
    const router = useRouter()
    return (
        <div className='h-full w-full col-span-2 sm:col-span-1 '
            onClick={() => router.push('https://academy.mixtechniques.com')}
        >
            <div className='h-auto w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-blue-900/30 '>
                <div className='bg-slate-200/0 h-full w-full flex text-shadow-black text-shadow-lg  text-slate-200 border-blue-900/30 border-2 flex-col justify-evenly p-4 rounded-xl'>
                    <h1 className='font-bold text-center text-2xl '>
                        {title}
                    </h1>
                    <img src={image} className='h-65 w-65 cursor-pointer my-4 place-self-center rounded-xl object-contain shadow-black/50 shadow-lg hover:scale-105 overflow-hidden' />
                    <p className=' text-lg/5 py-2 px-4'>
                        {description}
                    </p>
                    <div className='flex justify-between pt-4 px-4'>
                        <div className='bg-teal-400/30 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-blue-900 text-white rounded-2xl px-4 py-1'>
                            {price}
                        </div>
                        <div className='bg-black text-white border-1 border-blue-900 rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
                            {title === "All Access Pass" ? "SUBSCRIBE" : "START COURSE"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard