import React from 'react'
import TopDivider from '../../_components/TopDivider'
import BottomDivider from '../../_components/BottomDivider'
import getCourses from '../../../actions/getCourses'


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
                {/* <TopDivider />
                <BottomDivider /> */}
            </section>
        </div>
    )
}

export default DashboardPage