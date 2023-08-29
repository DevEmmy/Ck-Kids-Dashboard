import { useState } from "react";
import { XCircleOutline } from "heroicons-react";

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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
