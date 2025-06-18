import React from 'react'
import { CgNametag } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  return (
  <div className='bg-[#efefef] size-full flex justify-center items-center' >
    <form action="" className='bg-white w-1/2 h-2/3 flex justify-center items-center flex-col gap-4 px-[80px] py-40 rounded-2xl'>
      <div className= 'w-full  flex  justify-center items-center text-3xl font-bold'>
        <h1>Registration Form</h1>
        </div>
      <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="text"  placeholder='Enter Name'  className='w-full outline-none px-4 h-10 '/>
         <CgNametag />
      </div>

            <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="text" placeholder='Enter User Name' className='w-full outline-none px-4 h-10' />
         <CiUser />
      </div>

            <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="email"  placeholder='Enter Email'className='w-full outline-none px-4 h-10'  />
         <MdOutlineMailOutline />
      </div>

            <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="password"  placeholder='Enter Password' className='w-full outline-none px-4 h-10'  />
         <RiLockPasswordLine />
      </div>

            <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="password"  placeholder='Re-type Password' className='w-full outline-none px-4 h-10' />
         <RiLockPasswordFill />
      </div>
      <div className='bg-black text-amber-50 w-full  flex  justify-center items-center rounded-sm '>
        <button className='w-full outline-none px-4 h-10' >Click</button>
      </div>
    </form>
  </div>
  )
}

export default Register
