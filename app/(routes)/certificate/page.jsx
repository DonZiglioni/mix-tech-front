import React from 'react'
import Faq from './_components/Faq'
import { IconDirectionSignFilled, IconSchool, IconDeviceDesktop, IconClockFilled, IconMusic, IconBrowser, IconCloudFilled } from '@tabler/icons-react'
import EnrollButtonReal from '../../_components/EnrollButtonReal'

const CertificatePage = () => {
    return (
        <div className='h-auto w-full bg-violet-500 '>
            <div id='header' className='h-100 w-full flex items-center justify-center flex-col overflow-hidden relative'>
                <img src={'/studio-background.png'} className='w-full h-100 absolute top-0 left-0 object-cover  ' />
                <div className='w-full h-100 absolute top-0 left-0 object-cover bg-black/70' />

                <div id='content' className='text-slate-200 lg:px-10 xl:px-60 w-full px-2 flex flex-row h-100 absolute top-0 left-0  '>
                    <div className='flex flex-col justify-evenly  lg:w-[80%] w-full h-full px-10'>
                        <div>
                            <h2 className='font-semibold text-lg'>
                                MASTER OF MIX TECHNIQUES
                            </h2>
                            <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                                LEARN HOW TO MIX,<br />
                                THEN PROVE IT.
                            </h1>
                        </div>
                        <p>
                            Start your journey into mixing and mastering by earning the Master of Mix Techniques certification.
                            Learn the science of sound, get hands-on mixing experience, and earn the certification and demonstrate
                            your expertise to employers.
                        </p>
                        <div>
                            <EnrollButtonReal
                                borderColor='border-purple-900'
                                color='bg-slate-900/50'
                                hoverBorder='hover:border-purple-800'
                                hoverColor='hover:bg-slate-900/50'
                                text="Apply Now"
                            />
                        </div>
                    </div>
                    <div className=' w-[50%] hidden lg:flex flex-col items-center justify-center  ' >
                        <img src={'/hero-img1.png'} className=' h-75 w-75  object-cover rounded-full ' />
                    </div>
                </div>
            </div>
            <div id='section2' className='bg-slate-200 h-auto w-full flex flex-col px-8 py-4 items-center justify-center'>
                <div id='section-content' className='h-auto w-full flex flex-col items-center justify-center lg:px-60'>
                    <div className=' h-auto w-full space-y-20 gap-x-4 grid grid-cols-1 lg:grid-cols-3 '>
                        <div className=' h-full flex flex-col justify-evenly  px-4 lg:col-span-2'>
                            <h1 className='text-4xl font-bold'>
                                What is the Master of Mix Techniques (MMXT) Certification?
                            </h1>
                            <p>
                                The Master of Mix Techniques™ (MMXT) certification is an audio engineering experience that will assess a student’s ability to perform an internal network penetration test at an associate level. Students will have two (2) full days to complete the assessment and an additional two (2) days to write a professional report.                            </p>
                            <h2 className='text-2xl font-bold'>
                                How to Pass the MMXT Exam?
                            </h2>
                            <p>
                                In order to receive the certification, a student must:
                                <div className='flex mt-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='mr-4 h-8 w-8 fill-purple-900' />
                                    Provide a detailed, professionally written report.
                                </div>
                                <div className='flex mb-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className=' h-8 w-8 mr-4 fill-purple-900' />
                                    Provide a detailed, professionally written report.
                                </div>
                                TCM Security course vouchers come with 12 months of access to the training materials the exam is based on. Access begins on the day the voucher is purchased.
                            </p>
                            <h2 className='text-2xl font-bold'>
                                Master of Mix Techniques Course Format
                            </h2>
                            <p>
                                The MMXT Course was designed to teach students how to apply their skills in real-world situations. This is not your normal audio enginnering college. Our course is an experience that is similar to what you will be asked to do in a professional environment.
                                <div className='flex mt-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className='mr-4 h-8 w-8 fill-purple-900' />
                                    Knowledge AND Hands-On Experience.
                                </div>
                                <div className='flex mb-4 pl-4 items-center w-full'>
                                    <IconDirectionSignFilled className=' h-8 w-8 mr-4 fill-purple-900' />
                                    12 months of career guidance offered.
                                </div>
                            </p>
                        </div>
                        <div id='shadowed-container' className=' h-auto text-base/5 w-full'>
                            <div className='h-full w-full flex items-center justify-center py-4 '>
                                <div className=' w-full h-full flex flex-col gap-y-2 bg-slate-100 rounded-lg shadow-black/50 shadow-lg p-4' >
                                    <div>
                                        <h2 className='text-2xl font-bold'>WHAT IS INCLUDED</h2>
                                        <ul className='font-semibold flex flex-col gap-y-2 mt-2'>
                                            <li className='flex w-full items-center gap-x-4 px-6'>
                                                <IconSchool className='h-12 w-12 fill-purple-900 stroke-purple-900' />
                                                <p>20+ Hours of On-Demand Training(12 Month Access)</p>
                                            </li>
                                            <li className='flex w-full items-center gap-x-4 px-6'>
                                                <IconDeviceDesktop className='max-h-12 max-w-12 fill-purple-900 stroke-purple-900' />
                                                <p>Hands-On Mixing Labs</p>
                                            </li>
                                            <li className='flex w-full h-20 items-center gap-x-4 px-6'>
                                                <IconClockFilled className='h-12 w-12 fill-purple-900' />
                                                <p>12 Weeks of hybrid learning with a professional instructor</p>
                                            </li>
                                            <li className='flex w-full items-center gap-x-4 px-6'>
                                                <IconMusic className='h-12 w-12 stroke-purple-900' />
                                                <p>Multiple Genres Covered (Rock, Rap, Pop, Country, Classical, etc...)</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-bold'>SYSTEM REQUIREMENTS</h2>
                                        <ul className='font-semibold flex flex-col gap-y-2 mt-2'>
                                            <li className='flex w-full items-center gap-x-4 px-6'>
                                                <IconDeviceDesktop className='max-h-12 max-w-12 fill-purple-900 stroke-purple-900' />
                                                <p>8GB RAM & 256GB HDD</p>
                                            </li>
                                            <li className='flex w-full items-center gap-x-4 px-6'>
                                                <IconBrowser className='max-h-12 max-w-12 stroke-purple-900' />
                                                <p>Up-to-Date OS & Internet Browser</p>
                                            </li>
                                            <li className='flex w-full items-center gap-x-4 px-6'>
                                                <IconCloudFilled className='max-h-12 max-w-12 fill-purple-900' />
                                                <p>Stable Internet Connection</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='w-full flex flex-col text-6xl font-bold items-center'>
                                        $1299
                                    </div>
                                    <div className='w-full flex items-center flex-col'>
                                        <EnrollButtonReal
                                            borderColor='border-purple-900'
                                            color='bg-purple-900/50'
                                            hoverBorder='hover:border-teal-700'
                                            hoverColor='hover:bg-teal-900/50'
                                            text="Apply Now"
                                        />
                                    </div>
                                    <div className='font-extralight text-xs text-slate-600/80 text-center p-2'>
                                        Students, educators, active and former military, and first responders can save 20% on certifications and live training with proof of status. Please contact support@mixtechniques.com to receive a discount code.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto p-4 w-full flex items-center flex-col mt-10'>
                        <div className='border-purple-800 border-6 bg-slate-900 text-slate-200 rounded-lg h-auto w-[100%] lg:w-[80%] p-4 flex-col flex gap-y-4'>
                            <h1 className='lg:text-4xl text-2xl font-bold text-center'>
                                Who should take the MMXT course?
                            </h1>
                            <p className='text-center text-base/5 lg:mx-14 '>
                                The PJPT is an associate-level introduction to the world of network penetration testing. Though students should have some experience with networking and computer systems, previous penetration testing experience is not required to take the exam. The PJPT is appropriate for:
                            </p>
                            <ul className='list-disc w-full flex flex-col px-4 ml-4 lg:ml-20'>
                                <li>Aspiring Ethical Hackers and Cybersecurity Professionals</li>
                                <li>IT Professionals Seeking Specialization</li>
                                <li>Students in Computer Science and Related Fields</li>
                                <li>Professionals Looking for Career Advancement</li>
                                <li>Individuals Seeking Hands-On Learning Experience</li>
                                <li>Security Enthusiasts and Hobbyists</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id='section3' className='h-150 w-full flex items-center justify-center flex-col overflow-hidden relative'>
                <img src={'/studio-background2.png'} className='w-full h-150 absolute top-0 left-0 object-cover  ' />
                <div className='w-full h-150 absolute top-0 left-0 object-cover bg-black/80' />

                <div id='content2' className='text-slate-200 pb-2 w-full px-2 lg:px-60 flex flex-col items-center h-full absolute top-0 left-0  '>
                    <h1 className='p-4 text-2xl mt-8 h-20 md:text-4xl font-extrabold text-center'>
                        The future of sonic quality depends on YOU
                    </h1>

                    <div className='grid grid-cols-1 lg:grid-cols-2 h-full w-full p-4 gap-6'>
                        <div className='border-2 border-white rounded-md h-full w-full'>
                            <h2>
                                All Mix Techniques graduates will have the expertise, experience, and confidence to:
                            </h2>
                        </div>
                        <div className='border-2 border-white rounded-md h-full w-full'>
                        </div>
                    </div>
                </div>
            </div>
            <div id='section4' className='h-auto w-full bg-slate-200 flex items-center justify-center flex-col overflow-hidden relative'>
                <div id='content4' className='text-slate-200 w-full h-full  '>
                    <div className='flex flex-col items-center w-full h-full px-4 lg:px-60' >
                        <h1 className='p-4 text-2xl  lg:text-4xl text-slate-900 font-extrabold text-center'>
                            The Master of Mix Techniques is an intesive course filled with valuable knowledge
                        </h1>
                        <p className='font-bold text-slate-900 px-2'>
                            Here is a basic breakdown of everything the course covers:
                        </p>
                        <div className='h-full w-full grid  grid-cols-1 lg:grid-cols-2 mt-4 text-base/5 gap-y-4 pb-12'>
                            <div className=' h-auto w-full flex items-center'>
                                <div className=' w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={1} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg '>Audio Engineering 101</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={2} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Acoustics and Music Business</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={3} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Pro Tools and DAWs</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={4} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Mix Techniques</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={5} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Mix Techniques II</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={6} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Midterm</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={7} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Projects Sim 1</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={8} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Projects Sim 2</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={9} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Advanced Mix Techniques</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={10} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Advanced Mix Techniques II</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={11} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Mastering 101</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                            <div className=' h-auto w-full flex items-center'>
                                <div className='  w-[15%] h-full flex items-center justify-end'>
                                    <ListNumber number={12} />
                                </div>
                                <div className='flex flex-col w-full h-full pl-4 text-slate-900 justify-center'>
                                    <h2 className='font-extrabold lg:text-lg'>Capstone and Presentations</h2>
                                    <p className='text-xs font-light lg:text-base/4'>We are going to do a LOT of learning gosh darnit!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='faqs' className='h-auto w-full bg-gray-800 flex flex-col py-8 items-center p-4 lg:px-60 '>
                <Faq />
            </div>
            <div id='callout' className='h-80 w-full py-4 bg-black text-slate-200 flex flex-col items-center justify-evenly '>
                <h1 className='font-extrabold text-2xl lg:text-5xl'>Ready to Get Started?</h1>
                <p className='text-light text-sm lg:text-lg'>
                    Your future in mixing is here.
                </p>
                <EnrollButtonReal
                    borderColor='border-purple-900'
                    color='bg-purple-900/50'
                    hoverBorder='hover:border-teal-700'
                    hoverColor='hover:bg-teal-900/50'
                    text="Enroll Now"
                />
                <hr className='border-slate-200/50 w-[80%]' />
            </div>
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