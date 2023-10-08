import { useState, useEffect } from "react";
import Image from "next/image";
import { EyeOutline, EyeOffOutline, ArrowLeftOutline } from "heroicons-react";
import Loader from "@/AtomicComponents/Loader";

const SetPassword = () => {
  const [loginType, setLoginType] = useState("none");
  const [newPassword, setNewPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [passError, setPassError] = useState(false);
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);

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
      // ENDPOINT FOR UPDATING USER PASSWORD
      setLoading(true);

      //   setLoading(false);
    }
  };

  return (
    <>
      <div className="h-full w-full flexss flex-wrap">
        <div
          className={`w-[45%] h-full ${
            loginType === "institution" ? "bg-purplePrime" : "bg-sec1"
          } py-[4em] sm:py-[2em] px-[5em] text-sec2 sm:px-[1.5em] md1:w-full`}
        >
          <div className="cflexss gap-[1.5em]">
            <a
              href="/"
              className="w-[320px] lg:w-[300px] ls:w-[280px] sm:w-[280px]"
            >
              <img src="logo.svg" alt="CSkidz" />
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
              className="flexss bg-sec1 rounded-[0.5em] p-[0.4em] cursor-pointer"
            >
              <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                <ArrowLeftOutline size="12px" color="#00AC76" />
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
                  <p className="text-sec1 text-[14px] lg:text-[12px] font-[400] flex flex-wrap w-[30em] sm:w-full">
                    * Password should be at least 8 characters long and must
                    contain at least one special character
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary2 px-[2.5em] py-[1em] rounded-full text-white text-[18px] sm:text-[1rem] font-[600] sm:font-[400]"
                onClick={handleSubmit}
                disabled={loading && true}
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
