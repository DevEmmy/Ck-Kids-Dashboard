import { useState, useRef, useEffect } from "react";
import { ArrowLeftOutline } from "heroicons-react";
import {
  studentForgotPassword,
  schoolForgotPassword,
} from "@/services/request";
import Loader from "@/AtomicComponents/Loader";
import { useRouter } from "next/navigation";

const ForgotPassword = ({ loginType, setForgot }) => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (email.trim().length > 0 && !emailError) {
      setValid(true);
    } else {
      setValid(false);
    }

    if (EMAIL_REGEX.test(email) || email.trim().length === 0) {
      setEmailError(false);
    } else if (!EMAIL_REGEX.test(email) && email.trim().length > 0) {
      setEmailError(true);
    }
  }, [changing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid && loginType === "student") {
      setLoading(true);
      await studentForgotPassword(email);
      setLoading(false);
    } else if (valid && loginType === "institution") {
      setLoading(true);
      await studentForgotPassword(email);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="cflexms h-full w-full gap-[28px]">
        <div
          className={`flexss ${
            loginType === "student" ? "bg-primary2" : "bg-primary3"
          } rounded-[0.5em] p-[0.4em] cursor-pointer`}
          onClick={() => {
            setForgot(false);
          }}
        >
          <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
            <ArrowLeftOutline
              size="12px"
              color={loginType === "student" ? "#00AC76" : "#8D67CE"}
            />
          </div>
        </div>
        <div className="cflexss gap-[12px]">
          <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-sec3">
            Forgot Password
          </h1>
          <p className="text-[18px] lg:text-[16px] ls:text-[14px] sm:text-[20px] font-400 text-[#52525B] leading-[1.5em]">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password
          </p>
        </div>
        <form className="cflexss gap-[1em] w-full" method="POST">
          <div className="sect">
            <p>Email address</p>
            <div className="inputCont">
              <input
                className="input"
                type="text"
                name="email"
                placeholder="E.g annette.black@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setChanging(!changing);
                }}
              />
            </div>
            {emailError && <p className="err">* Fill in a valid email</p>}
          </div>

          <button
            type="submit"
            className={`w-full flexmm rounded-[2em] ${
              loginType === "student" ? "bg-primary2" : "bg-primary3"
            } px-[2.5em] py-[1em] text-white text-[18px] sm:text-[1rem] font-[600] sm:font-[400]`}
            onClick={handleSubmit}
            disabled={loading && true}
          >
            {loading ? (
              <Loader />
            ) : (
              <>
                <p>Send reset instruction</p>
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
