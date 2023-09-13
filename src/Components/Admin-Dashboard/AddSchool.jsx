import React from 'react'

const AddSchool = () => {
  return (
    <form action="" method="post" className="flex flex-col gap-4">

    <div className="flex flex-col gap-2">
      <label htmlFor="firstName">School Name</label>
      <input type="text" placeholder="Crestview Secondary School" className="input"/>
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="firstName">Email</label>
      <input type="text" placeholder="contact@crestview.edu" className="input"/>
    </div>

    <div className="flex gap-2 ">
      <div className="rounded-full py-3 px-10 bg-primary2 text-white text-[0.8em] font-[700] cursor-pointer flex justify-center items-center gap-2">
        Create
      </div>

      <div className="rounded-full py-3 px-10 text-[0.8em] font-[700] cursor-pointer flex justify-center items-center bg-transparent text-primary2 border-2 border-primary2">
        Cancel
      </div>
    </div>
  </form>
  )
}

export default AddSchool