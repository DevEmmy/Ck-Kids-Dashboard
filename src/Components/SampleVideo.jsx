import Nav from "@/AtomicComponents/Nav";
import Image from "next/image";
import Link from "next/link";
import SubTopic from "@/AtomicComponents/SubTopic";
import { ArrowLeftOutline, HeartOutline } from "heroicons-react";
import Recommended from "@/AtomicComponents/Recommended";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import NavBar from "@/AtomicComponents/NavBar";

const SampleVideo = ({ student, course, loading }) => {
  const [size, setSize] = useState(window.innerWidth);
  var getYouTubeID = require("get-youtube-id");
  const [url, setURL] = useState("");
  console.log(course);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    window.removeEventListener("resize", ()=>{
        setSize(window.innerWidth);
    })
  }, [size]);

  useEffect(() => {
    if (!loading) {
      setURL(getYouTubeID(course.link));
    }
  }, [loading]);

  const opts = {
    height: "600",
    width: `${(90 * size) / 100}`,
    className: "w-full h-auto",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const [selected, setSelected] = useState("question");
  return (
    <>
      <NavBar />
      {loading ? (
        <>
          <div className="w-full flexmm py-[20em]">
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
          <div className="w-full mt-[60px] flexss gap-[1em] px-[5%]">
            <div className="flexmm">
              <div
                className="flexss bg-primary2 rounded-[0.5em] p-[0.4em] cursor-pointer"
                onClick={() => {
                  window.history.back();
                }}
              >
                <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                  <ArrowLeftOutline size="12px" color="#00AC76" />
                </div>
              </div>
            </div>
            <div className="cflexss font-[600] text-[20px] lg:text-[18px] ls:text-[16px] gap-[12px]">
              <p className="text-[28px] lg:text-[24px] ls:text-[20px] font-[600]">
                {course.name}
              </p>
              {/* <p>22 Lessons</p> */}
            </div>
          </div>

          <div className="w-full flexbs pt-[2em] px-[5%] gap-[1em] flex-wrap">
            <div className="w-full sm:w-full cflexss gap-[2em] font-[400] text-[0.9rem]">
              <div className="w-full h-auto flexmm cursor-pointer">
                <YouTube videoId={url} opts={opts} onReady={_onReady} />
              </div>
            </div>
          </div>

          <div className="w-full px-[5%] flexsm py-[2em]">
            {/* <Recommended courses={courses}/> */}
          </div>
        </>
      )}
    </>
  );
};

export default SampleVideo;
