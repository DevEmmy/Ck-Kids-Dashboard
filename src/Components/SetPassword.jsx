import { useState, useEffect } from "react";
import Image from "next/image";
import { EyeOutline, EyeOffOutline, ArrowLeftOutline } from "heroicons-react";
import {
  updateSchoolPassword,
  updateStudentPassword,
  updateTeacherPassword,
} from "@/services/request";
import Loader from "@/AtomicComponents/Loader";
import { useRouter } from "next/navigation";

const SetPassword = ({ token, type }) => {
  const [loginType, setLoginType] = useState("none");
  const [newPassword, setNewPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [passError, setPassError] = useState(false);
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (newPassword.trim().length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }

    if (
      (newPassword.length >= 8 && /[!@#$%^&*]/.test(newPassword)) ||
      newPassword.length === 0
    ) {
      setPassError(false);
    } else if (
      (newPassword.length !== 0 && newPassword.length < 8) ||
      !/[!@#$%^&*]/.test(newPassword)
    ) {
      setPassError(true);
    }
  }, [changing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid && !passError) {
      if (type === 1) {
        setLoading(true);
        console.log("updating");
        await updateStudentPassword(token, newPassword);
        setLoading(false);
        router.push("/signin");
      } else if (type === 2) {
        setLoading(true);
        await updateTeacherPassword(token, newPassword);
        setLoading(false);
        router.push("/teachers-signin");
      } else if (type === 3) {
        setLoading(true);
        await updateSchoolPassword(token, newPassword);
        setLoading(false);
        router.push("/signin");
      }
    }
  };

  return (
    <>
      <div className="h-full w-full flexss flex-wrap">
        <div
          className={`w-[45%] h-full ${type === 1 && "bg-primary2"} ${
            type === 3 && "bg-purplePrime"
          } ${
            type === 2 && "bg-primary1"
          } py-[4em] sm:py-[2em] px-[5em] text-sec2 sm:px-[1.5em] md1:w-full`}
        >
          <div className="cflexss gap-[1.5em]">
            <a
              href="/"
              className="w-[320px] lg:w-[300px] ls:w-[280px] sm:w-[280px]"
            >
              <img
                src={type === 2 ? "whitelogo.svg" : "logo.svg"}
                alt="CSkidz"
              />
            </a>
            <div>
              <h1 className="text-[60px] lg:text-[55px] ls:text-[32px] font-[800]">
                Welcome back to CuriousKidz!
              </h1>
              <p className="text-[18px] lg:text-[17px] ls:text-[16px] sm:text-[20px] font-[400] pt-[0.5em] leading-[1.7em]">
                We're thrilled to have you back with CuriousKidz! Rediscover the
                joy of learning with our innovative courses and foster
                creativity, critical thinking, and problem-solving skills. Let's
                make learning an exciting adventure
              </p>
            </div>
            <div className="cflexss gap-[20px] text-[18px] lg:text-[17px] ls:text-[16px] sm:text-[20px] font[600] pt-[160px] leading-[1.7em]">
              <div className="w-[7em] sm:w-[8em]">
                <Image src="Review.svg" width={100} height={100} alt="review" />
              </div>
              <p>
                "My daughter's experience with CuriousKidz has been nothing
                short of amazing! She used to find science and math daunting,
                but with the interactive lessons and engaging projects, she's
                now excelling in these subjects.
              </p>
              <p>
                The program not only boosted her academic performance but also
                instilled confidence in her abilities. Thank you, CuriousKidz,
                for unlocking her potential!"
              </p>
              <div className="flexsm gap-[0.5em] w-full">
                <div className="w-[3em]">
                  <Image
                    src="estbg.svg"
                    width={100}
                    height={100}
                    alt="profile"
                  />
                </div>
                <p className="font-[800]">Esther Howard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-full bg-white pt-[6em] sm:py-[2em] pl-[6em] pr-[7em] sm:px-[1.5em] md1:w-full">
          <div className="cflexss w-full gap-[28px]">
            <a
              href="/signin"
              className={`flexss ${type === 1 && "bg-sec1"} ${
                type === 2 && "bg-primary1"
              } ${
                type === 3 && "bg-primary3"
              } rounded-[0.5em] p-[0.4em] cursor-pointer`}
            >
              <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                {type === 1 && <ArrowLeftOutline size="12px" color="#00AC76" />}
                {type === 2 && <ArrowLeftOutline size="12px" color="#F5AE1E" />}
                {type === 3 && <ArrowLeftOutline size="12px" color="#8D67CE" />}
              </div>
            </a>

            <div className="cflexss gap-[12px]">
              <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-sec3">
                Set Password
              </h1>
            </div>
            <form className="cflexss gap-[1em] w-full" method="POST">
              <div className="sect">
                <p>New Password</p>
                <div className="inputCont">
                  <input
                    className="input"
                    type={hide ? "password" : "text"}
                    name="newPassword"
                    placeholder="Password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setChanging(!changing);
                    }}
                  />
                  {hide ? (
                    <EyeOutline
                      className="w-5 h-5 text-gray-500 cursor-pointer"
                      onClick={() => {
                        setHide(!hide);
                      }}
                    />
                  ) : (
                    <EyeOffOutline
                      className="w-5 h-5 text-gray-500 cursor-pointer"
                      onClick={() => {
                        setHide(!hide);
                      }}
                    />
                  )}
                </div>
                {passError && (
                  <p
                    className={`${type === 1 && "text-sec1"} ${
                      type === 2 && "text-primary1"
                    } ${
                      type === 3 && "text-primary3"
                    } text-[14px] lg:text-[12px] font-[400] flex flex-wrap w-[30em] sm:w-full`}
                  >
                    * Password should be at least 8 characters long and must
                    contain at least one special character
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full ${type === 1 && "bg-sec1"} ${
                  type === 2 && "bg-primary1"
                } ${
                  type === 3 && "bg-primary3"
                } px-[2.5em] py-[1em] rounded-full text-white text-[18px] sm:text-[1rem] font-[600] sm:font-[400]`}
                onClick={handleSubmit}
              >
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <p>Reset Password</p>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetPassword;
