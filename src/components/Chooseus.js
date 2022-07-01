import React from 'react'

const Chooseus = () => {
  return (
    <div className='bg-[#2F2F2F] w-auto  max-w-2xl lg:p-11 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <p className='text-center text-green-500 font-semibold  text-xl tracking-[1rem] mt-[-3rem] lg:mt-4'>OUR <br/>ADVANTAGE</p>
        <h1 className='text-center text-4xl font-bold text-white pt-6 leading-10'>WHAT MAKES <br/>US DIFFERENT</h1>
        <div className='mt-11 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 p-2'>
            <div>
                <h1 className='text-white font-semibold text-5xl'>01</h1>
                <h2 className='font-bold text-white text-xl mt-4'>GLOCAL BRAND</h2>
                <hr className='w-[30%] mt-4 mb-4 border-green-500'/>
                <p className='text-white'>Our production process reflects global standards while integrating local considerations
                    ;thus making us a <i>glocal</i> brand. Our quality outfits satisfy local demands
                    and compete favourably with global fashion brands.
                </p>
            </div>
            <div>
                <h1 className='text-white font-semibold text-5xl'>02</h1>
                <h2 className='font-bold text-white text-xl mt-4'>TIMELY DELIVERY</h2>
                <hr className='w-[30%] mt-4 mb-4 border-green-500'/>
                <p className='text-white'>Our reputation for delivering neatly sewn and well tailored
                    garments on timee and on budget has continued to win us loyal
                    customers
                </p>
            </div>
            <div>
                <h1 className='text-white font-semibold text-5xl'>03</h1>
                <h2 className='font-bold text-white text-xl mt-4'>FASHION ENTREPRENEURSHIP</h2>
                <hr className='w-[30%] mt-4 mb-4 border-green-500'/>
                <p className='text-white'>We have a well-structured training system designed to empower
                    young people and mentor them in estblishing and building their own 
                    businesses.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Chooseus