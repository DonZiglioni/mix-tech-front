"use client";
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card.jsx'
import { useRouter } from 'next/navigation';
import { SignUpButton } from '@clerk/nextjs';

const CoolCard = ({
    title,
    description,
    image,
    link,
}) => {
    const router = useRouter()
    return (
        <CardContainer className="">
            <div onClick={() => router.push(link)}>

                <CardBody className="bg-white/60  backdrop-blur-md relative group/card  hover:shadow-2xl hover:shadow-teal-500/[0.1] border-black/[0.1] w-auto h-auto rounded-xl p-6 border-2  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-slate-900"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-slate-900 text-sm  mt-2"
                    >
                        {description}
                    </CardItem>
                    <CardItem translateZ="70" className="w-auto mt-4">
                        <img
                            src={image}
                            className=" w-full aspect-video object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-4">
                        <CardItem
                            translateZ={50}
                            as="a"
                            href={link}

                            className="px-4 py-2 rounded-xl text-xs font-normal group-hover/card:text-shadow-sm"
                        >
                            Learn More →
                        </CardItem>

                        <CardItem
                            translateZ={50}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold cursor-pointer group-hover/card:shadow-sm"
                        >
                            Sign up
                        </CardItem>

                    </div>
                </CardBody>
            </div>
        </CardContainer>
    )
}

export default CoolCard