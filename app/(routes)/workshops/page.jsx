"use client"
import React from 'react'
import EnrollButtonReal from '../../_components/EnrollButtonReal'
import { IconAward, IconDeviceLaptop, IconDeviceSpeaker, IconHeadphones, IconMedal, IconSchool, IconUsersGroup } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import BottomDivider from '../../_components/BottomDivider';
import TopDivider from '../../_components/TopDivider';

const workshopList = [
    {
        title: 'LIVE: Audio Engineering 101',
        image: '/dragonLive.png',
        description: 'This four-day live audio engineer training dives deep into the characteristics of sound,analog and digital audio, signal flow, signal processing, recording, and more. Learn audio engineering in an interactive and hands-on experince from professional audio engineers.',
        link: `/workshop/audio101`,
    },
    {
        title: 'LIVE: Advanced Mix Techniques',
        image: '/lionLive.png',
        description: 'This four-day live mix engineer training dives deep into mixing while learning how to listen, reference mixes, and elevate your sonic quality to the next level.',
        link: `/workshop/mixtechniques1`,
    },
    {
        title: 'LIVE: Songwriting 101',
        image: '/gorillaLive.png',
        description: 'This four-day live songwriting training dives deep into finding inspiration, crafting melodies, song structures, and more.  Be confident in your ability to write amazing songs effortlessly.',
        link: `/workshop/songwriting`,
    },
]

