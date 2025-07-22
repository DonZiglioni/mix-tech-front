"use client"
import { SignUpButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'

const EnrollButtonReal = ({
    color,
    borderColor,
    hoverColor,
    hoverBorder,
    text,
}) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push('https://academy.mixtechniques.com')}>
            <div className="relative inline-flex items-center justify-center gap-4 group">
                <div className={`${color} ${borderColor} ${hoverColor} ${hoverBorder} group relative inline-flex items-center cursor-pointer justify-center border-2   text-base rounded-xl  px-8 py-3 font-semibold text-white transition-all duration-200  hover:shadow-lg hover:-translate-y-0.5 hover:shadow-black/30`}>
                    {text}
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 10 10"
                        height="10"
                        width="10"
                        fill="none"
                        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                        <path
                            d="M0 5h7"
                            className="transition opacity-0 group-hover:opacity-100"
                        ></path>
                        <path
                            d="M1 1l4 4-4 4"
                            className="transition group-hover:translate-x-[3px]"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default EnrollButtonReal