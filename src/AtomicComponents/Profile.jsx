import { useState } from "react";
import { XCircleOutline } from "heroicons-react";
import { FaUser } from "react-icons/fa";

const Profile = ({ setProfile }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flexmm bg-secondary1">
        <div className="bg-white shadow-md cflexss gap-[1em] w-[30em] flex-shrink p-[2em] rounded-xl text-[0.9rem]">

          <div className="w-full flexbm">
            <h2 className="font-[900] text-[1.1rem]">Edit basic info</h2>
            <XCircleOutline
              style={{ cursor: "pointer" }}
              onClick={() => {
                setProfile(false);
              }}
              color="gray"
            />
          </div>

          <div className="flex gap-3 items-center">
            <div className="profile p-5 bg-primary2 rounded-md text-white">
                <FaUser color="white"/>
            </div>

            <div>
              <p className="text-[1em] font-[600]">Upload Photo</p>
              <p className="text-[0.8em] text-gray-500">Maximum of 1MB, JPG, GIF, or PNG</p>
            </div>
          </div>

          <div className="w-full">
            <p>Full Name</p>
            <input type="text" className=" px-3 py-2 w-full rounded-md border border-gray-500" placeholder="Full Name"/>
          </div>

          <div className="w-full">
            <p>User Name</p>
            <input type="text" className=" px-3 py-2 w-full border rounded-md border-gray-500" placeholder="User Name"/>
          </div>

          <p className="text-gray-500 text-[0.6em]">
            On the Curious Kidz platform, your name will be displayed exactly as you enter it here. This is how both your friends and coaches will identify and recognize you throughout your exciting learning journey.
          </p>

          <div className="buttons flex gap-3 justify-end items-end place-content-end font-[500]">
            <button className="rounded-full px-10 py-3 text-primary2 border-primary2 border-2">
              Cancel
            </button>

            <button className="rounded-full px-10 py-3 bg-primary2 border-2 border-primary2 text-white">
              Save
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
