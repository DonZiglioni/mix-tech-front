import React from 'react'

const SchedulePage = async ({ params }) => {
    const { price_id } = await params;
    const BookingPage = () => {
        switch (price_id) {
            case 'price_1RrlMxPBCHZfJi6WstWQ6Mkc':
                return (
                    <iframe width='100%' height='750px' src='https://mixtechniques.zohobookings.com/portal-embed#/4738245000000043112' frameBorder='0' allowFullScreen='' ></iframe>
                )
            case 'price_1Rrma6PBCHZfJi6WHT3vY52n':
                return (
                    <iframe width='100%' height='750px' src='https://mixtechniques.zohobookings.com/portal-embed#/4738245000000043084' frameBorder='0' allowFullScreen='' ></iframe>
                )
            case 'price_1RrnU1PBCHZfJi6WebV2BCmw':
                return (
                    <iframe width='100%' height='750px' src='https://mixtechniques.zohobookings.com/portal-embed#/4738245000000043288' frameBorder='0' allowFullScreen='' ></iframe>
                )
            case 'price_1RrnUxPBCHZfJi6WfaojFUw9':
                return (
                    <iframe width='100%' height='750px' src='https://mixtechniques.zohobookings.com/portal-embed#/4738245000000043306' frameBorder='0' allowFullScreen='' ></iframe>
                )
            default:
                break;
        }
    }
    return (
        <div className=''>
            <BookingPage />
        </div>
    )
}

export default SchedulePage