import {
  SearchOutline,
  EyeOutline,
  PencilAltOutline,
  TrashOutline,
  XCircleOutline,
} from "heroicons-react";
import { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import ReactPaginate from "react-paginate";
import { Paginated, GetPaginatedData } from "@/AtomicComponents/Pagination";
import { getStudents, deleteStudent } from "@/services/request";
import { SpinnerCircular } from "spinners-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";

const Students = ({ school, isTeacher }) => {
  const [profile, setProfile] = useState(false);
  const [data, setData] = useState({});
  const [trash, setTrash] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGINATION = 20;
  const [pageCount, setPageCount] = useState(0);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [modalElement, setModalElement] = useState();

  const fetchStudents = async () => {
    let data = await getStudents();
    console.log(data);
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
    console.log(selectedPage);
    // Fetch and display data for the selected page
  };

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
        <div className="w-full flexes">
          <div className="flexmm gap-[10px] rounded-[8px] border-[1px] p-[16px] w-[526px] bg-white">
            <SearchOutline size="16px" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border-none outline-none"
            />
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
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </div>
            <div className="w-[25%] flexsm">Email</div>
            <div className="w-[14%] flexsm">Date Joined</div>
            <div className="w-[14%] flexsm">Age Group</div>
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
                      >
                        <div className="w-[9%] flexsm gap-[15px]">
                          <input type="checkbox" checked={data.checked} />
                          <div className="flexmm w-[24px]">
                            <img src={data.profilePicture} alt="avatar" />
                          </div>
                        </div>
                        <div
                          className="w-[30%] flexsm"
                          onClick={() => {
                            setProfile(true);
                            setData(data);
                          }}
                        >
                          {data.fullName}
                        </div>
                        <div
                          className="w-[25%] flexsm"
                          onClick={() => {
                            setProfile(true);
                            setData(data);
                          }}
                        >
                          {data.email}
                        </div>
                        <div
                          className="w-[14%] flexsm"
                          onClick={() => {
                            setProfile(true);
                            setData(data);
                          }}
                        >
                          {formattedDate}
                        </div>
                        <div
                          className="w-[14%] flexsm"
                          onClick={() => {
                            setProfile(true);
                            setData(data);
                          }}
                        >{`${data.minAge} - ${data.maxAge}`}</div>
                        <div className="w-[14%] flexsm gap-[20px]">                          
                          <PencilAltOutline size="16px" />
                          <TrashOutline
                            size="16px"
                            onClick={() => {
                              setModalElement(
                                <Trash
                                  close={close}
                                  data={data}
                                  fetchStudents={fetchStudents}
                                  school={school}
                                  isTeacher={isTeacher}
                                />
                              );
                              open();
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

const Trash = ({ close, data, school, fetchStudents, isTeacher }) => {
  const deleteAStudent = async () => {
    if (isTeacher) {
      close();
    } else {
      await deleteStudent(data._id);
      close();
      fetchStudents();
    }
  };
  return (
    <>
      <div className="w-[400px] cflexss gap-[20px] px-[14px] pb-[14px] rounded-[12px] flex-shrink">
        <div className="w-[48px] h-[48px] rounded-full">
          <img src="/alert.svg" alt="alert" />
        </div>
        <div className="w-full flexss text-[18px] text-[#222] lg:text-[16px] font-[400]">
          <p>
            {school?.fullName} You are about to delete {data.fullName} profile
          </p>
        </div>
        <div className="flexss gap-[12px]">
          <div className="w-[40px] h-[40px] rounded-full">
            <img src="/avatar.svg" alt="teacher image" />
          </div>
          <div className="cflexss font-[400] text-[14px]">
            <p className="font-[600] text-[#333]">Savannah Nguyen</p>
            <p className="text-[#AAA]">savannah@gmail.com</p>
          </div>
        </div>
        <div className="w-full flexbm sm:flex-wrap">
          <div className="flexmm gap-[10px] font-[600] text-[14px]">
            <input type="checkbox" />
            <p>Don't ask again</p>
          </div>
          <div className="flexmm gap-[20px] font-[600] text-[16px] lg:text-[14px]">
            <button
              className="py-[10px] px-[18px] rounded-[8px] text-[#808080] border-[1px]"
              onClick={() => {
                close();
              }}
            >
              Deny
            </button>
            <button
              className="py-[10px] px-[18px] text-[white] bg-[#F00] rounded-[8px] border-none"
              onClick={deleteAStudent}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
