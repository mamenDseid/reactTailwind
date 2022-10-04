import React from 'react'
import { brandData } from '../data/brandData'

export default function HomeScreen() {
    return (
        <div className='justify-center'>
            <h1 className="text-4xl text-center font-bold ">
                All Phone Brands
            </h1>
            <div className='grid grid-cols-4 gap-4 mx-2 mt-5 content-center'>
                {brandData.map((brand) => (
                    <div className='shadow-md'>
                        <img className=' object-fill' src={brand.bImg} />
                    </div>
                ))}
            </div>

        </div>
    )
}