const WorkshopPage = () => {
    const router = useRouter()
    return (
        <div>
            <section className='h-auto '>
                <div id='header' className='h-120 -mt-20 w-full flex items-center justify-center flex-col overflow-hidden relative'>
                    <img src={'/studio-background.png'} className='w-full h-120 absolute top-0 left-0 object-cover  ' />
                    <div className='w-full h-120 absolute top-0 left-0 object-cover bg-black/50' />

                    <div id='content' className='text-slate-200 pt-24 lg:px-10 xl:px-60 w-full px-2 flex flex-row h-100 absolute top-0 left-0  '>
                        <div className='flex flex-col justify-evenly  lg:w-[80%] w-full h-full px-4'>
                            <div>
                                <h2 className='font-bold text-lg'>
                                    MIX TECHNIQUES LIVE TRAINING
                                </h2>
                                <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                                    LEARN HOW TO MIX,<br />
                                    THEN PROVE IT.
                                </h1>
                            </div>
                            <p className='mt-4'>
                                Level up your songwrting, production, and mixing skills with LIVE classes by industry-leading instructors.
                                Designed to teach beginners and music industry professionals practical skills with hands-on learning that
                                enables real-world professional success.
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
                        <div className=' w-[50%] hidden lg:flex flex-col items-center justify-center  ' >
                            <img src={'/badges/badgesLive.png'} className=' h-75 w-auto  object-contain  ' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-auto w-full relative py-8'>
                <img src={'/black-bg1.png'} className=' h-full w-full -z-20 object-cover absolute top-0 left-0' />
                <div className='absolute top-0 left-0 h-auto w-full'>
                    <BottomDivider />
                </div>
                <div className='absolute bottom-0  w-full '>
                    <TopDivider />
                </div>
                <div className='lg:mx-60 md:mx-40 p-4 pb-10 text-slate-200 text-shadow-black text-shadow-lg'>

                    <h1 className='text-4xl font-extrabold  mt-2'>
                        Our Live Training Classes
                    </h1>
                    <h2 className='text-xl   mt-4'>
                        Mix Techniques offers a variety of mixing, mastering, and audio engineering live trainings that aren't just lectures. You'll get hands-on, real-world experience that will help you pursue certifications and move your career forward.
                    </h2>
                    <div className='h-auto w-full mt-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full h-auto gap-8'>
                            {workshopList.map((workshop, index) => (
                                <WorkshopCard
                                    key={index}
                                    title={workshop.title}
                                    image={workshop.image}
                                    description={workshop.description}
                                    link={workshop.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='h-auto bg-slate-900 relative py-8'>
                <div className='absolute top-0 left-0 h-auto w-full'>
                    <BottomDivider />
                </div>
                <div className='absolute bottom-0  w-full '>
                    <TopDivider />
                </div>
                <div className='lg:mx-60 md:mx-40 mx-4 py-4 pb-10'>
                    <h1 className='font-extrabold md:text-4xl text-2xl text-slate-200 text-center p-4'>
                        Why Choose Mix Techniques Instructor-Led Training?
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div id='grid-item' className='w-auto h-auto flex items-center  '>
                            <div className='flex items-center gap-x-4  h-full w-full '>
                                <div className='h-18 min-w-20 rounded-lg bg-slate-200 flex items-center justify-center'>
                                    <IconHeadphones className='h-14 w-14 stroke-blue-900' />
                                </div>
                                <div className='w-full h-full flex flex-col gap-y-2 '>
                                    <p className='text-slate-200  font-bold text-xl/5'>
                                        No Fluff, Practical Experience
                                    </p>
                                    <p className='text-slate-200  font-light text-sm/5'>
                                        You'll walk away with hands-on knowledge and practical skills that can be immediately applied in real-world scenarios.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id='grid-item' className='w-auto h-auto flex items-center  '>
                            <div className='flex items-center gap-x-4  h-full w-full '>
                                <div className='h-18 min-w-20 rounded-lg bg-slate-200  flex items-center justify-center'>
                                    <IconAward className='h-14 w-14 stroke-blue-900' />
                                </div>
                                <div className='w-full h-full flex flex-col gap-y-2'>
                                    <p className='text-slate-200  font-bold text-xl/5'>
                                        Professional Development
                                    </p>
                                    <p className='text-slate-200  font-light text-sm/5'>
                                        You'll walk away with hands-on knowledge and practical skills that can be immediately applied in real-world scenarios.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id='grid-item' className='w-auto h-auto flex items-center  '>
                            <div className='flex items-center gap-x-4  h-full w-full '>
                                <div className='h-18 min-w-20 rounded-lg bg-slate-200 flex items-center justify-center'>
                                    <IconUsersGroup className='h-14 w-14 stroke-blue-900' />
                                </div>
                                <div className='w-full h-full flex  flex-col gap-y-2'>
                                    <p className='text-slate-200  font-bold text-xl/5'>
                                        Interactive, Small Group Setting
                                    </p>
                                    <p className='text-slate-200  font-light text-sm/5'>
                                        We limit our class sizes to 12 students to encourage interaction with the instructor and classmates. You'll have access to a private Discord channel for class communication and networking.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id='grid-item' className='w-auto h-auto flex items-center  '>
                            <div className='flex items-center gap-x-4  h-full w-full '>
                                <div className='h-18 min-w-20 rounded-lg bg-slate-200 flex items-center justify-center'>
                                    <IconMedal className='h-14 w-14 stroke-blue-900' />
                                </div>
                                <div className='w-full h-full flex flex-col gap-y-2'>
                                    <p className='text-slate-200  font-bold text-xl/5'>
                                        Prepare for Professional Certifications
                                    </p>
                                    <p className='text-slate-200  font-light text-sm/5'>
                                        Intensive live training classes will prepare you for Mix Techniques' certifications and keep you focused on your goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id='grid-item' className='w-auto h-auto flex items-center  '>
                            <div className='flex items-center gap-x-4  h-full w-full '>
                                <div className='h-18 min-w-20 rounded-lg bg-slate-200 flex items-center justify-center'>
                                    <IconDeviceLaptop className='h-14 w-14 stroke-blue-900' />
                                </div>
                                <div className='w-full h-full flex flex-col gap-y-2'>
                                    <p className='text-slate-200  font-bold text-xl/5'>
                                        Lab Access
                                    </p>
                                    <p className='text-slate-200  font-light text-sm/5'>
                                        After the training ends, you have access to online virtual labs to practice what you learned.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id='grid-item' className='w-auto h-auto flex items-center  '>
                            <div className='flex items-center gap-x-4  h-full w-full '>
                                <div className='h-18 min-w-20 rounded-lg bg-slate-200 flex items-center justify-center'>
                                    <IconSchool className='h-14 w-14 stroke-blue-900' />
                                </div>
                                <div className='w-full h-full flex flex-col gap-y-2'>
                                    <p className='text-slate-200  font-bold text-xl/5'>
                                        Post-Training Resources
                                    </p>
                                    <p className='text-slate-200  font-light text-sm/5'>
                                        You'll have access to class recordings and relevant course materials from Mix Techniques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='h-auto bg-transparent'>
                <div id='callout' className='h-80 w-full py-4  text-slate-200 flex flex-col items-center justify-evenly relative'>
                    <img src='/wave-bg.jpg' className='h-full w-full object-cover absolute top-0 left-0 -z-10' />
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
        </div>
    )
}

export default WorkshopPage

const WorkshopCard = ({
    title,
    image,
    description,
    link,
}) => {
    const router = useRouter()
    return (
        <div id='grid-item'
            onClick={() => router.push(link)}
            className='h-auto w-full pb-2 relative border-blue-900/50 border-1 hover:shadow-blue-900/50 bg-slate-200/10 backdrop-blur-sm rounded-lg shadow-lg shadow-black/50'>
            <div className='relative rounded-t-lg h-[200px] w-full bg-black'>
                <img src={image} className='h-full w-full object-contain absolute top-0 left-0 rounded-lg' />
            </div>

            <div className='h-auto w-full p-2 rounded-lg flex flex-col '>
                <h2 className='font-bold text-lg px-2'>
                    {title}
                </h2>
                <p className='text-base/5 px-2 h-auto mt-2'>
                    {description}
                </p>
                <button
                    onClick={() => router.push(link)}
                    className='text-slate-200 py-2 ml-2 mt-4 px-2 w-[50%] h-auto rounded-lg text-shadow-lg text-shadow-black/50 border-1 hover:border-blue-900 hover:font-bold hover:bg-blue-300/30 border-blue-900 shadow-md shadow-black/30'>
                    Learn More
                </button>
            </div>
        </div>
    )
}