import React from 'react'
import { IconBadges, IconClock, IconSchool } from '@tabler/icons-react'
import EnrollButtonReal from '../../_components/EnrollButtonReal'
import TopDivider from '../../_components/TopDivider'
import BottomDivider from '../../_components/BottomDivider'
import CourseCard from '../_components/CourseCard'
import getCourses from '../../../actions/getCourses'

const courseList = [
    {
        title: 'Audio Engineering 101',
        description: 'The basics of amplitude, frequency, and the science of sound',
        image: '/badges/dragon2.png',
        price: "FREE",
    },
    {
        title: 'Advanced Mix Techniques',
        description: 'The basics of amplitude, frequency, and the science of sound',
        image: '/badges/lion2.png',
        price: "$79.00",
    },
    {
        title: ' Mastering 101',
        description: 'The basics of amplitude, frequency, and the science of sound',
        image: '/badges/cobra2.png',
        price: "$79.99",
    },
    {
        title: 'Pro Tools and DAWs',
        description: 'The basics of amplitude, frequency, and the science of sound',
        image: '/badges/owl2.png',
        price: "$79.00",
    },
    {
        title: 'Mix Techniques II',
        description: 'The basics of amplitude, frequency, and the science of sound',
        image: '/badges/panther2.png',
        price: "$79.00",
    },
    {
        title: 'Songwriting 101',
        description: 'The basics of amplitude, frequency, and the science of sound',
        image: '/badges/gorilla3.png',
        price: "FREE",
    },
]

