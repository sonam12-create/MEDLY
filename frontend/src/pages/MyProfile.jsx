import React from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = React.useState({
    name: "Neeta Sharma",
    image: assets.profile_pic,
    email: 'Hxu6o@example.com',
    phone: '1234567890',
    address: '123 Main Street, jaipur, Rajasthan',
    gender: 'Female',
    dob: '11/09/1990',
  })

  const [isEdit, setIsEdit] = React.useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} /> : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone No.:</p>
          {
            isEdit ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ? <input className='bg-gray-50' type="text" value={userData.address} onChange={e => setUserData(prev => ({ ...prev, address: e.target.value }))} /> : <p className='text-gray-500'>{userData.address}</p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              : <p className='text-gray-600'>{userData.gender}</p>
          }
          <p className='font-medium'>Date of Birth:</p>
          {
            isEdit ?
              <input className='bg-gray-100 max-w-28' type="date" value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
              : <p className='text-gray-600'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit ?
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary cursor-pointer hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary cursor-pointer hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile