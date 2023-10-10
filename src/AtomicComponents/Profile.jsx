import { useState, useEffect } from "react";
import { XCircleOutline } from "heroicons-react";
import FileBase64 from "react-file-base64";
import Loader from "./Loader";
import { FaUser } from "react-icons/fa";
import { setRevalidateHeaders } from "next/dist/server/send-payload";

const Profile = ({ setProfile, student }) => {
  const [changing, setChanging] = useState(false);
  const [valid, setValid] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
    profilePicture: student.profilePicture,
    fullName: student.fullName,
    userName: student.fullName,
  });

  useEffect(() => {
    if (
      studentDetails["fullName"].trim().length > 0 &&
      studentDetails["userName"].trim().length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);  

  const upload = (file) => {
    if (
      file.type === "image/png" ||
      file.type === "image/svg" ||
      file.type === "image/jpg" ||
      file.type === "image/jpeg" ||
      file.type === "image/jfif"
    ) {
      setStudentDetails({ ...studentDetails, profilePicture: file.base64 });
      setFileError(false);
    } else {
      setFileError(true);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudentDetails({ ...studentDetails, [name]: value });
    setChanging(!changing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
    }
    // ENDPOINT TO UPDATE STUDENT DATA
  };
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
            <div className="relative profile w-[120px] object-contain rounded-md text-white cursor-pointer">
              <img
                src={studentDetails.profilePicture}
                alt="profilePicture"
                className="rounded-md w-full h-[100px] object-cover"
              />
              <div className="absolute left-0 top-[46%] opacity-0">
                <FileBase64
                  name="coursePhoto"
                  defaultValue={studentDetails["profilePicture"]}
                  multiple={false}
                  onDone={(base64) => {
                    upload(base64);
                  }}
                />
              </div>
            </div>

            <div>
              <p className="text-[1em] font-[600]">Upload Photo</p>
              <p className="text-[0.8em] text-gray-500">
                Maximum of 1MB, JPG, GIF, or PNG
              </p>
            </div>
          </div>
          {fileError && (
            <p className="flexmm text-[12px] text-red-700">
              ensure you uploaded an image of size not more than 1MB
            </p>
          )}

          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              className=" px-3 py-2 w-full outline-none rounded-md border border-gray-500"
              placeholder="Full Name"
              name="fullName"
              value={studentDetails["fullName"]}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <p>User Name</p>
            <input
              type="text"
              className=" px-3 py-2 w-full outline-none rounded-md border border-gray-500"
              placeholder="User Name"
              name="userName"
              value={studentDetails["userName"]}
              onChange={handleChange}
            />
          </div>

          <p className="text-gray-500 text-[0.6em]">
            On the Curious Kidz platform, your name will be displayed exactly as
            you enter it here. This is how both your friends and coaches will
            identify and recognize you throughout your exciting learning
            journey.
          </p>

          <div className="buttons flex gap-3 justify-end items-end place-content-end font-[500]">
            <button
              className="rounded-full px-10 py-3 text-primary2 border-primary2 border-2"
              onClick={() => {
                setProfile(false);
              }}
            >
              Cancel
            </button>

            <button
              className="rounded-full px-10 py-3 bg-primary2 border-2 border-primary2 text-white"
              onClick={handleSubmit}
            >
              {loading ? <Loader /> : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
