"use client"
import React from 'react'
import Faq from './_components/Faq'
import { IconDirectionSignFilled, IconSchool, IconDeviceDesktop, IconClockFilled, IconMusic, IconBrowser, IconCloudFilled, IconClock, IconCloud } from '@tabler/icons-react'
import EnrollButtonReal from '../../_components/EnrollButtonReal'
import { ParallaxBanner } from 'react-scroll-parallax'

const CertificatePage = () => {
    return (
        <div className='h-auto w-full  '>
            <div id='header' className='h-120 -mt-20 w-full flex items-center justify-center flex-col overflow-hidden relative'>
                <img src={'/studio-background.png'} className='w-full h-120 absolute top-0 left-0 object-cover  ' />
                <div className='w-full h-120 absolute top-0 left-0 object-cover bg-black/70' />

                <div id='content' className='text-slate-200 pt-24 lg:px-10 xl:px-60 w-full px-2 flex flex-row h-100 absolute top-0 left-0  '>
                    <div className='flex flex-col justify-evenly  lg:w-[80%] w-full h-full px-4'>
                        <div>
                            <h2 className='font-bold text-lg'>
                                MASTER OF MIX TECHNIQUES
                            </h2>
                            <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                                LEARN HOW TO MIX,<br />
                                THEN PROVE IT.
                            </h1>
                        </div>
                        <p className='mt-4'>
                            Start your journey into mixing and mastering by earning the Master of Mix Techniques certification.
                            Learn the science of sound, get hands-on mixing experience, and earn the certification and demonstrate
                            your expertise to employers.
                        </p>
                        <div className='mt-4'>
                            <EnrollButtonReal
                                borderColor='border-blue-900'
                                color='bg-slate-900/50'
                                hoverBorder='hover:border-blue-800'
                                hoverColor='hover:bg-slate-900/50'
                                text="Apply Now" />
                        </div>
                    </div>
                    <div className=' w-[50%] hidden lg:flex flex-col items-center justify-center  '>
                        <img src={'/badges/mmxt.png'} className=' h-75 w-75  object-cover rounded-full ' />
                    </div>
                </div>
            </div>
            <div id='section2' className='bg-slate-200 h-auto w-full place-self-center flex flex-col px-4 py-4 items-center justify-center '>
                <div id='section-content' className='h-auto w-full flex flex-col items-center justify-center mx-4 lg:px-20 xl:px-60 '>
                    <div className=' h-auto w-full space-y-20 gap-x-4  grid grid-cols-1 lg:grid-cols-3 '>
                        <div className=' h-full flex flex-col justify-evenly  px-4 lg:col-span-2'>
                            <h1 className='text-4xl font-bold'>
                                What is the Master of Mix Techniques (MMXT) Certification?
                            </h1>
                            <p>
                                The Master of Mix Techniques™ (MMXT) certification is an audio engineering experience that will assess
                                a student's ability to organize, edit, and mix records at a professional level. Students
                                will participate in several real-world scenarios covering multiple genres, and showcase their abilities to
                                mix in a fast-paced and constantly evolving industry.
                            </p>
                            <h2 className='text-2xl font-bold'>
                                How to Pass the MMXT Course?
                            </h2>
                            <div>
                                In order to receive the certification, a student must:
                                <div className='flex mt-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='mr-4 h-8 min-w-8 fill-blue-900' />
                                    Submit all mixes within the given deadlines.
                                </div>
                                <div className='flex pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='mr-4 h-8 min-w-8 fill-blue-900' />
                                    Maintain a minimum 3.0 GPA upon graduation.
                                </div>
                                <div className='flex mb-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='h-8 min-w-8 mr-4 fill-blue-900' />
                                    Respond to all 'client' requests promptly and professionally.
                                </div>
                                MMXT course vouchers come with 12 months of access to the training materials the exam is based on.  Access begins on the day the voucher is purchased.
                            </div>
                            <h2 className='text-2xl font-bold'>
                                Master of Mix Techniques Course Format
                            </h2>
                            <p>
                                The MMXT Course was designed to teach students how to apply their skills in real-world situations. This is not your normal audio enginnering college. Our course is an experience that is similar to what you will be asked to do in a professional environment.
                                <div className='flex mt-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='mr-4 h-8 min-w-8 fill-blue-900' />
                                    Knowledge AND Hands-On Experience.
                                </div>
                                <div className='flex pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='mr-4 h-8 min-w-8 fill-blue-900' />
                                    In-person classes are on Saturdays from 8am - 4pm MST(10am - 6pm EST).
                                </div>
                                <div className='flex pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='mr-4 h-8 min-w-8 fill-blue-900' />
                                    Online modules and mixing assignments with feedback.
                                </div>
                                <div className='flex mb-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className=' h-8 min-w-8 mr-4 fill-blue-900' />
                                    12 months of career guidance offered.
                                </div>
                            </p>
                        </div>
                        <div id='shadowed-container' className=' h-auto text-base/5 w-full'>
                            <div className='h-full w-full flex items-center justify-center py-4 '>
                                <div className=' w-full h-full flex justify-evenly flex-col gap-y-2 bg-slate-100 rounded-lg shadow-black/50 shadow-lg p-4'>
                                    <div>
                                        <h2 className='text-2xl font-bold'>WHAT IS INCLUDED</h2>
                                        <div className='font-semibold flex flex-col gap-y-2 mt-2'>
                                            <div className=' w-full flex  gap-x-4 items-center '>
                                                <div className=' h-full w-[10%]'>
                                                    <IconClock className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>120+ Hours of Training</p>
                                            </div>
                                            <div className=' w-full flex gap-x-4 items-center'>
                                                <div className=' h-full w-[10%]'>
                                                    <IconDeviceDesktop className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Hands-on Mixing Labs</p>
                                            </div>
                                            <div className=' w-full flex   gap-x-4 items-center'>
                                                <div className=' h-full w-[10%]'>
                                                    <IconClock className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>12 Weeks of hybrid learning with a professional instructor</p>
                                            </div>
                                            <div className=' w-full flex  gap-x-4 items-center'>
                                                <div className=' h-full w-[10%]'>
                                                    <IconMusic className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Multiple Genres Covered (Rock, Rap, Pop, Country, Classical, etc...)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold'>SYSTEM REQUIREMENTS</h2>
                                        <div className='font-semibold flex flex-col gap-y-2 mt-2'>
                                            <div className=' w-full flex  gap-x-4 items-center '>
                                                <div className=' h-full w-[10%]'>
                                                    <IconDeviceDesktop className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>8GB RAM & 256GB HDD</p>
                                            </div>
                                            <div className=' w-full flex gap-x-4 items-center'>
                                                <div className=' h-full w-[10%]'>
                                                    <IconBrowser className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Up-to-Date OS & Internet Browser</p>
                                            </div>
                                            <div className=' w-full flex   gap-x-4 items-center'>
                                                <div className=' h-full w-[10%]'>
                                                    <IconCloud className='h-8 w-8  stroke-blue-900' />
                                                </div>
                                                <p className='w-[90%] col-span-1'>Stable Internet Connection</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col text-6xl font-bold items-center'>
                                        $1299
                                    </div>
                                    <div className='w-full flex mt-2 items-center flex-col'>
                                        <EnrollButtonReal
                                            borderColor='border-blue-900'
                                            color='bg-blue-900/50'
                                            hoverBorder='hover:border-teal-700'
                                            hoverColor='hover:bg-teal-900/50'
                                            text="Apply Now" />
                                    </div>
                                    <div className='font-extralight text-xs text-slate-600/80 text-center p-2'>
                                        Students, educators, active and former military, and first responders can save 20% on certifications and live training with proof of status. Please contact support@mixtechniques.com to receive a discount code.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto p-4 w-full flex items-center flex-col mt-10'>
                        <div className='border-blue-800 border-6 bg-slate-900 text-slate-200 rounded-lg h-auto w-[100%] lg:w-[80%] p-4 flex-col flex gap-y-4'>
                            <h1 className='lg:text-4xl text-2xl font-bold text-center'>
                                Who should take the MMXT course?
                            </h1>
                            <p className='text-center text-base/5 lg:mx-14 '>
                                The MMXT is an associate-level introduction to the world of mix engineering. Though students should have some experience with recording music, DAWs, and basic audio concepts, previous audio engineering experience is not required to take the course. The MMXT is appropriate for:
                            </p>
                            <ul className='list-disc w-full flex flex-col px-4 ml-4 lg:ml-20'>
                                <li>Aspiring Musicians and Music Industry Professionals</li>
                                <li>Audio Professionals Seeking Specialization</li>
                                <li>Students in Audio Engineering and Related Fields</li>
                                <li>Musicians and Engineers Looking for Better Mixes</li>
                                <li>Individuals Seeking a Hands-On Learning Experience</li>
                                <li>Songwriting and Production Enthusiasts and Hobbyists</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className='h-auto bg-slate-900'>
                <ParallaxBanner
                    layers={[
                        { image: '/studio3kstars.png', speed: 50 },
                        { image: '/studio3kroom.png', speed: 30, },
                        { image: '/studio3kboard.png', speed: 20 },
                    ]}
                    className="aspect-[2/1] md:h-[50vh] h-[60vh] relative"
                >
                    <div className='absolute inset-0 text-slate-200 flex flex-col items-center justify-center h-full w-full bg-black/50'>
                        <h1 className='p-4 md:mt-0 mt-4 text-2xl md:text-4xl font-extrabold text-center'>
                            The future of sonic quality depends on YOU
                        </h1>
                        <h1 className='p-4 text-xl  font-bold text-center'>
                            All Mix Techniques graduates will have the expertise, experience, and confidence to:
                        </h1>
                        <ul className='list-disc w-full flex flex-col px-6 ml-4 md:items-center pb-8'>
                            <li>Deliver Excellent Quality Mixes Everytime</li>
                            <li>Begin mixing professionally for independent and major label artists</li>
                            <li>Confidently showcase your mixes to anyone</li>
                            <li>Network and seek out clients worldwide</li>
                            <li>Be able to adapt to different mixing environments and quality of sessions</li>
                        </ul>
                    </div>
                </ParallaxBanner>
            </section>
            <div id='section4' className='h-auto w-full bg-slate-200 flex items-center justify-center flex-col overflow-hidden relative'>
                <div id='content4' className='text-slate-200 w-full h-full  '>
                    <div className='flex flex-col items-center w-full h-full px-4 lg:px-20 xl:px-60 '>
                        <h1 className='p-4 text-2xl  lg:text-4xl text-slate-900 font-extrabold text-center '>
                            The Master of Mix Techniques is an intesive course filled with valuable knowledge
                        </h1>
                        <p className='font-bold text-slate-900 px-2'>
                            Here is a basic breakdown of everything the course covers:
                        </p>
                        <div className='h-full w-full grid  grid-cols-1 lg:grid-cols-2 mt-4 text-base/5 gap-y-4 pb-12'>

                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={1} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Audio Engineering 101</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={2} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Acoustics and Music Business</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={3} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Pro Tools and DAWs</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={4} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Mix Techniques</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={5} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Mix Techniques II</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={6} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Midterm</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={7} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Projects Sim 1</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={8} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Projects Sim 2</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={9} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Advanced Mix Techniques</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={10} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Advanced Mix Techniques II</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={11} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Mastering 101</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-full w-full place-self-center flex justify-center items-center'>
                                <div className='flex flex-row'>
                                    <div className='  h-full flex items-center justify-end'>
                                        <ListNumber number={12} />
                                    </div>
                                    <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                        <h2 className='font-extrabold lg:text-lg '>Capstone and Presentations</h2>
                                        <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='faqs' className='h-auto w-full bg-black flex flex-col py-8 items-center p-4 lg:px-20 xl:px-60'>
                <Faq />
            </div>
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

export default CertificatePage

const ListNumber = ({ number = 0 }) => {
    return (
        <div className='bg-slate-200 shadow-lg shadow-black/30 rounded-lg h-12 w-12 p-1'>
            <div className='h-full w-full rounded-full bg-teal-700 p-1 shadow-sm shadow-purple-900'>
                <div className='h-full w-full rounded-full bg-purple-900 shadow-md shadow-black/50 flex items-center justify-center'>
                    <h1 className='text-slate-200 text-shadow-sm text-shadow-slate-900/50 font-extrabold'>
                        {number}
                    </h1>
                </div>
            </div>
        </div>
    )
}