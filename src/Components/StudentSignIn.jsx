import { useState, useRef, useEffect } from "react";
import {
  EyeOutline,
  EyeOffOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
} from "heroicons-react";
import Image from "next/image";
import { studentLogin } from "@/services/request";
import Cookies from "js-cookie";
import Loader from "@/AtomicComponents/Loader";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const StudentSignIn = ({ setLoginType, setForgot }) => {
  const dispatch = useDispatch();
  const eMail = useRef(null);
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  // useEffect(() => {
  //   eMail.current.focus();
  // }, []);

  useEffect(() => {
    if (
      loginDetails["email"].trim().length > 0 &&
      loginDetails["password"].trim().length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
    setChanging(!changing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      // ENDPOINT FOR SUBMITTING LOGIN DETAILS
      await studentLogin(
        dispatch,
        loginDetails.email,
        loginDetails.password
      )
      setLoading(false);
    }
  };
  return (
    <>
      <div className="cflexss w-full gap-[28px]">
        <div
          className="flexss bg-sec1 rounded-[0.5em] p-[0.4em] cursor-pointer"
          onClick={() => {
            setLoginType("none");
          }}
        >
          <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
            <ArrowLeftOutline size="12px" color="#00AC76" />
          </div>
        </div>
        <div className="cflexss gap-[12px]">
          <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-sec3">
            Sign In
          </h1>
          <p className="text-[18px] lg:text-[16px] ls:text-[14px] sm:text-[20px] font-400 text-[#52525B] leading-[1.5em]">
            Sign in to continue your learning journey and explore a world of
            endless possibilities.
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
                value={loginDetails["email"]}
                ref={eMail}
                onChange={handleChange}
              />
            </div>
            {emailError && <p className="err">* Fill in a valid email</p>}
          </div>

          <div className="sect">
            <p>Password</p>
            <div className="inputCont">
              <input
                className="input"
                type={hide ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={loginDetails["password"]}
                onChange={handleChange}
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
          </div>

          {!valid && (
            <div className="err">
              <p>*All fields are required.</p>
            </div>
          )}

          <div className="flexbm w-full text-[16px] lg:text-[14px] sm:text-[20px]">
            <div className="flexmm gap-[12px]">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p
              className="text-sec1 cursor-pointer"
              onClick={() => {
                setForgot(true);
              }}
            >
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="flexmm gap-[0.5em] rounded-[2em] bg-sec1 px-[2.5em] py-[1em] text-white text-[18px] sm:text-[1rem] font-[600] sm:font-[400]"
            onClick={handleSubmit}
            disabled={loading && true}
          >
            {loading ? (
              <Loader />
            ) : (
              <>
                <p>Sign In</p>
                <ArrowRightOutline size="12px" />
              </>
            )}
          </button>
        </form>
        <div className="text-[16px] lg:text-[14px] sm:text-[18rem] font-[400]">
          <p>
            Don't have an account?{" "}
            <a href="/signup">
              <span className="text-sec1 font-[700] cursor-pointer">
                Create free account
              </span>
            </a>
          </p>
        </div>
        <div className="flexsm flex-wrap gap-[12px] font-[400] text-[16px] sm:text-[1rem] text-[#344054] w-full">
          <div className="box">
            <div className="w-[1.5em] sm:w-[1.2em]">
              <Image src="google.svg" width={100} height={100} alt="google" />
            </div>
            <p>Sign in with Google</p>
          </div>
          <div className="box">
            <div className="w-[1.5em] sm:w-[1.2em]">
              <Image src="outlook.svg" width={100} height={100} alt="google" />
            </div>
            <p>Sign in with Outlook</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSignIn;
