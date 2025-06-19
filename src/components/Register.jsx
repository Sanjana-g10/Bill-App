import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  let [formData, setFormData] =useState({
    userName:"",
    password:"",
    name:"",
    email:""
  })

  let handelChange=e=>{
    let {name,value}=e.target
    setFormData((preVal)=>({...preVal,[name]:value}))
  }

  let handelSubmit=e=>{
    e.preventDefault()
    console.log(formData);
    }


  return (
  <div className='bg-[#efefef] size-full flex justify-center items-center' >
    <form action="" className='bg-white w-1/2 h-[90%] flex justify-center items-center flex-col gap-8 px-[80px] py-40 rounded-2xl max-sm:w-[90%]	' onSubmit={handelSubmit}>
      <div className= 'w-full  flex  justify-center items-center text-3xl font-bold'>
        <h1>Registration Form</h1>
        </div>
      <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="text" name='name'  placeholder='Enter Name'  className='w-full outline-none px-4 h-10 ' 
         onChange={handelChange}/>
         <CgNametag />
      </div>

            <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="text"name='username' placeholder='Enter User Name' className='w-full outline-none px-4 h-10' onChange={handelChange}/>
         <CiUser />
      </div>

            <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="email" name='email' placeholder='Enter Email'className='w-full outline-none px-4 h-10'  onChange={handelChange}/>
         <MdOutlineMailOutline />
      </div>

            <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
         <input type="password"  name='password' placeholder='Enter Password' className='w-full outline-none px-4 h-10'  onChange={handelChange}/>
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
