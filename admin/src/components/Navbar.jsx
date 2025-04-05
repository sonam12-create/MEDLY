import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {aToken,setAToken} = useContext(AdminContext)
    const navigate = useNavigate()

    const logout = () => {
         navigate('/')
         aToken && setAToken('')
         aToken && localStorage.removeItem('atoken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:pr-10 py-1 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs'>
            <img className='w-36 sm:w-16 cursor-pointer' src={assets.MEDLY} alt="" />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar