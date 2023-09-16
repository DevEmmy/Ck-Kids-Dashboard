import Loader from '@/AtomicComponents/Loader'
import { onBoardTeacher } from '@/services/request'
import React, { useState } from 'react'

const AddTeacher = ({close}) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const [loading, setLoading ] = useState(false)

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value })
  }

  const submit = async ()=>{
    setLoading(true)
    console.log(data)
    await onBoardTeacher(data.firstName, data.lastName, data.email)
    setLoading(false)
  }
  return (
    <form action="" method="post" className="flex flex-col gap-4">

    <div className="flex flex-col gap-2">
      <label htmlFor="firstName">First Name</label>
      <input type="text" placeholder="First name" className="input-1" name='firstName' value={data.firstName} onChange={handleChange}/>
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="firstName">Last Name</label>
      <input type="text" placeholder="Last name" className="input-1" name='lastName' value={data.lastName} onChange={handleChange}/>
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="firstName">Email</label>
      <input type="text" placeholder="Email" className="input-1" name='email' value={data.emaiName} onChange={handleChange}/>
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="firstName">Class Designation</label>
      <select name="class" id="" className="input-1">
        <option value="1a">Class 1a</option>
        <option value="1a">Class 1a</option>
        <option value="1a">Class 1a</option>
        <option value="1a">Class 1a</option>
      </select>
    </div>

    <div className="flex gap-2 ">
      <div className="rounded-full py-3 px-10 bg-primary2 text-white text-[0.8em] font-[700] cursor-pointer flex justify-center items-center gap-2" onClick={submit}>
        {
          loading ? <Loader /> : "Create"
        }
      </div>

      <div onClick={close} className="rounded-full py-3 px-10 text-[0.8em] font-[700] cursor-pointer flex justify-center items-center bg-transparent text-primary2 border-2 border-primary2">
        Cancel
      </div>
    </div>
  </form>
  )
}

export default AddTeacher