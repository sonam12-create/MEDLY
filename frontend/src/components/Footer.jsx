import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
              <img className='mb-5 w-40' src={assets.MEDLY} alt="" />
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cupiditate doloremque cum eos dolorem consequatur, minima laborum soluta pariatur laboriosam atque, assumenda repellat esse. Incidunt doloremque itaque quidem dolorem at error adipisci ipsum non.</p>
            </div>

            {/* middle */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 tet-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* right */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 tet-gray-600'>
                    <li>+1-234-567-890</li>
                    <li>medly@gmail.com</li>
                </ul>
            </div>

        </div>

        {/* copyright */}
        <div>
            {/* <hr /> */}
            <p className='py-5 text-sm text-center'>&copy; medly - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer