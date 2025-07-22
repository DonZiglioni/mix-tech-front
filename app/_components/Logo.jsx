"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
const Logo = ({ height, width, classname }) => {
    const router = useRouter()
    return (
        <div onClick={() => { router.push('/') }}>
            <Image alt={'logo'} src={'/mt-logo-v1.png'} height={height} width={width} className={classname} />
        </div>
    )
}

export default Logo