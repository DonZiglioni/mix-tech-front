"use client"
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const CheckoutPage = async ({ params }) => {
    const router = useRouter();
    const { price_id } = await params;

    const res = await axios.post(`https://mixtechniques.com/api/checkout/${price_id}`)
    let success = res.data.url
    router.push(success);


    return (
        <div className='h-[750px] bg-black text-center pt-20 text-4xl text-slate-200'>
            Redirecting to Checkout...
        </div>
    )
}

export default CheckoutPage