import React from 'react'
import EnrollButtonReal from '../../_components/EnrollButtonReal'
import BottomDivider from '../../_components/BottomDivider'
import TopDivider from '../../_components/TopDivider'

const LessonsPage = () => {
    return (
        <div >
            <section className='h-auto '>
                <div id='header' className='h-120 -mt-20 w-full flex items-center justify-center flex-col overflow-hidden relative'>
                    <img src={'/studio-background.png'} className='w-full h-120 absolute top-0 left-0 object-cover  ' />
                    <div className='w-full h-120 absolute top-0 left-0 object-cover bg-black/50' />

                    <div id='content' className='text-slate-200 pt-24 lg:px-10 xl:px-60 w-full px-2 flex flex-row h-100 absolute top-0 left-0  '>
                        <div className='flex flex-col justify-evenly  lg:w-[80%] w-full h-full px-4'>
                            <div>
                                <h2 className='font-bold text-lg'>
                                    MIX TECHNIQUES PRIVATE LESSONS
                                </h2>
                                <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                                    LEARN HOW TO MIX,<br />
                                    THEN PROVE IT.
                                </h1>
                            </div>
                            <p className='mt-4'>
                                Start your journey into mixing and mastering with mentorship and one-on-one lessons
                                from a Mix Techniques.  We will evaluate each student individually and create a lesson plan
                                that will bring your career to the next level.  Our mentor's are all-in and commited to helping our
                                students make their dreams come true.
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
                    <div className='absolute bottom-0  w-full '>
                        <TopDivider />
                    </div>
                </div>
            </section>
            <section className='bg-black h-auto flex flex-col items-center relative py-8 text-slate-200'>
                <img src={'black-bg1.png'} className='h-full w-full object-cover rotate-180  absolute top-0 left-0' />
                <div className='absolute top-0 left-0 h-auto w-full'>
                    <BottomDivider />
                </div>
                <div className='h-auto w-full z-10 flex items-center flex-col'>
                    <div className='h-auto w-full p-4 md:px-20 lg:px-60 flex flex-col items-center justify-center'>
                        <div className='border-2  border-blue-900 backdrop-blur-sm rounded-lg h-auto w-full'>
                            <div className=' rounded-t-lg'>
                                <div className='h-auto w-full flex flex-col items-center justify-center rounded-t-lg relative   '>
                                    <div className='h-5 w-full absolute top-0 left-0 bg-gradient-to-r from-blue-900 to-teal-600 rounded-t-md ' />
                                    <div className='w-full mt-5 h-auto flex flex-col items-center justify-center text-center px-4 md:px-20'>
                                        <h1 className='text-4xl mt-4 font-extrabold'>
                                            IT'S MORE THAN LESSONS<br /> IT'S A MENTORSHIP
                                        </h1>
                                        <p className='mt-8'>
                                            Wether you are a complete beginner, or a working professional in the music industry,
                                            we offer you the opportunity to connect with a teacher and mentor that can help give
                                            you knowledge, inspiration, and guidance as you grow your professional career.
                                        </p>
                                        <div className=' mt-8  h-auto my-8 w-full'>
                                            <h2 className='text-2xl font-bold '>
                                                Connect with someone now!
                                            </h2>
                                            <p className='mt-4 text-2xl font-bold'>
                                                We are currently accepting new learners!
                                            </p>
                                            <p className='mt-4'>
                                                Feel free to reach out for consutations, advice, contract revision, and more!
                                                Please email us directly to introduce yourself and explain in detail the types of
                                                lessons you're interested in taking.
                                            </p>
                                            <p className='mt-4 md:text-2xl text-xl font-bold text-blue-400'>
                                                mentors@mixtechniques.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0  w-full '>
                    <TopDivider />
                </div>
            </section>
            <section className='h-auto lg:px-60 md:px-20 px-4 py-8 text-slate-200 bg-black/50 relative'>
                <img src={'black-bg1.png'} className='h-full w-full object-cover rotate-180 -z-50 absolute top-0 left-0' />
                {/* <div className='absolute top-0 left-0 h-auto w-full'>
                    <BottomDivider />
                </div> */}

                <h1 className='text-4xl  text-slate-200 text-center font-extrabold'>
                    Meet Your Instructors
                </h1>
                <div className='h-auto  grid grid-cols-1 lg:grid-cols-2 my-4 border-2 bg-slate-200/10 border-blue-900/30 rounded-lg backdrop-blur-lg shadow-lg shadow-black'>
                    <div className=' flex flex-col items-center justify-center h-auto p-4'>
                        <div className=' h-full w-full rounded-lg py-4 shadow-md shadow-black  bg-slate-200/10'>
                            <img className='h-50 w-50 place-self-center rounded-full ' src='/class3.png' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4'>
                        <div className='h-full w-full'>
                            <h1 className='text-2xl font-bold'>
                                Frank Azzaro
                            </h1>
                            <p className='italic text-md'>
                                Mix Engineer, Audio Engineer and Director of Effortless Mastery
                            </p>
                            <p className='text-sm my-4'>
                                Frank Azzaro has been envolved in the music industry from a very young age, climbed up the ladder,
                                and has thousands of studio hours under his belt.  Whether you are just starting, or already climbing up the
                                ladder yourself, Frank is confident and prepared to go above and beyond to help you make all of your
                                dreams come true.
                            </p>
                            <EnrollButtonReal
                                borderColor='border-blue-900'
                                color='bg-slate-900/50'
                                hoverBorder='hover:border-blue-800'
                                hoverColor='hover:bg-slate-900/50'
                                text="Book Now"
                                link='https://mixtechniques.zohobookings.com/#/4738245000000043014'
                            />

                        </div>
                    </div>
                </div>
                <div className='h-auto grid grid-cols-1 lg:grid-cols-2 my-4 bg-slate-200/10 border-2 border-blue-900/30 rounded-lg backdrop-blur-lg shadow-lg shadow-black'>
                    <div className=' flex flex-col items-center justify-center h-auto p-4'>
                        <div className=' h-full w-full rounded-lg py-4 shadow-md shadow-black  bg-slate-200/10'>
                            <img className='h-50 w-50 place-self-center justify-self-center rounded-full ' src='/class3.png' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4'>
                        <div className='h-full w-full'>
                            <h1 className='text-2xl font-bold'>
                                Phil Mauro
                            </h1>
                            <p className='italic text-md'>
                                Songwriter, Performer, Tour Manager, and Artist
                            </p>
                            <p className='text-sm my-4'>
                                Phil Mauro has been envolved in the music industry from a very young age, climbed up the ladder,
                                and has thousands of studio hours under his belt.  Whether you are just starting, or already climbing up the
                                ladder yourself, Phil is confident and prepared to go above and beyond to help you make all of your
                                dreams come true.
                            </p>
                            <EnrollButtonReal
                                borderColor='border-blue-900'
                                color='bg-slate-900/50'
                                hoverBorder='hover:border-blue-800'
                                hoverColor='hover:bg-slate-900/50'
                                text="Book Now"
                                link='https://mixtechniques.zohobookings.com/#/4738245000000043014'
                            />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default LessonsPage