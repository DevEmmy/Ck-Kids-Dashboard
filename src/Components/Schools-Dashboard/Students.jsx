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
import { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { HiUpload } from "react-icons/hi";
import { FaUpload } from "react-icons/fa";
import UploadStudentData from "./UploadStudentData";
import { getStudents } from "@/services/request";
import { SpinnerCircular } from "spinners-react";
import ReactPaginate from "react-paginate";
import { Paginated, GetPaginatedData } from "@/AtomicComponents/Pagination";

const Students = () => {
  const [modalElement, setModalElement] = useState();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState({});
  const [trash, setTrash] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGINATION = 20;
  const [pageCount, setPageCount] = useState(0)
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  
  const fetchStudents = async () => {
    let data = await getStudents();    
    setStudents(data);
    setPageCount(Paginated(data, PAGINATION));
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();            
  }, []);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);    
    // Fetch and display data for the selected page
  };

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

            <div
              className="relative text-[#808080] font-[400] text-[20px] lg:text-[18px] ls:text-[14px] rounded-[10px] p-3 gap-[10px] flexmm bg-white cursor-pointer border "
              onClick={() => {
                sedivrop(!drop);
              }}
            >
              <p>Class</p>
              {drop ? (
                <ChevronUp size={"18px"} />
              ) : (
                <ChevronDown size={"18px"} />
              )}
              {drop && (
                <div className="absolute top-[60px] text-[14px] font-[400] left-0 z-25 border-[1px] shadow-md py-[8px] px-[4px] rounded-[12px] bg-white cflexss">
                  {Class.map((items) => {
                    return (
                      <>
                        <div className="w-[270px] flexbm py-[12px] px-[16px]">
                          <p>{items.class}</p>
                          <ChevronRight />
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div
            className="btn"
            onClick={() => {
              setModalElement(<UploadStudentData close={close} />);
              open();
            }}
          >
            Upload Student Data
            <FaUpload />
          </div>
        </div>

        <div className="w-full font-[400] text-[17px] lg:text-[15px] py-[20px] border-[1px] ls:text-[13px] rounded-[24px] text-[#808080] shadow-md bg-[#FFF]">
          <div className="w-full flexsm py-[10px] px-[20px] border-b-[1px]">
            <div className="w-[9%] flexsm gap-[15px]">
              <input type="checkbox" />
              <p>Avatar</p>
            </div>
            <div className="w-[30%] flexsm gap-[10px]">
              <p>Name</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </div>
            <div className="w-[18%] flexsm">Email</div>            
            <div className="w-[14%] flexsm">Date Joined</div>            
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
              <p>fetched</p>
              {GetPaginatedData(currentPage, PAGINATION, students).map(
                (data, index) => {
                  const inputDate = new Date(data.createdAt);

                  // Extract the individual date components
                  const year = inputDate.getFullYear() % 100; // Get the last two digits of the year
                  const month = inputDate.getMonth() + 1; // Months are 0-based, so add 1
                  const day = inputDate.getDate();

                  // Create the formatted date string
                  const formattedDate = `${day}/${
                    month < 10 ? "0" : ""
                  }${month}/${year}`;

                  return (
                    <>
                      <div
                        key={index}
                        className={`w-full flexsm py-[10px] px-[20px] cursor-pointer ${
                          (index + 1) % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"
                        }`}
                        onClick={() => {
                          setProfile(true);
                          setData(data);
                        }}
                      >
                        <div className="w-[9%] flexsm gap-[15px]">
                          <input type="checkbox" checked={data.checked} />
                          <div className="flexmm w-[24px]">
                            <img src={data.profilePicture} alt="avatar" />
                          </div>
                        </div>
                        <div className="w-[30%] flexsm">{data.fullName}</div>
                        <div className="w-[25%] flexsm">{data.email}</div>
                        <div className="w-[14%] flexsm">{formattedDate}</div>
                        <div className="w-[14%] flexsm gap-[20px]">
                          <EyeOutline size="16px" />
                          <PencilAltOutline size="16px" />
                          <TrashOutline
                            size="16px"
                            onClick={() => {
                              setTrash(true);
                              setData(data);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </>
          )}
          <br />
          <ReactPaginate
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
          />
        </div>
        <Modal
          opened={opened}
          onClose={close}
          size={"auto"}
          //   title="Add New Video"
          overlayProps={{
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : "#00AC76",
            opacity: 0.2,
            blur: 3,
          }}
          radius={"12px"}
        >
          {modalElement}
        </Modal>
      </div>
    </>
  );
};

export default Students;

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
