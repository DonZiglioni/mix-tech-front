"use client"
import React from 'react'
import EnrollButtonReal from '../../../_components/EnrollButtonReal'
import { IconBrowser, IconClock, IconCloud, IconDeviceDesktop } from '@tabler/icons-react'
import TopDivider from '../../../_components/TopDivider'
import BottomDivider from '../../../_components/BottomDivider'

const MixTech1Page = () => {
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
                  ADVANCED MIX TECHNIQUES LIVE COURSE
                </h2>
                <h1 className='font-bold text-lg lg:text-4xl md:text-3xl sm:text-2xl mt-2'>
                  LEARN HOW TO MIX,<br />
                  THEN PROVE IT.
                </h1>
              </div>
              <p>
                Learn audio engineering with LIVE classes by industry-leading instructors.
                Designed to teach beginners and music industry professionals practical skills with hands-on learning that
                enables real-world professional success.
              </p>
              <div>
                <EnrollButtonReal
                  borderColor='border-blue-900'
                  color='bg-slate-900/50'
                  hoverBorder='hover:border-blue-800'
                  hoverColor='hover:bg-slate-900/50'
                  text="Enroll Now"
                  price_id='price_1RrnUxPBCHZfJi6WfaojFUw9'
                />
              </div>
            </div>
            <div className=' w-[50%] hidden lg:flex flex-col items-center justify-center  ' >
              <img src={'/lionLive.png'} className=' h-75 w-75  object-cover rounded-full ' />
            </div>
          </div>
        </div>
      </section>
      <section className=' w-full h-auto py-8 relative'>
        <div className='absolute bottom-0 z-50 left-0 h-auto w-full'>
          <TopDivider />
        </div>
        <div className='absolute top-0 left-0 h-auto w-full'>
          <BottomDivider />
        </div>
        <img src={'/black-bg1.png'} className='w-full h-full absolute top-0 left-0 object-cover -z-50 ' />
        <div className='h-auto w-full px-4 lg:px-20 xl:px-60 text-slate-200'>
          <div className='grid grid-cols-1 lg:grid-cols-3 h-auto w-full'>
            <div className=' h-full flex flex-col p-4 lg:col-span-2'>
              <h1 className='font-bold text-2xl lg:text-4xl'>
                Class Overview:
              </h1>
              <h1 className='font-bold text-2xl lg:text-4xl'>
                Advanced Mix Techniques
              </h1>
              <p className='lg:text-lg mt-8'>
                This hands-on four day live training (9am – 5pm ET) is designed to take you from a
                beginner, intermediate, or advanced audio/mix engineer, and turn you into an expert.
                You’ll gain a solid understanding of automation, phase, stereo image, and sonic quality
                to open up your mixes and shine as an advanced mix engineer.
                <br /><br />
                Frank Azzaro leads this four day live session focused on teaching students the various techniques
                and lessons learned throughout 20 years of experience. The contents covered in this live training
                session will help students prepare for real-world mixing scenarios.
                <br /><br />
                By the end of the training, you’ll understand how to organize, prepare, and mix records to prepare
                you for your long-term career as a mix engineer. This class is limited to 12 students,
                so sign up today to reserve your spot.
              </p>
            </div>
            <div id='shadowed-container' className=' h-auto text-base/5 w-full'>
              <div className='h-full w-full flex items-center justify-center py-4 text-slate-900'>
                <div className=' w-full h-full flex flex-col gap-y-2 bg-slate-100 rounded-lg shadow-black/30 shadow-lg p-4'>
                  <div>
                    <h2 className='text-2xl font-bold'>NEXT CLASS BEGINS</h2>
                    <div className='font-bold flex flex-col gap-y-2 mt-2'>
                      <h3 className=''>
                        August 22nd, 2025
                      </h3>
                      <h3>
                        Meets on Fridays from 9am-5pm Mountain Time
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold'>DETAILS</h2>
                    <div className='font-semibold flex flex-col gap-y-2 mt-2'>
                      <div className=' w-full flex  gap-x-4 items-center '>
                        <div className=' h-full w-[10%]'>
                          <IconClock className='h-8 w-8  stroke-blue-900' />
                        </div>
                        <p className='w-[90%] col-span-1'>32+ Hours of Live Online Instruction and CEU Credits</p>
                      </div>
                      <div className=' w-full flex gap-x-4 items-center'>
                        <div className=' h-full w-[10%]'>
                          <IconBrowser className='h-8 w-8  stroke-blue-900' />
                        </div>
                        <p className='w-[90%] col-span-1'>Private Cohort and Instructor Access</p>
                      </div>
                      <div className=' w-full flex   gap-x-4 items-center'>
                        <div className=' h-full w-[10%]'>
                          <IconCloud className='h-8 w-8  stroke-blue-900' />
                        </div>
                        <p className='w-[90%] col-span-1'>Online Labs w/ 12 Months Access After Training</p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex flex-col text-6xl font-bold items-center'>
                    $699
                  </div>
                  <div className='w-full flex mt-2 items-center flex-col'>
                    <EnrollButtonReal
                      borderColor='border-blue-900'
                      color='bg-blue-900/50'
                      hoverBorder='hover:border-teal-700'
                      hoverColor='hover:bg-teal-900/50'
                      text="Enroll Now"
                      price_id='price_1RrnUxPBCHZfJi6WfaojFUw9'
                    />
                  </div>
                  <div className='font-extralight text-xs text-slate-600/80 text-center p-2'>
                    Students, educators, active and former military, and first responders can save 20% on certifications and live training with proof of status. Please contact support@mixtechniques.com to receive a discount code.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-auto p-4 w-full flex items-center flex-col mt-10'>
          <div className='border-blue-800 border-6 bg-slate-900 text-slate-200 rounded-lg h-auto w-[100%] lg:w-[60%] p-4 flex-col flex gap-y-4'>
            <h1 className='lg:text-4xl text-2xl font-bold text-center'>
              Who should take the LIVE Advanced Mix Techniques course?
            </h1>
            <p className='text-center text-base/5 lg:mx-14 '>
              This is an advanced-level introduction to the world of professional mixing. A basic knowledge of audio
              engineering such as DAWs, compression, and equalizers is expected to get the most out of this course. The Advanced Mix Techniques
              course is appropriate for:
            </p>
            <ul className='list-disc w-full flex flex-col px-4 ml-4 lg:ml-20'>
              <li>Aspiring Musicians and Music Industry Professionals</li>
              <li>Audio Professionals Seeking Instructor-led Training</li>
              <li>Students in Audio Engineering and Related Fields</li>
              <li>Audio Engineers Looking to Expand Into Mix Engineering</li>
              <li>Individuals Seeking a Hands-On Learning Experience</li>
              <li>Mix Engineers Looking For Better Mixes</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='h-auto bg-black/50 relative'>
        <img src={'/studio4k.png'} className='w-full h-full absolute top-0 left-0 object-cover -z-50 ' />
        <div className='absolute bottom-0 z-50 left-0 h-auto w-full'>
          <TopDivider />
        </div>
        <div className='absolute top-0 left-0 h-auto w-full'>
          <BottomDivider />
        </div>
        <div className=' text-slate-200 flex flex-col items-center  h-full w-full bg-black/50 pb-8'>
          <h1 className='mt-8 text-2xl md:text-4xl font-extrabold text-center'>
            Course Agenda
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full h-full px-4 lg:px-20 xl:px-60'>
            <div className='h-auto w-full flex flex-col p-8 rounded-lg border-1 shadow-md shadow-black border-blue-900 bg-slate-200/0 backdrop-blur-sm'>
              <h2 className='font-bold text-2xl'>
                Day One - Friday, August 22, 2025
              </h2>
              <p className='font-bold mt-4'>
                Advanced Mix Engineering
              </p>
              <ul className='list-disc ml-10'>
                <li>
                  Session Delivery
                </li>
                <li>
                  Hard Drive / Computer Resources
                </li>
                <li>
                  Complex Sessions
                </li>
                <li>
                  Rough Mix to Final Mix
                </li>
                <li>
                  Adapting to Different Environments
                </li>
              </ul>
            </div>
            <div className='h-auto w-full flex flex-col p-8 rounded-lg border-1 shadow-md shadow-black border-blue-900 bg-slate-200/0 backdrop-blur-sm'>
              <h2 className='font-bold text-2xl'>
                Day Two - Friday, August 29, 2025
              </h2>
              <p className='font-bold mt-4'>
                Advanced Mixing Concepts
              </p>
              <ul className='list-disc ml-10'>
                <li>
                  The Master Bus
                </li>
                <li>
                  Automation
                </li>
                <li>
                  Phase Control
                </li>
                <li>
                  Stereo Image
                </li>
                <li>
                  Over-Mixing
                </li>
              </ul>
            </div>
            <div className='h-auto w-full flex flex-col p-8 rounded-lg border-1 shadow-md shadow-black border-blue-900 bg-slate-200/0 backdrop-blur-sm'>
              <h2 className='font-bold text-2xl'>
                Day Three - Friday, September 5, 2025
              </h2>
              <p className='font-bold mt-4'>
                Advanced Concepts Continued
              </p>
              <ul className='list-disc ml-10'>
                <li>
                  Re-amping / Sound Replacement
                </li>
                <li>
                  Advanced Vocal Mixing
                </li>
                <li>
                  Vocalign
                </li>
                <li>
                  Advanced Bussing / Routing
                </li>
                <li>
                  Creative Effects
                </li>
              </ul>
            </div>
            <div className='h-auto w-full flex flex-col p-8 rounded-lg border-1 shadow-md shadow-black border-blue-900 bg-slate-200/0 backdrop-blur-sm'>
              <h2 className='font-bold text-2xl'>
                Day Four - Friday, September 12, 2025
              </h2>
              <p className='font-bold mt-4'>
                Professional Mix Engineering
              </p>
              <ul className='list-disc ml-10'>
                <li>
                  Mixing Within Time Constraints
                </li>
                <li>
                  Out-of-the Box vs. Plugins
                </li>
                <li>
                  Rendering Stems / Session Archive
                </li>
                <li>
                  Preparing Mixes For Mastering
                </li>
                <li>
                  Building Reputation
                </li>
              </ul>
            </div>
          </div>
          <p className='text-slate-200 text-sm m-8 text-center'>*Curriculum is dependent on class skillset and other varying factors. Curriculum may change at the instructor’s discretion.</p>
          <EnrollButtonReal
            borderColor='border-blue-900'
            color='bg-blue-900/50'
            hoverBorder='hover:border-teal-700'
            hoverColor='hover:bg-teal-900/50'
            text="Enroll Now"
            price_id='price_1RrnUxPBCHZfJi6WfaojFUw9'
          />
        </div>

      </section>
    </div>
  )
}

export default MixTech1Page