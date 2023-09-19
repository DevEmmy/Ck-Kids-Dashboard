import { DotsVertical, PencilAltOutline, TrashOutline } from "heroicons-react";
import React, { useState } from "react";
import EditVideo from "./EditVideo";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { deleteVideo } from "@/services/request";

const EachCourse = ({ video, setCat, setType, setAdd, setDrop, fetchData }) => {
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [modalElement, setModalElement] = useState(null);

  const handleDelete = async () =>{
    await deleteVideo(video._id)
    fetchData();
  }

  return (
    <div className="w-full rounded-[12px] border-[1px] flex">
      <div className="w-3/5 border-r-[1px] p-[15px] flex gap-[20px] justify-between">
        <div className="flex gap-5 ">
          <div className="flexmm w-full min-h-[200px] flex-shrink rounded-[12px]">
            <img
              src={video.cover}
              alt="courseImage"
              className="rounded-[12px] h-full object-cover"
            />
          </div>

          <div className="pt-[20px] w-full cflexss font-[700] text-[#101828]">
            <p>{video.name}</p>
            <p className="text-[#AAA] line-clamp-3 font-[400]">
              {video.description}
            </p>
          </div>
        </div>

        <div
          className="relative flex"
          onClick={() => {
            setEdit(!edit);
            setDrop(false);
            setCat(false);
            setType(false);
            setAdd(false);
          }}
        >
          <DotsVertical
            size="16px"
            color="#808080"
            className="cursor-pointer"
          />
          {edit && (
            <div className="absolute top-[30px] z-50 font-[400] text-[17px] text-[#808080] cflexss p-[6px] border-[1px] rounded-[12px] bg-[#FFF] flex-shrink shadow-md">
              <div
                className="w-[228px] py-[12px] px-[16px] gap-[10px] flexsm rounded-[4px] flex-shrink hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400"
                onClick={() => {
                  console.log("clicked");
                  setModalElement(
                    <EditVideo
                      video={video}
                      close={close}
                      fetchData={fetchData}
                    />
                  );
                  open();
                  setEdit(false);
                }}
              >
                <PencilAltOutline size="16px" />
                <p>Edit</p>
              </div>
              <div
                className="w-[228px] py-[12px] px-[16px] gap-[10px] flexsm rounded-[4px] flex-shrink hover:bg-primary2 hover:text-white transition-all cursor-pointer duration-400"
                onClick={() => {
                  setRemove(true);
                  handleDelete();
                }}
              >
                <TrashOutline size="16px" />
                <p>Delete</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-2/5 py-[20px] px-[25px] gap-[10%] flexss text-[#AAA]">
        <div className="cflexss gap-[20px]">
          <p>Views</p>
          <p className="text-[#333]">{video.views?.length}</p>
        </div>
        <div className="cflexss gap-[20px]">
          <p>Watched</p>
          <p className="text-[#333]">{video.watched?.length}</p>
        </div>
        <div className="cflexss gap-[20px]">
          <p>Comments</p>
          <p className="text-[#333]">0</p>
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
  );
};

export default EachCourse;
