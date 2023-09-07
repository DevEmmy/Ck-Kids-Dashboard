import React, { useState, useEffect } from "react";
import Nav from "@/AtomicComponents/Nav";
import { ArrowLeftOutline } from "heroicons-react";
import { getMyDetails } from "@/services/request";

const Support = () => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [valid, setValid] = useState(false);
  const [exceedChar, setExceedChar] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [student, setStudent] = useState("");
  useEffect(() => {
    let student = getMyDetails();
    setStudent(student);
  }, [student]);

  useEffect(() => {
    if (
      userDetails["firstName"].trim().length > 0 &&
      !emailError &&
      userDetails["lastName"].trim().length > 0 &&
      userDetails["message"].trim().length > 0 &&
      agreement
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
    if (name === "firstName" || name === "lastName") {
      acceptLettersOnly(name, value, 50);
    } else if (name === "message") {
      acceptLettersOnly(name, value, 300);
    } else {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setAgreement(false);
      setValid(false);

      // ENDPOINT FOR SUBMITTING USER MESSAGE
    }
  };

  return (
    <>
      <Nav student={student}/>
      <div className="flexbm w-full lf:justify-center px-xpadding lf:gap-[50px] sm1:px-[1.5em] py-[4em] sm1:pb-[2em] font-[400] text-[20px] lg:text-[18px] ls:text-[16px] sm1:pt-[0em] bg-white h-full lf:flex-wrap">
        <div className="cflexbs h-full w-[50%] lf:w-full gap-[170px] lg:gap-[185px] ls:gap-[200px] lf:gap-0 flex-shrink sm1:pb-[2em] text-sec3 sm1:text-[20px]">
          <div className="w-full cflexss gap-[20px]">
            <div
              onClick={() => {
                window.history.back();
              }}
              className="flexmm gap-[20px]"
            >
              <div className="flexss bg-primary2 rounded-[0.5em] p-[0.4em] cursor-pointer">
                <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
                  <ArrowLeftOutline size="12px" color="#00AC76" />
                </div>
              </div>
              <h1 className="font-[900] text-[40px] lg:text-[37px] ls:text-[34px] sm:text-[30px]">
                Contact Support
              </h1>
            </div>
            <p className="w-full">
              We'd love to hear from you! If you have any questions, inquiries,
              or feedback, please fill out the form below, and our team will get
              back to you as soon as possible.
            </p>
          </div>

          <div className="w-full cflexss gap-[40px] lf:pt-[1em]">
            <div className="w-full flexbs flex-wrap sm:gap-[1em]">
              <div className="cflexss gap-[6px] w-[70%] sm:w-full">
                <p className="font-[700] text-[24px] lg:text-[22px] sm:text-[24px] sm:pb-[1em]">
                  Business Hours:
                </p>
                <p>Monday to Friday: 9:00 AM - 6:00 PM (WAT)</p>
                <p>Saturday and Sunday: Closed</p>
              </div>

              <div className="cflexss gap-[6px] w-[30%] sm:w-full">
                <p className="font-[700] text-[24px] lg:text-[22px] sm:text-[24px] sm:pb-[1em]">
                  Headquaters:
                </p>
                <p>23 Majekodunmi St,</p>
                <p>Alagbado 102213, Lagos</p>
              </div>
            </div>

            <div className="w-full flexbs flex-wrap sm:gap-[1em]">
              <div className="cflexss gap-[6px] w-[70%] sm:w-full">
                <p className="font-[700] text-[24px] lg:text-[22px] sm:text-[24px] sm:pb-[1em]">
                  Email:
                </p>
                <p>support@curiouskidz.com.ng</p>
              </div>

              <div className="cfledxdmm gap-[6px] w-[30%] sm:w-full">
                <p className="font-[700] text-[24px] lg:text-[22px] sm:text-[26px] sm:pb-[1em]">
                  Phone:
                </p>
                <p>+234 805 988 7668</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flexms h-[100%] w-[40%] lg:w-[43%] ls:w-[45%] lf:w-full flex-shrink font-[400]">
          <div className="shadow-lg cflexss gap-[1em] w-[100%] p-[1.5em] px-[2em] sm:px-[1em] bg-sec2">
            <h1 className="text-sec1 font-[700] text-[36px] lg:text-[32px] ls:text-[30px] w-[65%] sm:w-full">
              Get in touch with us & let's talk
            </h1>
            <p className="text-[#667085] font-[400] text-[20px] lg:text-[18px] ls:text-[16px]">
              We’d love to hear from you. Please fill out this form.
            </p>
            <form className="cflexss w-full gap-[20px] font-[600] text-[14px]">
              <div className="flexbm flex-wrap  gap-[32px] sm:gap-[20px] w-full">
                <div className="cflexss gap-[0.5em] flex-grow">
                  <p>First name</p>
                  <div className="inputCont2">
                    <input
                      className="input"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={userDetails["firstName"]}
                      onChange={handleChange}
                    />
                  </div>
                  {exceedChar === "firstName" && (
                    <p className="err">*can't exceed 50 characters</p>
                  )}
                </div>
                <div className="cflexss gap-[0.5em] flex-grow">
                  <p>Last name</p>
                  <div className="inputCont2">
                    <input
                      className="input"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userDetails["lastName"]}
                      onChange={handleChange}
                    />
                  </div>
                  {exceedChar === "lastName" && (
                    <p className="err">*can't exceed 50 characters</p>
                  )}
                </div>
              </div>
              <div className="cflexss gap-[0.5em] w-full">
                <p>Email</p>
                <div className="inputCont2">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="you@company.com"
                    value={userDetails["email"]}
                    onChange={handleChange}
                  />
                </div>
                {emailError && (
                  <p className="err">* Fill in a valid email address</p>
                )}
              </div>
              <div className="cflexss gap-[0.5em] w-full">
                <p>Message</p>
                <div className="inputCont2">
                  <textarea
                    className="input h-[10em] resize-none"
                    type="text"
                    name="message"
                    value={userDetails["message"]}
                    onChange={handleChange}
                  />
                </div>
                {exceedChar === "message" && (
                  <p className="err">*can't exceed 150 characters</p>
                )}
              </div>
              <div className="flexsm w-full gap-[1em] text-[16px] lg:text-[14px] ls:text-[12px] text-[#AAAAAA] font-[400]">
                <input
                  type="checkbox"
                  checked={agreement}
                  onClick={(e) => {
                    setAgreement(e.target.checked);
                    setChanging(!changing);
                  }}
                />
                <p>
                  you agree to our friendly{" "}
                  <span className="underline cursor-pointer">
                    privacy policy.
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="w-full py-[20px] ls:text-[16px] bg-sec1 font-[600] sm:font-[400] text-[19px] lg:text-[17px] sm:text-[20px] cursor-pointer rounded-full text-sec2"
                onClick={handleSubmit}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
