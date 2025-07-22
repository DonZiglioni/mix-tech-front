"use client"
import React from 'react'
import { IconBadges, IconClock, IconSchool } from '@tabler/icons-react'
import EnrollButtonReal from '../../_components/EnrollButtonReal'
import { useRouter } from 'next/navigation'

const CoursesPage = () => {
    const router = useRouter()
    return (
        <div>
            <section className='h-auto '>
                <div id='header' className='h-100 w-full flex items-center justify-center flex-col overflow-hidden relative'>
                    <img src={'/studio-background.png'} className='w-full h-100 absolute top-0 left-0 object-cover  ' />
                    <div className='w-full h-100 absolute top-0 left-0 object-cover bg-black/70' />

                    <div id='content' className='text-slate-200 lg:px-10 xl:px-60 w-full px-2 flex flex-row h-100 absolute top-0 left-0  '>
                        <div className='flex flex-col justify-evenly  lg:w-[80%] w-full h-full px-10'>
                            <div>
                                <h2 className='font-semibold text-lg'>
                                    MIX TECHNIQUES
                                </h2>
                                <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                                    LEARN HOW TO MIX,<br />
                                    THEN PROVE IT.
                                </h1>
                            </div>
                            <p>
                                Start your journey into mixing and mastering by earning the Master of Mix Techniques certification.
                            </p>
                            <div>
                                <EnrollButtonReal
                                    borderColor='border-purple-900'
                                    color='bg-slate-900/50'
                                    hoverBorder='hover:border-purple-800'
                                    hoverColor='hover:bg-slate-900/50'
                                    text="Enroll Now"
                                />
                            </div>
                        </div>
                        <div className=' w-[50%] hidden lg:flex flex-col items-center justify-center  ' >
                            <img src={'/hero-img1.png'} className=' h-75 w-75  object-cover rounded-full ' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black h-auto flex flex-col items-center relative '>
                <img src={'/studio-background6.png'} className='h-full w-full object-cover   absolute top-0 left-0' />
                <div className='h-full w-full  flex items-center flex-col'>
                    <div className='grid grid-cols-2 h-full w-full p-4 gap-4 md:px-20  lg:px-60 mt-4'>
                        <div className='h-full sm:w-[70%] w-full col-span-2 place-self-center'>
                            <div className='h-auto w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md rounded-xl relative shadow-md shadow-black/50  '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-900 to-teal-600 rounded-t-xl ' />
                                <h1 className='text-slate-200 px-2 font-extrabold lg:text-5xl text-3xl md:text-4xl mt-8 text-center'>Ready to get started?</h1>
                                <h1 className='text-slate-200 px-2 font-bold lg:text-3xl text-xl md:text-2xl mt-4 text-center'>Earn a professional badge for every course completed!</h1>
                                <div className='grid mt-5 grid-cols-1 sm:grid-cols-2 p-4 gap-4 h-full w-full'>
                                    <div className='h-full w-full rounded-xl p-8 flex flex-col items-center justify-center shadow-black/50 shadow-md bg-slate-200/70 '>
                                        <h1 className='text-4xl md:text-5xl font-bold text-center'>ALL <br />ACCESS<br /> PASS</h1>
                                    </div>
                                    <div className='h-full w-full sm:rounded-xl shadow-black/50 shadow-md bg-slate-200/70'>
                                        <div className='mt-4 flex flex-col items-center '>
                                            <h2 className='text-2xl md:text-3xl font-bold text-center'>LEARN IT ALL</h2>
                                            <div className='font-semibold flex flex-col gap-y-2 mt-4 pl-4'>
                                                <div className=' w-full flex  '>
                                                    <div className=' h-full w-[10%]'>
                                                        <IconSchool className='h-8 w-8  stroke-purple-900' />
                                                    </div>
                                                    <p className='w-[90%] pl-4 col-span-1'>120+ Hours of On-Demand Training</p>
                                                </div>
                                                <div className=' w-full flex'>
                                                    <div className=' h-full w-[10%]'>
                                                        <IconClock className='h-8 w-8  stroke-purple-900' />
                                                    </div>
                                                    <p className='w-[90%] pl-4 col-span-1'>Learn At Your Own Pace</p>
                                                </div>
                                                <div className=' w-full flex'>
                                                    <div className=' h-full w-[10%]'>
                                                        <IconBadges className='h-8 w-8  stroke-purple-900' />
                                                    </div>
                                                    <p className='w-[90%] pl-4 col-span-1'>Earn Every Badge</p>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col text-3xl font-bold items-center'>
                                                $29.99/mo.
                                            </div>
                                            <div className='p-4'>
                                                <EnrollButtonReal
                                                    borderColor='border-purple-900'
                                                    color='bg-purple-900/50'
                                                    hoverBorder='hover:border-teal-700'
                                                    hoverColor='hover:bg-teal-900/50'
                                                    text="Subscribe"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='h-full w-full col-span-2 sm:col-span-1 ' onClick={() => router.push('http://localhost:3000')}>
                            <div className='h-96 w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/30 '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-900 to-teal-600 rounded-t-xl ' />
                                <div className='bg-slate-200/70 h-full w-full flex flex-col justify-evenly p-4 rounded-xl'>
                                    <h1 className='font-bold text-2xl'>
                                        Day 1 Audio Engineering
                                    </h1>
                                    <p className=' text-lg/5'>The basics of amplitude, frequency, and the science of sound</p>
                                    <img src='/studio-background.png' className='h-50 w-full object-cover shadow-black/50 shadow-md' />
                                    <div className='flex justify-between pt-2'>
                                        <div className='bg-teal-600 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-purple-900 text-white rounded-2xl px-4 py-1'>
                                            FREE
                                        </div>
                                        <div className='bg-black text-white rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
                                            START COURSE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full col-span-2 sm:col-span-1 ' onClick={() => router.push('http://localhost:3000')}>
                            <div className='h-96 w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/30 '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-900 to-teal-600 rounded-t-xl ' />
                                <div className='bg-slate-200/70 h-full w-full flex flex-col justify-evenly p-4 rounded-xl'>
                                    <h1 className='font-bold text-2xl'>
                                        Music Business 101
                                    </h1>
                                    <p className=' text-lg/5'>Mix Techniques' Music Business Masterclass</p>
                                    <img src='/studio-background2.png' className='h-50 w-full object-cover shadow-black/50 shadow-md' />
                                    <div className='flex justify-between pt-2'>
                                        <div className='bg-teal-600 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-purple-900 text-white rounded-2xl px-4 py-1'>
                                            $79.99
                                        </div>
                                        <div className='bg-black text-white rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
                                            GET COURSE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full col-span-2 sm:col-span-1 ' onClick={() => router.push('http://localhost:3000')}>
                            <div className='h-96 w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/30 '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-900 to-teal-600 rounded-t-xl ' />
                                <div className='bg-slate-200/70 h-full w-full flex flex-col justify-evenly p-4 rounded-xl'>
                                    <h1 className='font-bold text-2xl'>
                                        Audio Engineering 101
                                    </h1>
                                    <p className=' text-lg/5'>Learn the science of sound and everything you need to begin your career in music or audio engineering</p>
                                    <img src='/studio-background2.png' className='h-50 w-full object-cover shadow-black/50 shadow-md' />
                                    <div className='flex justify-between pt-2'>
                                        <div className='bg-teal-600 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-purple-900 text-white rounded-2xl px-4 py-1'>
                                            $79.99
                                        </div>
                                        <div className='bg-black text-white rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
                                            GET COURSE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full col-span-2 sm:col-span-1 ' onClick={() => router.push('http://localhost:3000')}>
                            <div className='h-96 w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/30 '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-900 to-teal-600 rounded-t-xl ' />
                                <div className='bg-slate-200/70 h-full w-full flex flex-col justify-evenly p-4 rounded-xl'>
                                    <h1 className='font-bold text-2xl'>
                                        Mix Techniques I
                                    </h1>
                                    <p className=' text-lg/5'>The tricks of the trade!  Get started with the beginner's course on mix engineering</p>
                                    <img src='/studio-background2.png' className='h-50 w-full object-cover shadow-black/50 shadow-md' />
                                    <div className='flex justify-between pt-2'>
                                        <div className='bg-teal-600 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-purple-900 text-white rounded-2xl px-4 py-1'>
                                            $79.99
                                        </div>
                                        <div className='bg-black text-white rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
                                            GET COURSE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full col-span-2 sm:col-span-1 ' onClick={() => router.push('http://localhost:3000')}>
                            <div className='h-96 w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/30 '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-900 to-teal-600 rounded-t-xl ' />
                                <div className='bg-slate-200/70 h-full w-full flex flex-col justify-evenly p-4 rounded-xl'>
                                    <h1 className='font-bold text-2xl'>
                                        Mix Techniques II
                                    </h1>
                                    <p className=' text-lg/5'>Continue learning with the intermediate course on mix engineering</p>
                                    <img src='/studio-background2.png' className='h-50 w-full object-cover shadow-black/50 shadow-md' />
                                    <div className='flex justify-between pt-2'>
                                        <div className='bg-teal-600 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-purple-900 text-white rounded-2xl px-4 py-1'>
                                            $79.99
                                        </div>
                                        <div className='bg-black text-white rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
                                            GET COURSE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full col-span-2 sm:col-span-1 ' onClick={() => router.push('http://localhost:3000')}>
                            <div className='h-96 w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-black/30 '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-purple-900 to-teal-600 rounded-t-xl ' />
                                <div className='bg-slate-200/70 h-full w-full flex flex-col justify-evenly p-4 rounded-xl'>
                                    <h1 className='font-bold text-2xl'>
                                        Songwriting and Beginner Music Theory
                                    </h1>
                                    <p className=' text-lg/5'>A free course to learn song structure, keys, chords and more!</p>
                                    <img src='/studio-background2.png' className='h-50 w-full object-cover shadow-black/50 shadow-md' />
                                    <div className='flex justify-between pt-2'>
                                        <div className='bg-teal-600 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-purple-900 text-white rounded-2xl px-4 py-1'>
                                            FREE
                                        </div>
                                        <div className='bg-black text-white rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
                                            START COURSE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className='h-75 '>
                <div className='h-full w-full '>
                    <div className='h-full w-full   rounded-xl flex flex-col items-center justify-evenly shadow-lg shadow-black/50 p-4 relative'>
                        <img src='/wave-bg.jpg' className='absolute top-0 left-0 h-full w-full object-cover' />
                        <h1 className='text-4xl lg:text-5xl font-extrabold text-center z-50 text-slate-200 text-shadow-black text-shadow-lg'>
                            Login to see the full course catalog!
                        </h1>
                        <EnrollButtonReal
                            borderColor='border-purple-900'
                            color='bg-purple-900/50'
                            hoverBorder='hover:border-teal-700'
                            hoverColor='hover:bg-teal-900/50'
                            text="Enroll Now"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoursesPage