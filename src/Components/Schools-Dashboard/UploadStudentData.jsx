import { useState } from "react";
import FileBase64 from "react-file-base64";
import Loader from "@/AtomicComponents/Loader";

const UploadStudentData = ({ close }) => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState(false);
  const [loading, setLoading] = useState(false);

  const upload = (file) => {
    if (
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.type === "text/csv" ||
      file.type === "application/vnd.ms-excel.sheet.binary.macroEnabled.12" ||
      file.type === "application/vnd.ms-excel" ||
      file.type === "application/vnd.ms-excel.sheet.macroEnabled.12" ||
      file.type === "application/vnd.ms-excel.template.macroEnabled.12"
    ) {
      setFile(file.base64);
      setFileError(false);
    } else {
      setFileError(true);
      console.log(file.type);
      console.log(file.size);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      setLoading(true);

      //   close()
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    close();
  };

  return (
    <>
      <div className="w-[526px] flex-shrink cflexss gap-[20px]">
        <div className="w-full cflexss gap-[12px]">
          <p className="font-[800]">Upload Student Data</p>
          <div className="w-full flexmm text-[#808080] text-[16px] border-[2px] border-[#808080] border-dotted rounded-[12px] h-[125px] lg:text-[14px] font-[400] cursor-pointer">
            {file ? fileName.name : <p>Drop excel file to upload here</p>}
            <div className="absolute opacity-0">
              <FileBase64
                name="coursePhoto"
                defaultValue={file}
                multiple={false}
                onDone={(base64) => {
                  upload(base64);
                  setFileName(base64);
                }}
              />
            </div>
          </div>
          {fileError && (
            <p className="flexmm text-[12px] text-red-700">
              ensure you uploaded an excel file format
            </p>
          )}
        </div>
        <div className="w-full flexsm gap-[20px] text-[19px] lg:text-[17px] font-[600]">
          <button
            type="submit"
            className="py-[18px] px-[52px] rounded-full bg-primary2 text-[#FFF]"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : <p>Submit</p>}
          </button>
          <button
            className="py-[18px] px-[52px] rounded-full bg-[#FFF] text-primary2 border-[1px] border-primary2"
            onClick={handleClose}
          >
            <p>Cancel</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadStudentData;
