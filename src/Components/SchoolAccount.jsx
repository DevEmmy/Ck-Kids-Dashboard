import { useState, useRef, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import {
  EyeOutline,
  EyeOffOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
} from "heroicons-react";
import Link from "next/link";
import Image from "next/image";
import { schoolRegister } from "@/services/request";

const SchoolAccount = ({ setAccountType }) => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const fName = useRef(null);
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [exceedChar, setExceedChar] = useState(false);
  const [passError, setPassError] = useState(false);
  const [hide, setHide] = useState(true);
  const [userDetails, setUserDetails] = useState({
    schoolName: "",
    email: "",    
    password: ""    
  });

  // useEffect(() => {
  //   fName.current.focus();
  // }, []);

  useEffect(() => {
    if (
      userDetails["schoolName"].trim().length > 0 &&
      !emailError &&      
      !passError &&
      userDetails["password"].length >= 8
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    if (
      EMAIL_REGEX.test(userDetails["email"]) ||
      userDetails["email"].trim().length === 0
    ) {
      setEmailError(false);
    } else if (
      !EMAIL_REGEX.test(userDetails["email"]) &&
      userDetails["email"].trim().length > 0
    ) {
      setEmailError(true);
    }

    if (
      (userDetails["password"].length >= 8 &&
        /[!@#$%^&*]/.test(userDetails["password"])) ||
      userDetails["password"].length === 0
    ) {
      setPassError(false);
    } else if (
      (userDetails["password"].length !== 0 &&
        userDetails["password"].length < 8) ||
      !/[!@#$%^&*]/.test(userDetails["password"])
    ) {
      setPassError(true);
    }
  }, [changing]);

  const acceptLettersOnly = (name, value, max) => {
    var alphabets = /^[A-Z|a-z| |@#$%^&-]+$/;
    if ((alphabets.test(value) && value.length <= max) || value.length === 0) {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
      setExceedChar("");
    } else if (value.length > max) {
      setExceedChar(name);
    }
  };

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "schoolName") {
      acceptLettersOnly(name, value, 50);
    } else {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await schoolRegister(userDetails.schoolName, userDetails.email, userDetails.password)
    if (valid) {
      // setUserDetails({
      //   schoolName: "",
      //   email: "",        
      //   password: ""        
      // });

      // ENDPOINT FOR SUBMITTING USER DETAILS
      
    }
  };
  return (
    <>
      <div className="cflexss w-full gap-[0.7em] pt-[2em]">
        <div
          className="flexss bg-purplePrime rounded-[0.5em] p-[0.4em] cursor-pointer"
          onClick={() => {
            setAccountType("none");
          }}
        >
          <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
            <ArrowLeftOutline size="12px" color="#8D67CE" />
          </div>
        </div>
        <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-sec3">
          Create an Account
        </h1>
        <p className="text-sm sm:text-[1.1rem] font-400 text-[#52525B] leading-[1.5em]">
          Join the CuriousKidz community and embark on an exciting journey of
          discovery and learning! Sign up today to unlock a world of educational
          adventures for your child.
        </p>
        <form className="cflexss gap-[1em] w-full">
          <div className="sect">
            <p>School Name</p>
            <div className="inputCont">
              <input
                className="input"
                type="text"
                name="schoolName"
                placeholder="E.g Solon High School"
                value={userDetails["schoolName"]}
                ref={fName}
                onChange={handleChange}
              />
            </div>
            {exceedChar === "schoolName" && (
              <p className="err">*can't exceed 50 characters</p>
            )}
          </div>

          <div className="sect">
            <p>Official email</p>
            <div className="inputCont">
              <input
                className="input"
                type="text"
                name="email"
                placeholder="E.g annette.black@example.com"
                value={userDetails["email"]}
                onChange={handleChange}
              />
            </div>
            {emailError && (
              <p className="err">* Fill in a valid email address</p>
            )}
          </div>          
          <div className="sect">
            <p>Password</p>
            <div className="inputCont">
              <input
                className="input"
                type={hide ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={userDetails["password"]}
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
            {passError && (
              <p className="text-sec1 text-[0.7rem] sm:text-[0.9rem] font-[400] flex flex-wrap w-[30em] sm:w-full">
                * Password should be at least 8 characters long and must contain
                at least one character
              </p>
            )}
          </div>

          {!valid && (
            <div className="err">
              <p>*All fields are required.</p>
            </div>
          )}

          <div className="flexbm text-[0.8rem] sm:text-[1rem]">
            <div className="flexmm gap-[0.5em]">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
          </div>

          <button
            type="submit"
            className="flexmm gap-[0.5em] rounded-[2em] bg-purplePrime w-[90%] px-[2.5em] py-[1em] text-white text-[0.8em] sm:text-[1rem] font-[600] sm:font-[400]"
            onClick={handleSubmit}
          >
            <p>Create account</p>
            <ArrowRightOutline size="12px" />
          </button>
        </form>
        <div className="text-[0.7rem] sm:text-[0.9rem] font-[400]">
          <p>
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-purplePrime font-[700] cursor-pointer">
                Log In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SchoolAccount;