const CoursesPage = async () => {
    const courses = await getCourses()
    console.log(courses);
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
                                    MIX TECHNIQUES COURSES
                                </h2>
                                <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                                    LEARN HOW TO MIX,<br />
                                    THEN PROVE IT.
                                </h1>
                            </div>
                            <p className='mt-4'>
                                Start your journey into mixing and mastering by earning badges from Mix Techniques.  Our collection of
                                free and paid courses is your one-stop shop for all your music education needs.
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
                            <img src={'/badges.png'} className=' h-75 w-auto  object-contain  ' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black h-auto flex flex-col items-center relative py-8'>
                <img src={'black-bg1.png'} className='h-full w-full object-cover rotate-180  absolute top-0 left-0' />
                <div className='absolute bottom-0 z-50 left-0 h-auto w-full'>
                    <TopDivider />
                </div>
                <div className='absolute top-0 left-0 h-auto w-full'>
                    <BottomDivider />
                </div>
                <div className='h-full w-full   z-10 flex items-center flex-col'>
                    <div className='grid grid-cols-2 h-full w-full p-4 gap-4 md:px-20  lg:px-40 xl:px-80 mt-4 '>
                        <div className='h-full sm:w-[90%] w-full col-span-2 place-self-center'>
                            <div className='h-auto w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md rounded-xl relative shadow-md shadow-black/50  '>
                                <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-blue-900 to-teal-600 rounded-t-xl ' />
                                <h1 className='text-slate-200 px-2 font-extrabold lg:text-5xl text-3xl md:text-4xl mt-8 text-center'>
                                    Ready to get started?
                                </h1>
                                <h1 className='text-slate-200 px-2 font-bold lg:text-3xl text-xl md:text-2xl mt-4 text-center'>
                                    Earn a professional badge for every course completed!
                                </h1>
                                <div className='grid mt-5 grid-cols-1 sm:grid-cols-2 p-4 gap-4 h-full w-full'>
                                    <div className='h-full w-full rounded-xl p-8 flex flex-col items-center justify-center shadow-black/50 shadow-md bg-slate-200/60 '>
                                        <h1 className='text-4xl md:text-5xl font-bold text-center'>
                                            ALL <br />ACCESS<br /> PASS
                                        </h1>
                                        <p className='text-xs '>Coming soon!</p>
                                    </div>
                                    <div className='h-full w-full sm:rounded-xl shadow-black/50 shadow-md bg-slate-200/60'>
                                        <div className='mt-4 flex flex-col items-center '>
                                            <h2 className='text-2xl md:text-3xl font-bold text-center'>LEARN IT ALL</h2>
                                            <div className='font-semibold flex flex-col gap-y-2 mt-4 pl-4'>
                                                <div className=' w-full flex  '>
                                                    <div className=' h-full w-[10%]'>
                                                        <IconSchool className='h-8 w-8  stroke-blue-900' />
                                                    </div>
                                                    <p className='w-[90%] pl-4 col-span-1'>120+ Hours of On-Demand Training</p>
                                                </div>
                                                <div className=' w-full flex'>
                                                    <div className=' h-full w-[10%]'>
                                                        <IconClock className='h-8 w-8  stroke-blue-900' />
                                                    </div>
                                                    <p className='w-[90%] pl-4 col-span-1'>Learn At Your Own Pace</p>
                                                </div>
                                                <div className=' w-full flex'>
                                                    <div className=' h-full w-[10%]'>
                                                        <IconBadges className='h-8 w-8  stroke-blue-900' />
                                                    </div>
                                                    <p className='w-[90%] pl-4 col-span-1'>Earn Every Badge</p>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col text-3xl font-bold items-center'>
                                                $29.99/mo.
                                            </div>
                                            <div className='p-4'>
                                                <EnrollButtonReal
                                                    borderColor='border-blue-900'
                                                    color='bg-blue-900/50'
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
                        {courses.map((course, index) => (
                            <CourseCard
                                key={index}
                                title={course.title}
                                description={course.description}
                                image={course.imageUrl}
                                price={course.price}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* <section className='h-75 '>
                <div className='h-full w-full '>
                    <div className='h-full w-full   rounded-xl flex flex-col items-center justify-evenly shadow-lg shadow-black/50 p-4 relative'>
                        <img src='/wave-bg.jpg' className='absolute top-0 left-0 h-full w-full object-cover' />
                        <div className='absolute top-0 left-0 h-full w-full bg-black/50' />
                        <h1 className='text-4xl lg:text-5xl font-extrabold text-center z-50 text-slate-200 text-shadow-black text-shadow-lg'>
                            Login to see the full course catalog!
                        </h1>
                        <EnrollButtonReal
                            borderColor='border-blue-900'
                            color='bg-blue-900/50'
                            hoverBorder='hover:border-teal-700'
                            hoverColor='hover:bg-teal-900/50'
                            text="Enroll Now"
                        />
                    </div>
                </div>
            </section> */}

        </div>
    )
}

export default CoursesPage

// const CourseCard = ({
//     title,
//     description,
//     image,
//     price,
// }) => {
//     return (
//         <div className='h-full w-full col-span-2 sm:col-span-1 ' onClick={() => router.push('https://academy.mixtechniques.com')} >
//             <div className='h-auto w-full flex flex-col items-center justify-center bg-slate-200/10 backdrop-blur-md  rounded-xl relative shadow-md shadow-black/50 hover:shadow-lg hover:shadow-blue-900/30 '>
//                 <div className='bg-slate-200/0 h-full w-full flex text-shadow-black text-shadow-lg  text-slate-200 border-blue-900/30 border-2 flex-col justify-evenly p-4 rounded-xl'>
//                     <h1 className='font-bold text-center text-2xl '>
//                         {title}
//                     </h1>
//                     <img src={image} className='h-65 w-65 cursor-pointer my-4 place-self-center rounded-xl object-contain shadow-black/50 shadow-lg hover:scale-105 overflow-hidden' />
//                     <p className=' text-lg/5 py-2 px-4'>
//                         {description}
//                     </p>
//                     <div className='flex justify-between pt-4 px-4'>
//                         <div className='bg-teal-400/30 border-1 shadow-black/50 shadow-md text-shadow-black/90 text-shadow-sm border-blue-900 text-white rounded-2xl px-4 py-1'>
//                             {price}
//                         </div>
//                         <div className='bg-black text-white border-1 border-blue-900 rounded-2xl px-4 py-1 hover:scale-105 cursor-pointer'>
//                             START COURSE
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }