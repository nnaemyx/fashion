import React from 'react'
import {Link} from 'react-router-dom'

const Getoff = () => {
  return (
    <div className='w-auto bg-gray-200 h-26 lg:h-36'>
        <div className='mt-11 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 lg:p-4 xl:gap-x-8 p-4'>
            <div>
                <h1 className='text-3xl text-center font-bold'>Get 25% Off On Your First Purchase!</h1>
            </div>

            <div>
                <div className="text-center p-2">
                    <Link
                        to="/allproducts"
                        className="justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-gray-700"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getoff