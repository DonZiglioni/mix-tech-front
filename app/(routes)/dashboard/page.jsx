"use client"
import React from 'react'
import TopDivider from '../../_components/TopDivider'
import BottomDivider from '../../_components/BottomDivider'
import getCourses from '../../../actions/getCourses'
import { InlineWidget } from "react-calendly";

const DashboardPage = async () => {
    // const courses = await getCourses()
    // console.log(courses);
    return (
        <div>
            <section className='h-screen w-full bg-slate-200'>
                Dashboard Page
                <button type='button' >
                    Click
                </button>
                <a href="https://www.picktime.com/fb4ff3e8-e40c-4750-809b-938d5b5d9fa6" class="ptbkbtn" target="_blank" style={{ float: 'none' }}><img border="none" src="https://www.picktime.com/img/widgetButtons/BookingPage/picktime-book-online-gray.png" alt="Book an appointment with Mix Techniques" /></a>
                {/* <div className="App">
                    <InlineWidget url="https://calendly.com/donziglioni/don-ziglioni-1-on-1" />
                </div> */}
                {/* <TopDivider />
                <BottomDivider /> */}
            </section>
        </div>
    )
}

export default DashboardPage