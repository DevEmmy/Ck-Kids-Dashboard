import {
  ChevronUp,
  ChevronDown,
  ChevronRight,
  TrashOutline,
  PencilAltOutline,
} from "heroicons-react";
import { useEffect, useState } from "react";
import CreateNewBadge from "./CreateNewBadge";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { GetAllBadges } from "@/services/request";
import { SpinnerCircular } from "spinners-react";
import { getFilteredCourses, deleteBadge } from "@/services/request";
import ReactPaginate from "react-paginate";
import MasteryStage from "./MasteryStage";
import { Paginated, GetPaginatedData } from "@/AtomicComponents/Pagination";
import EditBadge from "./EditBadge";

const Gamification = ({ type = "admin" }) => {
  const [drop, setDrop] = useState(false);
  const [ageRange, setAgeRange] = useState(null);
  const [category, setCategory] = useState(null);
  const [badges, setBadges] = useState([]);
  const [gemPoint, setGemPoint] = useState(20);
  const [collectionGemPoint, setCollectionGemPoint] = useState(20);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGINATION = 20;
  const [pageCount, setPageCount] = useState(0);  

  const fetchData = async () => {
    setLoading(true);
    let data = await GetAllBadges();
    console.log(data);
    setBadges(data);
    setPageCount(Paginated(data, PAGINATION));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    // Fetch and display data for the selected page
  };

  const filterBy = async (ageRange, category) => {
    setLoading(true);
    let data = await getFilteredCourses(ageRange, category);
    console.log(data);

    setAgeRange(null);
    setCategory(null);
    setVideos(data);
    setLoading(false);
  };

  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const Appear = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  const Categories = [
    {
      category: "Film & Animation",
    },
    {
      category: "Autos & Vehicles",
    },
    {
      category: "Music",
    },
    {
      category: "Pets & Animals",
    },
    {
      category: "Sports",
    },
    {
      category: "Travel & Events",
    },
    {
      category: "Gaming",
    },
    {
      category: "People & Blogs",
    },
    {
      category: "Comedy",
    },
    {
      category: "Entertainment",
    },
    {
      category: "News & Politics",
    },
    {
      category: "How to & Style",
    },
    {
      category: "Education",
    },
    {
      category: "Science & Technology",
    },
    {
      category: "Nonprofits & Activism",
    },
  ];

  const Ages = [
    {
      age: "6 - 9",
    },
    {
      age: "10 - 14",
    },
    {
      age: "15 - 18",
    },
  ];

  const Badges = [
    {
      title: "Quiz Whiz",
      format: (
        <div className="w-[100px] h-[112px] rounded-[8px] pb-[8px] text-white bg-[#00734F]">
          <div className="bg-primary2 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
            <div className="flexmm w-[50px]">
              <img src="/quizWhiz.svg" alt="quizwhiz" />
            </div>
            <p>Quiz Whiz</p>
          </div>
        </div>
      ),
    },
    {
      title: "Subject Hero",
      format: (
        <div className="w-[100px] h-[112px] rounded-[8px] pb-[8px] text-white bg-[#A37414]">
          <div className="bg-primary1 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
            <div className="flexmm w-[50px]">
              <img src="/subjectHero.svg" alt="subjecthero" />
            </div>
            <p>Subject Hero</p>
          </div>
        </div>
      ),
    },
    {
      title: "Course Champion",
      format: (
        <div className="w-[100px] h-[112px] rounded-[8px] pb-[8px] text-white bg-[#5E4589]">
          <div className="bg-primary3 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
            <div className="flexmm w-[50px]">
              <img src="/champion.svg" alt="quizwhiz" />
            </div>
            <p>Champion</p>
          </div>
        </div>
      ),
    },
    {
      title: "Helping Hand",
      format: (
        <div className="w-[100px] h-[112px] rounded-[8px] pb-[8px] text-white bg-[#00734F]">
          <div className="bg-primary2 w-full pt-[10px] rounded-t-[8px] h-full cflexmm gap-[15px]">
            <div className="flexmm w-[50px]">
              <img src="/helpingHand.svg" alt="quizwhiz" />
            </div>
            <p>Helping Hand</p>
          </div>
        </div>
      ),
    },
  ];

  const [modalElement, setModalElement] = useState();

  return (
    <>
      <div className="w-full p-[30px] cflexss gap-[25px] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
        {type === "admin" && (
          <>
            <div className="w-full flexsm">
              <p className="font-[600] text-[24px] lg:text-[22px] ls:text-[20px]">
                Learning Gem Settings
              </p>
            </div>
            <div className="w-full h-full flexbs gap-[30px] border-[1px] sm:flex-wrap rounded-[24px] bg-[#FFF] shadow-md py-[30px] px-[20px]">
              <div className="w-[526px] flex-grow flex-shrink cflexss gap-[12px]">
                <p>Maximum Gem for a video</p>
                <select
                  className="w-full px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
                  name="requirement"
                  onChange={(e) => {
                    setGemPoint(e.target.value);
                  }}
                >
                  <option>{gemPoint}</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                </select>
              </div>

              <div className="w-[526px] flex-grow flex-shrink cflexss gap-[12px]">
                <p>Maximum Gem for a video collection</p>
                <select
                  className="w-full px-[10px] py-[20px] border-[1px] rounded-[8px] outline-none cursor-pointer"
                  name="requirement"
                  onChange={(e) => {
                    setCollectionGemPoint(e.target.value);
                  }}
                >
                  <option>{collectionGemPoint}</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div className="w-full flexbm">
          <p className="font-[600] text-[24px] lg:text-[22px] ls:text-[20px]">
            Victory Badge Settings
          </p>
          <button
            className="relative btn px-[52px] flexmm font-[600] gap-[10px] py-[22px] lg:py-[18px] ls:py-[15px] rounded-full bg-primary2 cursor-pointer text-[#FFF] border-none"
            onClick={() => {
              setDrop(false);
              setModalElement(
                <CreateNewBadge
                  close={close}
                  fetchData={fetchData}
                  gemPoint={gemPoint}
                  collectionGemPoint={collectionGemPoint}
                />
              );
              open();
            }}
          >
            <p>Create new badge</p>
            <FaPlus size="10px" />
          </button>
        </div>

        <div className="w-full h-full cflexss gap-[30px] border-[1px] rounded-[24px] bg-[#FFF] shadow-md py-[30px] px-[20px]">
          <div className="w-full flexsm gap-[25px] text-[#AAA]">
            <div
              className="relative font-[400] text-[20px] lg:text-[18px] ls:text-[16px] border-[1px] rounded-[8px] p-[15px] gap-[10px] flexmm bg-white cursor-pointer"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <p>Ages</p>
              {drop ? <ChevronDown /> : <ChevronUp />}
              {drop && (
                <div className="absolute top-[70px] w-[150px] text-[17px] font-[400] left-0 z-25 border-[1px] shadow-md py-[8px] px-[4px] rounded-[12px] bg-white cflexss">
                  {Ages.map((items, i) => {
                    return (
                      <>
                        <div
                          key={i}
                          className="flexbm w-full px-[16px] py-[12px] rounded-xl hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400"
                          onClick={() => {
                            setAgeRange(items.age);
                            filterBy(items.age, category);
                          }}
                        >
                          <p>{items.age}</p>
                          <ChevronRight />
                        </div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flexmm gap-[10px] p-[15px] border-[1px] rounded-[8px] bg-[#FFF] cursor-pointer">
              <p>Status</p>
              <ChevronUp />
            </div>
          </div>

          <div className="w-full cflexss gap-[20px] bg-[#FFF]">
            <div className="w-full font-[400] text-[17px] lg:text-[15px] pb-[20px] ls:text-[13px] rounded-[24px] text-[#808080]">
              <div className="w-full flexsm py-[10px] px-[20px] border-b-[1px]">
                <div className="w-[18%] flexsm gap-[15px]">Badge Image</div>
                <div className="w-[14%] flexsm gap-[10px]">Badge Title</div>
                <div className="w-[28%] flexsm">Description</div>
                <div className="w-[14%] flexsm">Requirement</div>
                <div className="w-[14%] flexsm">Learning Gem</div>
                <div className="w-[14%] flexsm">Age group</div>
                <div className="w-[14%] flexsm">Status</div>
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
                  {GetPaginatedData(currentPage, PAGINATION, badges)?.map(
                    (badge, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            className="w-full flexsm py-[10px] px-[20px]"
                          >
                            <div className="w-[18%] text-[12px] font-[600] flexsm gap-[15px]">
                              {Badges.map((type, i) => {
                                return (
                                  <>
                                    {type.title === badge.title && type.format}
                                  </>
                                );
                              })}
                            </div>
                            <div className="w-[14%] flexsm gap-[10px]">
                              {badge.title}
                            </div>
                            <div className="w-[28%] flexsm">
                              {badge.description}
                            </div>
                            <div className="w-[14%] flexsm">
                              {badge.numberOfVideos} Videos
                            </div>
                            <div className="w-[14%] flexsm">
                              {parseInt(badge.numberOfVideos) *
                                parseInt(badge.numberOfGems)}
                            </div>
                            <div className="w-[14%] flexsm">
                              Age {badge.minAge} - {badge.maxAge}
                            </div>
                            <div className="w-[14%] flexsm">
                              <select className="px-[8px] py-[4px] border-[1px] rounded-[4px] outline-none">
                                <option>
                                  {badge.public ? "Publish" : "Unpublish"}
                                </option>
                              </select>
                            </div>
                            <div className="w-[14%] flexsm gap-[15px]">
                              <PencilAltOutline
                                size="16px"
                                className="cursor-pointer"
                                onClick={() => {
                                  setModalElement(
                                    <EditBadge
                                      close={close}
                                      data={badge}
                                      fetchData={fetchData}
                                      gemPoint={gemPoint}
                                      collectionGemPoint={collectionGemPoint}
                                    />
                                  );
                                  open();
                                }}
                              />
                              <TrashOutline
                                size="16px"
                                className="cursor-pointer"
                                onClick={() => {
                                  setModalElement(
                                    <Trash
                                      close={close}
                                      data={badge}
                                      fetchData={fetchData}
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
                </>
              )}
            </div>
          </div>
        </div>

        {type === "admin" && (
          <>
            <MasteryStage
              gemPoint={gemPoint}
              collectionGemPoint={collectionGemPoint}
            />
          </>
        )}

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

export default Gamification;

const Trash = ({ close, data, fetchData }) => {
  const deleteABadge = async () => {
    await deleteBadge(data._id);
    close();
    fetchData();
  };
  return (
    <>
      <div className="w-[400px] cflexss gap-[20px] px-[14px] pb-[14px] rounded-[12px] flex-shrink">
        <div className="w-[48px] h-[48px] rounded-full">
          <img src="/alert.svg" alt="alert" />
        </div>
        <div className="w-full flexss text-[18px] text-[#222] lg:text-[16px] font-[400]">
          <p>Savannah You are about to delete the {data.title} badge</p>
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
              onClick={() => {
                deleteABadge();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
