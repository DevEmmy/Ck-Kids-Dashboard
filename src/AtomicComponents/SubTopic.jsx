import { useState } from "react";
import { CheckCircle, PlayOutline } from "heroicons-react";

const SubTopic = (props) => {
  const { topic, contents } = props;
  const [Id, setId] = useState("");
  return (
    <>
      <div className="w-full cflexss font-[400] text-[20px] lg:text-[18px] ls:text-[16px] gap-[16px]">
        <p>{topic}</p>
        <div className="w-full border-[1px] rounded-[0.5em] cflexmm">
          {contents.map((content, i) => {
            return (
              <>
                <div
                  key={i}
                  className={
                    Id === content.track
                      ? "w-full p-[20px] bg-primary2 text-white flexsm gap-[10px] cursor-pointer"
                      : "w-full border-b-[1px] p-[20px] flexsm gap-[10px] cursor-pointer"
                  }
                  onClick={() => {                    
                    setId(content.track);
                  }}
                >
                  {content.completed ? (
                    <CheckCircle width="8%" />
                  ) : (
                    <PlayOutline width="8%" />
                  )}
                  <p className="font-[600] text-[20px] lg:text-[18px] ls:text-[16px] w-[95%]">
                    {content.track}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubTopic;
