import {
    SearchOutline,
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    EyeOutline,
    PencilAltOutline,
    TrashOutline,
    XCircleOutline,
    ChevronUp,
    ChevronDown
  } from "heroicons-react";
  import { useState } from "react";
  import StudentProfile from "./StudentProfile";
import { HiUpload } from "react-icons/hi";
import { FaPlus, FaUpload } from "react-icons/fa";
import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import AddTeacher from "./AddTeacher";
import AddSchool from "./AddSchool";
  
  const Schools = () => {
    const [profile, setProfile] = useState(false);
    const [data, setData] = useState({});
    const [trash, setTrash] = useState(false);

    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();

    const StudentData = [
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: true,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
      {
        checked: false,
        avatar: "teacherAvatar",
        name: "Emeka Eze",
        email: "emekaeze@gmail.com",
        username: "emekaeze",
        dateJoined: "20/10/2023",
        class: "JSS 1D",
      },
    ];

    const Class = [
        {
          class: "JSS 1D",
        },
        {
          class: "JSS 1E",
        },
        {
          class: "JSS 1E",
        },
        {
          class: "JSS 1E",
        },
        {
          class: "JSS 1E",
        },
      ];

      const [drop, sedivrop] = useState(false);
    return (
      <>
        <div className="relative w-full p-[30px] cflexss gap-[28px]">
          {profile && trash !== true && (
            <StudentProfile
              profile={profile}
              setProfile={setProfile}
              data={data}            
            />
          )}
          {trash && <Trash setTrash={setTrash} data={data} setProfile={setProfile}/>}

          <div className="w-full flex justify-between">

            <div className="flex gap-3 items-center">
                <div className="flexmm gap-[10px] rounded-[8px] border-[1px] p-3 w-[526px] bg-white">
                    <SearchOutline size="16px" color="#808080"/>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border-none outline-none"
                    />
                </div>
            </div>
            

            <div className="btn " onClick={open}>
                Create School Profile
                <FaPlus />
            </div>
          </div>
          
        </div>

        <Modal
        opened={opened}
        onClose={close}
        size={"md"}
        title="Add Teacher"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : "#00AC76",
          opacity: 0.2,
          blur: 3,
        }}
      >
       <AddSchool />
      </Modal>
      </>
    );
  };
  
  export default Schools;
  
  const Trash = ({ setTrash, data, setProfile }) => {
    const [remove, setRemove] = useState(false);
    return (
      <>
        <div className="fixed w-full h-full top-0 left-0 bg-secondary1 flexmm">
          <div className="relative cflexmm gap-[30px] w-[580px] h-[341px] bg-[#FAFAFA] border-[1px] rounded-[12px] flex-shrink m-[20px] shadow-md">
            {remove ? (
              <>
                <div className="w-[286px] text-center font-[600] text-[24px]">
                  <p>Wait for approval from the principal</p>
                </div>
                <div className="absolute top-[8%] right-[8%] flexmm cursor-pointer" onClick={()=>{
                  setTrash(false)               
                  setProfile(false) 
                }}>
                  <XCircleOutline size="16px" />
                </div>
              </>
            ) : (
              <>
                <div className="w-full cflexmm text-[24px] lg:text-[20px] font-[400]">
                  <p className="font-[800]">Are You Sure?</p>
                  <p>You are about to delete</p>
                  <p>
                    <span className="text-primary2 font-[700]">{data.name}</span>{" "}
                    profile
                  </p>
                </div>
                <div className="w-full flexmm gap-[20px] font-[600] text-[19px] lg:text-[17px]">
                  <button
                    className="py-[18px] px-[60px] text-[white] bg-[#F00] rounded-full border-none"
                    onClick={() => {
                      setRemove(true);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="py-[18px] px-[60px] rounded-full text-[#808080] border-[1px]"
                    onClick={() => {
                      setTrash(false);
                      setProfile(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  };
  