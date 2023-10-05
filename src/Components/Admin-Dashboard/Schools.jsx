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
  ChevronDown,
} from "heroicons-react";
import { useState } from "react";
import StudentProfile from "./StudentProfile";
import { HiUpload } from "react-icons/hi";
import { FaPlus, FaUpload } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import AddSchool from "./AddSchool";
import Students from "./Students";
import Teachers from "./Teachers";

const Schools = ({
  setViewSchool,
  mainView,
  setMainView,
  setViewStudents,
  setSchoolName,
}) => {
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState({});
  const [trash, setTrash] = useState(false);
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const [drop, sedivrop] = useState(false);
  return (
    <>
      {mainView === "schools" && (
        <div className="relative w-full p-[30px] cflexss gap-[28px]">
          {profile && trash !== true && (
            <StudentProfile
              profile={profile}
              setProfile={setProfile}
              data={data}
            />
          )}
          {trash && (
            <Trash setTrash={setTrash} data={data} setProfile={setProfile} />
          )}

          <div className="w-full flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="flexmm gap-[10px] rounded-[8px] border-[1px] p-3 w-[526px] bg-white">
                <SearchOutline size="16px" color="#808080" />
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
          <div className="w-full font-[400] text-[17px] lg:text-[15px] py-[20px] border-[1px] ls:text-[13px] rounded-[24px] text-[#808080] shadow-md bg-[#FFF]">
            <div className="w-full cflexss gap-[20px] bg-[#FFF]">
              <div className="w-full font-[400] text-[17px] lg:text-[15px] pb-[20px] ls:text-[13px] rounded-[24px] text-[#808080]">
                <div className="w-full flexsm py-[10px] px-[20px] border-b-[1px]">
                  <div className="w-[30%] flexsm gap-[15px]">
                    <input type="checkbox" />
                    <p>School Name</p>
                  </div>
                  <div className="w-[27%] flexsm">Official Email</div>
                  <div className="w-[14%] flexsm">Teachers</div>
                  <div className="w-[14%] flexsm">Students</div>
                  <div className="w-[14%] flexsm">Classes</div>
                  <div className="w-[14%] flexsm">Sets</div>
                  <div className="w-[14%] flexsm">Actions</div>
                </div>
                {loading ? (
                  <>
                    <div className="w-full flexmm py-[10px]">
                      <SpinnerCircular
                        color="#00AC76"
                        className="mr-4"
                        secondaryColor={"#eeeeee"}
                        size={50}
                        thickness={150}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="w-full flexsm py-[10px] px-[20px] cursor-pointer"
                      onClick={() => {
                        setViewSchool(true);
                        setMainView("teachers");
                        setSchoolName("Harmony High School");
                      }}
                    >
                      <div className="w-[30%] flexsm gap-[15px]">
                        <input type="checkbox" />
                        <p>Harmony High School</p>
                      </div>
                      <div className="w-[27%] flexsm">
                        info@harmonyhighschool.edu
                      </div>
                      <div className="w-[14%] flexsm">20</div>
                      <div className="w-[14%] flexsm">500</div>
                      <div className="w-[14%] flexsm">20</div>
                      <div className="w-[14%] flexsm">8</div>
                      <div className="w-[14%] flexsm gap-[15px]">
                        <EyeOutline size="16px" />
                        <PencilAltOutline size="16px" />
                        <TrashOutline
                          size="16px"
                          // onClick={() => {
                          //   setModalElement(
                          //     <Trash
                          //       close={close}
                          //       data={data}
                          //       setProfile={setProfile}
                          //     />
                          //   );
                          //   open();
                          // }}
                        />
                      </div>
                    </div>

                    <div
                      className="w-full flexsm py-[10px] px-[20px] cursor-pointer"
                      onClick={() => {
                        setViewSchool(true);
                        setMainView("teachers");
                        setSchoolName("Crestview Secondary Academy");
                      }}
                    >
                      <div className="w-[30%] flexsm gap-[15px]">
                        <input type="checkbox" />
                        <p>Crestview Secondary Academy</p>
                      </div>
                      <div className="w-[27%] flexsm">
                        contact@creatviewsecondary.edu
                      </div>
                      <div className="w-[14%] flexsm">15</div>
                      <div className="w-[14%] flexsm">350</div>
                      <div className="w-[14%] flexsm">8</div>
                      <div className="w-[14%] flexsm">5</div>
                      <div className="w-[14%] flexsm gap-[15px]">
                        <EyeOutline size="16px" />
                        <PencilAltOutline size="16px" />
                        <TrashOutline
                          size="16px"
                          // onClick={() => {
                          //   setModalElement(
                          //     <Trash
                          //       close={close}
                          //       data={data}
                          //       setProfile={setProfile}
                          //     />
                          //   );
                          //   open();
                          // }}
                        />
                      </div>
                    </div>
                  </>
                )}
                <br />
                {/* <ReactPaginate
                previousLabel={"< Previous"}
                nextLabel={"Next >"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={
                  "w-full text-[14px] lg:text-[12px] px-[20px] pt-[20px] border-t-[1px] flexbm"
                }
                activeClassName={"active"}
              /> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {mainView === "teachers" && (
        <Teachers setViewStudents={setViewStudents} setMainView={setMainView}/>
      )}
      {mainView === "students" && <Students />}

      <Modal
        opened={opened}
        onClose={close}
        size={"md"}
        title="Add Teacher"
        overlayProps={{
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[9] : "#00AC76",
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
              <div
                className="absolute top-[8%] right-[8%] flexmm cursor-pointer"
                onClick={() => {
                  setTrash(false);
                  setProfile(false);
                }}
              >
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
