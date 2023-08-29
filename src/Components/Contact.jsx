import React, { useState, useEffect } from "react";
import Nav from "@/AtomicComponents/Nav";

const Contact = () => {
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
      setAgreement(false)
      setValid(false)

      // ENDPOINT FOR SUBMITTING USER MESSAGE
    }
  };

  return (
    <>
      <Nav />
      <div className="flexms px-xpadding sm:px-[1.5em] py-[4em] sm1:pb-[2em] sm1:pt-[0em] bg-primary6 h-full flex-wrap">
        <div className="flex flex-col justify-between items-start h-[100%] w-[40em] flex-shrink py-[4em] sm1:pt-0 sm1:pb-[2em] text-[0.8rem] sm1:text-[1.1rem] sm1:flex-grow">
          <div className="w-full cflexss gap-[1em]">
            <h1 className="font-[700] text-[1.7rem]">Contact Us</h1>
            <p className="w-[90%] sm:w-full">
              We'd love to hear from you! If you have any questions, inquiries,
              or feedback, please fill out the form below, and our team will get
              back to you as soon as possible.
            </p>
          </div>

          <div className="w-full cflexss gap-[2em] pt-[18em] sm:pt-[1em]">
            <div className="w-full flexbm flex-wrap sm:gap-[1em]">
              <div className="cfledxdmm gap-[0.5em] w-[70%] sm:w-full">
                <p className="font-[700] text-[1rem] sm:text-[1.1rem] sm:pb-[1em]">Business Hours:</p>
                <p>Monday to Friday: 9:00 AM - 6:00 PM (WAT)</p>
                <p>Saturday and Sunday: Closed</p>
              </div>

              <div className="cfledxdmm gap-[0.5em] w-[30%] sm:w-full">
                <p className="font-[700] text-[1rem] sm:text-[1.1rem] sm:pb-[1em]">Headquaters:</p>
                <p>23 Majekodunmi St,</p>
                <p>Alagbado 102213, Lagos</p>
              </div>
            </div>

            <div className="w-full flexbm flex-wrap sm:gap-[1em]">
              <div className="cfledxdmm gap-[0.5em] w-[70%] sm:w-full">
                <p className="font-[700] text-[1rem] sm:text-[1.1rem] sm:pb-[1em]">Email:</p>
                <p>support@curiouskidz.com.ng</p>
              </div>

              <div className="cfledxdmm gap-[0.5em] w-[30%] sm:w-full">
                <p className="font-[700] text-[1rem] sm:text-[1.1rem] sm:pb-[1em]">Phone:</p>
                <p>+234 805 988 7668</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flexms h-[100%] w-[37em] flex-shrink sm1:flex-grow pl-[6%] sm1:pl-0">
          <div className="cflexss gap-[1em] w-[100%] p-[1.5em] px-[2em] sm:px-[1em] border-2 shadow-md">
            <h1 className="text-primary2 font-[700] text-[1.5rem] w-[60%] sm:w-full">
              Get in touch with us & let's talk
            </h1>
            <p className="font-[400] text-[0.9rem]">
              We’d love to hear from you. Please fill out this form.
            </p>
            <form className="cflexss w-full gap-[1em] font-[600] text-[0.8rem]">
              <div className="flexbm flex-wrap  gap-[0.5em] w-full">
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
              <div className="flexsm w-full gap-[1em] text-[0.7rem] text-[#AAAAAA] font-[400]">
                <input type="checkbox" checked={agreement} onClick={(e)=>{
                    setAgreement(e.target.checked)
                    setChanging(!changing)
                }}/>
                <p>
                  you agree to our friendly <span className="underline cursor-pointer">privacy policy.</span>
                </p>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 bg-primary2 font-[700] sm:font-[400] sm:text-[1rem] cursor-pointer rounded-full text-white"
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

export default Contact;
