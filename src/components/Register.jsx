import React from 'react'

const Register = () => {
  return (
  <div className='bg-[#efefef] size-full flex justify-center items-center' >
    <form action="" className='bg-white w-1/3 h-3/4 flex justify-center items-center flex-col' >
      <div>
        <h1>Registration Form</h1>
        </div>
      <div>
         <input type="text"  placeholder='Enter Name' />
      </div>

            <div>
         <input type="text" placeholder='Enter User Name' />
      </div>

            <div>
         <input type="email"  placeholder='Enter Email' />
      </div>

            <div>
         <input type="password"  placeholder='Enter Password' />
      </div>

            <div>
         <input type="password"  placeholder='Re-type Password' />
      </div>
      <div>
        <button>Click</button>
      </div>
    </form>
  </div>
  )
}

export default Register
