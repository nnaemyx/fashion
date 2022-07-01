import React from 'react'
import Heroimg from '../assests/hero1.png'
import Leaf from '../assests/logo-leaf-new.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className=" bg-white overflow-hidden lg:h-[34rem]">
       <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-11 xl:mt-28">
            <div className="sm:text-center lg:text-left lg:pl-12">
              <h1 className="text-3xl  font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <img src={Leaf} alt="leaf" />
                <span className="block xl:inline">Mma Inspire</span>
                <span className="block text-green-700 ">Fashion Allure</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/allproducts"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop Now
                  </Link>
                </div>
              
              </div>
            </div>
        </main>
        <div className="lg:absolute lg:mt-18 lg:right-0 lg:top-20 lg:pr-12 lg:w-1/1">
          <img
            className="h-[350px] w-[300px] pt-[-11] sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={Heroimg}
            alt=""
          />
        </div>
    </div>
  )
}

export default Hero