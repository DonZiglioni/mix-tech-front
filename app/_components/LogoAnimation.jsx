'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogoAnimation() {
    return (
        <div className='flex flex-col h-full w-full justify-center items-center z-20'>
            <div className='relative h-100 w-75   '>
                <Image alt='m' height={500} width={500} src={'/mix-logo2.png'} className='absolute top-0 left-0' />
                {/* <motion.div
                    initial={{ opacity: 0.0, y: -75, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 0,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='m' height={500} width={500} src={'/m.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 100, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 0,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='i' height={500} width={500} src={'/i.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: 100 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 1,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='x' height={500} width={500} src={'/x.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 2,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='sm' height={500} width={500} src={'/sm.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: -100 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 1.5,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='t' height={500} width={500} src={'/t.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 100, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 1.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='e' height={500} width={500} src={'/e.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: -100, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                    transition={{
                        delay: 1,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='c' height={500} width={500} src={'/c.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: -75, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='h' height={500} width={500} src={'/h.png'} className='absolute top-0 left-0' />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 100, x: 0, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='n' height={500} width={500} src={'/n.png'} className='absolute top-0 left-0' />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: 100, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                    transition={{
                        delay: 1,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='i2' height={500} width={500} src={'/i2.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 2,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='q' height={500} width={500} src={'/q.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 2.1,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='u' height={500} width={500} src={'/u.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 2.3,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='e2' height={500} width={500} src={'/e2.png'} className='absolute top-0 left-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 0, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                        delay: 2.5,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                >
                    <Image alt='s' height={500} width={500} src={'/s.png'} className='absolute top-0 left-0' />
                </motion.div> */}
            </div>
            {/* <Header /> */}
        </div>
    );
}
