import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { FaSellsy } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Features = () => {
  return (
    <div className='bg-black h-[250px] lg:p-11 container'>
        <div className='flex flex-wrap gap-4 ml-[50px] mr-8 justify-between lg:justify-center lg:gap-[150px]'>
            <div className='border-solid shadow-md shadow-green-600 mt-4 p-4 bg-black'>
                <MdLocalShipping size={30}className='text-green-700'/>
                <h3 className='text-sm text-white'>Affordable <br/>shipping</h3>
            </div>
            <div className='border-solid shadow-md shadow-green-600 mt-4 p-4'>
                <BsFillPersonLinesFill size={30} className='text-green-700'/>
                <h3 className='text-sm text-white'>Online Order</h3>
            </div>
            <div className='border-solid shadow-md shadow-green-600 mt-4 p-4'>
                <FaSellsy size={30} className='text-green-700'/>
                <h3 className='text-sm text-white'>Happy Sell</h3>
            </div>
            <div className='border-solid shadow-md shadow-green-600 mt-4 p-4'>
                <BiSupport size={30} className='text-green-700'/>
                <h3 className='text-sm text-white'>24/7 Support</h3>
            </div>
        </div>
    </div>
  )
}

export default Features