import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = React.useState(false);
    const [token, setToken] = React.useState(true);

  return (
    <div className='flex justify-between items-center text-sm mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='w-20 cursor-pointer' src={assets.MEDLY} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/cprimary'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                : <button onClick={()=>navigate('/login')} className='cursor-pointer bg-primary text-white py-3 px-8 rounded-full font-light hidden md:block'>Create account</button>

            }
            <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />

            {/* ------Mobile Menu------ */}
            <div className={` ${showMenu ? 'fixed w-full' : 'w-0 h-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-18' src={assets.MEDLY} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='py-2 px-4 rounded inline-block'>Home</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='py-2 px-4 rounded inline-block'>All Doctors</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='py-2 px-4 rounded inline-block'>About</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='py-2 px-4 rounded inline-block'>Contact</p></NavLink>

                </ul>
            </div>
              
        </div>
    </div>
  )
}

export default Navbar