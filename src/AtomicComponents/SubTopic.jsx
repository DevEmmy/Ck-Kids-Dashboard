import { useState } from "react";
import { CheckCircle, PlayOutline } from "heroicons-react";

const SubTopic = (props) => {
  const { topic, contents } = props;
  const [Id, setId] = useState("");
  return (
    <>
      <div className="w-full cflexss font-[400] text-[0.8rem] gap-[0.5em]">
        <p>{topic}</p>
        <div className="w-full border-[0.2em] rounded-[0.5em] cflexmm">
          {contents.map((content, i) => {
            return (
              <>
                <div
                  key={i}
                  className={
                    Id === content.track
                      ? "w-full p-[1em] bg-primary2 text-white flexsm gap-[0.5em] cursor-pointer"
                      : "w-full border-b-[0.2em] p-[1em] flexsm gap-[0.5em] cursor-pointer"
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
                  <p className="font-[600] text-[0.7rem] w-[95%]">
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
