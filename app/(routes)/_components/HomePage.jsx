"use client"
import React from 'react'
import LogoAnimation from '../../_components/LogoAnimation'
import { IconClock, IconDeviceDesktop, IconFileCertificate, IconHeadphones, IconBadges, IconEar, IconUsers, IconDirectionSignFilled, IconMusic, IconSchool, IconPresentationAnalytics, IconDeviceSpeaker } from '@tabler/icons-react';
import Logo from '../../_components/Logo';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import EnrollButtonReal from '../../_components/EnrollButtonReal';
import CoolCard from '../../_components/CoolCard';
import { offerings } from '../../../app/offerings';
import TopDivider from '../../_components/TopDivider'
import BottomDivider from '../../_components/BottomDivider'

import { MuxPlayer } from '@mux/mux-player-react'

const HomePage = () => {

    const offeringArray = offerings;

    return (
        <div className='h-auto '>
            <section className='h-auto '>
                <div id='header' className='h-120 -mt-20 w-full flex items-center justify-center flex-col overflow-hidden relative'>
                    <img src={'/studio-background.png'} className='w-full h-120 absolute top-0 left-0 object-cover  ' />
                    <div className='w-full h-120 absolute top-0 left-0 object-cover bg-black/50' />

                    <div id='content' className='text-slate-200 pt-24 lg:px-10 xl:px-60 w-full px-2 flex flex-row h-100 absolute top-0 left-0  '>
                        <div className='flex flex-col justify-evenly text-shadow-black text-shadow-lg  lg:w-[80%] w-full h-full px-4'>
                            <div>
                                <h2 className='font-bold text-lg'>
                                    MIX TECHNIQUES
                                </h2>
                                <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                                    LEARN HOW TO MIX,<br />
                                    THEN PROVE IT.
                                </h1>
                            </div>
                            <p className='mt-4'>
                                Your future in the music industry ignites today!
                            </p>
                            <div className='mt-4'>
                                <EnrollButtonReal
                                    borderColor='border-blue-900'
                                    color='bg-slate-900/50'
                                    hoverBorder='hover:border-blue-800'
                                    hoverColor='hover:bg-slate-900/50'
                                    text="Enroll Now"
                                />
                            </div>
                        </div>
                        <div className=' w-[50%] hidden md:flex flex-col items-center justify-center  ' >
                            <img src={'/mix-logo2.png'} className=' h-75 w-auto  object-contain  ' />
                        </div>
                    </div>
                    {/* <div className='absolute bottom-0  w-full '>
                        <TopDivider />
                    </div> */}
                </div>
            </section>
            <section className='h-auto '>
                <div className='h-auto place-self-center flex w-full bg-slate-200 relative'>
                    <img src={'/black-bg1.png'} className='w-full h-full absolute top-0 left-0 object-cover  ' />
                    <div className='absolute top-0 left-0 h-auto w-full'>
                        <BottomDivider />
                    </div>
                    <div className='grid w-full my-8 mx-4 lg:mx-20 xl:mx-60 grid-cols-1 lg:grid-cols-2 text-slate-200'>
                        <div className='h-full w-full '>
                            <div className='h-full w-full p-4 relative'>
                                <h1 className='lg:text-4xl text-2xl font-bold mt-4'>
                                    AUDIO <br />ENGINEERING,<br />MIXING,<br />&<br />MUSIC<br /> EDUCATION<br />
                                </h1>

                                {/* <Logo width={125} height={125} classname={'absolute top-10 lg:right-10 right-0 bg-transparent'} />
                            */}
                                <p className='mt-4'>
                                    We offer a plethora of on-demand courses, live workshops, and professional certificates.
                                    Mix Techniques is dedicated to developing high-quality, in-depth, and interactive educational experiences unlinke any other source.
                                </p>
                                <div className='mt-4'>
                                    Our courses cover topics in:
                                    <div className='flex mt-4 pl-4 items-center w-full font-bold'>
                                        <IconDirectionSignFilled className='mr-4 h-8 w-8 fill-blue-900' />
                                        Mixing
                                    </div>
                                    <div className='flex  pl-4 items-center w-full font-bold'>
                                        <IconDirectionSignFilled className=' h-8 w-8 mr-4 fill-blue-900' />
                                        Mastering
                                    </div>
                                    <div className='flex pl-4 items-center w-full font-bold'>
                                        <IconDirectionSignFilled className='mr-4 h-8 w-8 fill-blue-900' />
                                        Audio Engineering
                                    </div>
                                    <div className='flex  pl-4 items-center w-full font-bold'>
                                        <IconDirectionSignFilled className=' h-8 w-8 mr-4 fill-blue-900' />
                                        Songwriting
                                    </div>
                                    <div className='flex pl-4 items-center w-full font-bold'>
                                        <IconDirectionSignFilled className='mr-4 h-8 w-8 fill-blue-900' />
                                        Production
                                    </div>
                                    <div className='flex mb-4 pl-4 items-center w-full font-bold'>
                                        <IconDirectionSignFilled className=' h-8 w-8 mr-4 fill-blue-900' />
                                        Music Business
                                    </div>
                                    <p className='mt-4'>
                                        Whether you are a complete beginner, a recent audio college graduate, or a working professional,
                                        Mix Techniques will give you everything you need to deliver polished mixes that translate everytime.
                                    </p>
                                    <p className='mt-4'>
                                        Begin your journey into becoming an audio professional, and gain the skills needed to create a long-term career in the music industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-full z-10 text-slate-900 '>
                            <div className='h-full w-full p-4  '>
                                <div className='h-full w-full lg:px-6 p-4 bg-slate-200 rounded-xl shadow-black/50 shadow-lg '>
                                    <>
                                        <h2 className='text-2xl font-bold'>WHAT WE DO</h2>
                                        <div className='font-semibold flex flex-col gap-y-2 mt-4'>
                                            <div className=' w-full flex  '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconClock className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>120+ Hours of On-Demand Training</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconSchool className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Live Instructor-led Learning</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconFileCertificate className='h-8 w-8 stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Professional Certificates</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconMusic className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Live Workshops</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconDeviceDesktop className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Online Classrooms</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconBadges className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Certified Learning Badges</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconUsers className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Growing Professional Community</p>
                                            </div>
                                        </div>
                                    </>
                                    <>
                                        <h2 className='text-2xl font-bold mt-4'>WHAT YOU'LL DO</h2>
                                        <div className='font-semibold flex flex-col gap-y-2 mt-4'>
                                            <div className=' w-full flex  '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconSchool className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Learn Audio Engineering, Mixing, Mastering, Music Business and more</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconEar className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Master your craft with hands-on learning</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconPresentationAnalytics className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Be able to showcase your skills to potential employers</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconDeviceSpeaker className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Understand the science of sound and sonic quality</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconMusic className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Begin or further your career in the music industry</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconUsers className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Network with a growing community of working professionals and other learners</p>
                                            </div>
                                            <div className=' w-full flex '>
                                                <div className=' h-full w-[15%]'>
                                                    <IconHeadphones className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Earn your Master of Mix Techniques professional certificate, the music industry's
                                                    only online course focused entirely on perfecting your abilities as a mix engineer

                                                </p>
                                            </div>
                                        </div>
                                    </>
                                    <div className='flex flex-col items-center justify-center w-full mt-2 py-4'>
                                        <EnrollButtonReal
                                            borderColor='border-blue-900'
                                            color='bg-blue-900/50'
                                            hoverBorder='hover:border-teal-700'
                                            hoverColor='hover:bg-teal-900/50'
                                            text="Enroll Now"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-0  w-full '>
                        <TopDivider />
                    </div>
                </div>
            </section>

            {/* <section className='h-auto bg-slate-900'>
                <ParallaxBanner
                    layers={[
                        { image: '/studio-background3.png', speed: -20 },
                        { image: '/studio-background4.png', speed: -10 },
                    ]}
                    className="aspect-[2/1] h-[50vh] relative"
                >
                    <div className='absolute inset-0 flex items-center justify-center h-full w-full bg-black/30'>
                        <h1 className="text-4xl text-white font-thin text-center text-shadow-black text-shadow-lg px-4">You can change the world with music</h1>
                    </div>
                </ParallaxBanner>
            </section> */}
            <section className='h-auto relative '>
                <div className='absolute top-0 left-0 h-auto w-full'>
                    <BottomDivider />
                </div>
                <img src={'/wave-bg.jpg'} className='h-full w-full object-cover bg-black rotate-180 -z-10 absolute top-0 left-0' />
                <div className='h-full place-self-center flex w-full bg-black/50  '>
                    <div className=' w-full h-full mx-4 lg:mx-20 xl:mx-80  '>
                        <div className=' h-full w-full my-4 p-4 '>
                            <h1 className='text-6xl font-bold w-full text-shadow-lg text-shadow-black/15 text-slate-200'>
                                Start Learning Now
                            </h1>
                            <p className='mt-4 font-semibold text-shadow-lg text-shadow-black/5 text-slate-200'>
                                Check out our collection of on-demand courses, live workshops, and certificates to start learning today!
                            </p>
                            <div className='w-full h-auto p-4 mt-2 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                                {offeringArray.map((offer, index) => (
                                    <div key={index} className=' h-full w-full flex flex-col items-center justify-center '>
                                        <CoolCard title={offer.title} description={offer.description} image={offer.image} link={offer.link} />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='h-auto bg-transparent'>
                <div id='callout' className='h-80 w-full py-4  text-slate-200 flex flex-col items-center justify-evenly relative'>
                    <img src='/studio-background6.png' className='h-full w-full object-cover absolute top-0 left-0 -z-10' />
                    <div className='h-full w-full bg-black/50 object-cover absolute top-0 left-0 -z-10' />
                    <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl text-center text-shadow-lg text-shadow-black'>Ready to Get Started?</h1>
                    <p className='text-light text-sm lg:text-lg text-shadow-lg text-shadow-black'>
                        Your future in mixing is here.
                    </p>

                    <EnrollButtonReal
                        borderColor='border-blue-900'
                        color='bg-blue-900/50'
                        hoverBorder='hover:border-teal-700'
                        hoverColor='hover:bg-teal-900/50'
                        text="Enroll Now"
                    />

                    <hr className='border-slate-200/50 w-[80%]' />
                </div>
            </section> */}
        </div >
    )
}

export default HomePage

const VideoBackground = () => {
    return (
        <div className="absolute top-0 left-0 inset-0 w-full h-140 -z-10 overflow-hidden ">
            <video autoPlay loop muted playsInline className="object-cover w-full h-full ">
                <source src="/videos/bgvid2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-200 dark:from-black to-transparent opacity-30"></div>
            <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        </div>
    );
};
