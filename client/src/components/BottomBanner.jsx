import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
    return (
        <div className='relative mt-24'>
            <img src={assets.bottom_banner_image} alt='banner' className='w-full hidden md:block' />
            <img src={assets.bottom_banner_image_sm} alt='banner' className='w-full md:hidden' />
            <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
                <div className="flex flex-col gap-4 w-[90%] md:w-[400px]">
                    <h1 className='text-2xl md:text-3xl font-semibold text-primary'>Why We Are the Best?</h1>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 bg-white/90 p-2 rounded-md shadow-sm">
                            <div className="w-10 h-10 min-w-10 bg-green-100 flex items-center justify-center rounded-md">
                                <img src={feature.icon} alt={feature.title} className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm md:text-base font-semibold text-black">{feature.title}</h3>
                                <p className="text-xs md:text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BottomBanner
