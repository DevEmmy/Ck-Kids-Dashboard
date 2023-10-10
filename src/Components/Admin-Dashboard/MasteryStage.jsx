import { TrashOutline, PencilAltOutline } from "heroicons-react";
import { useEffect, useState } from "react";
import CreateNewStage from "./CreateNewStage";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { FaPlus } from "react-icons/fa";
import { GetAllBadges } from "@/services/request";
import { SpinnerCircular } from "spinners-react";
import { getFilteredCourses } from "@/services/request";
import ReactPaginate from "react-paginate";
import { Paginated, GetPaginatedData } from "@/AtomicComponents/Pagination";

const MasteryStage = ({gemPoint, collectionGemPoint}) => {
  const [drop, setDrop] = useState(false);
  const [stages, setStages] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const PAGINATION = 20;
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    let data = await GetAllBadges();
    console.log(data);
    setStages(data);
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
        <div className="w-full flexbm">
          <p className="font-[600] text-[24px] lg:text-[22px] ls:text-[20px]">
            Mastery Stage Settings
          </p>
          <button
            className="relative btn px-[52px] flexmm font-[600] gap-[10px] py-[22px] lg:py-[18px] ls:py-[15px] rounded-full bg-primary2 cursor-pointer text-[#FFF] border-none"
            onClick={() => {
              setDrop(false);
              setModalElement(
                <CreateNewStage
                  close={close}
                  fetchData={fetchData}
                  gemPoint={gemPoint}
                  collectionGemPoint={collectionGemPoint}
                />
              );
              open();
            }}
          >
            <p>Create new stages</p>
            <FaPlus size="10px" />
          </button>
        </div>

        <div className="w-full h-full cflexss gap-[30px] border-[1px] rounded-[24px] bg-[#FFF] shadow-md py-[30px] px-[20px]">
          <div className="w-full cflexss gap-[20px] bg-[#FFF]">
            <div className="w-full font-[400] text-[17px] lg:text-[15px] pb-[20px] ls:text-[13px] rounded-[24px] text-[#808080]">
              <div className="w-full flexsm py-[10px] px-[20px] border-b-[1px]">
                <div className="w-[18%] flexsm gap-[15px]">Trophy</div>
                <div className="w-[17%] flexsm gap-[10px]">Stage Name</div>
                <div className="w-[25%] flexsm">Description</div>
                <div className="w-[17%] flexsm">Requirement</div>
                <div className="w-[17%] flexsm">Learning Gem</div>
                <div className="w-[17%] flexsm">Badges</div>
                <div className="w-[17%] flexsm">Status</div>
                <div className="w-[17%] flexsm">Actions</div>
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
                  <div className="w-full flexsm py-[10px] px-[20px]">
                    <div className="w-[18%] text-[12px] font-[600] flexsm gap-[15px]">
                      <img
                        src="/masteryLevel/mst1.png"
                        className="w-[70%]"
                        alt="trophy"
                      />
                    </div>
                    <div className="w-[17%] flexsm gap-[10px]">
                      Explorer Stage
                    </div>
                    <div className="w-[25%] flexsm">
                      This is the starting level for all kids when they join the
                      platform.
                    </div>
                    <div className="w-[17%] flexsm">15 Videos</div>
                    <div className="w-[17%] flexsm">60</div>
                    <div className="w-[17%] flexsm">5</div>
                    <div className="w-[17%] flexsm">
                      <select className="px-[8px] py-[4px] border-[1px] rounded-[4px] outline-none">
                        <option>Publish</option>
                      </select>
                    </div>
                    <div className="w-[17%] flexsm gap-[15px]">
                      <PencilAltOutline size="16px" />
                      <TrashOutline size="16px" />
                    </div>
                  </div>
                  {/* {GetPaginatedData(currentPage, PAGINATION, badges)?.map(
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
                            <div className="w-[25%] flexsm">
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
                              <PencilAltOutline size="16px" />
                              <TrashOutline size="16px" />
                            </div>
                          </div>
                        </>
                      );
                    }
                  )} */}
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

export default MasteryStage;
