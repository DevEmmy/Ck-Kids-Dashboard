import { useState } from "react";
import NavBar from "@/AtomicComponents/NavBar";
import Footer from "@/AtomicComponents/Footer";
import { ArrowRightOutline } from "heroicons-react";
import Button from "@/AtomicComponents/Button";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Range } from "react-range";

const Price = () => {
  const [plan, setPlan] = useState("term");
  const [selected, setSelected] = useState("individual");
  const [values, setValues] = useState([50]);
  return (
    <>
      <NavBar active={3} background={"sec2"} />
      <div className="cflexss w-full px-xpadding pt-[5em] sm:pt-[2em] pb-[3em] text-[24px] lg:text-[20px] ls:text-[18px] font-[400]">
        <div className="w-full cflexsm gap-[24px] text-center pb-[6em]">
          <p>Pricing That Supports Learning Adventures</p>
          <p className="font-[700] text-[40px] lg:text-[35px] ls:text-[24px] max-w-[25em]">
            Welcome to Curious Kids' Pricing Page! We believe in making quality
            education and engaging content accessible to all young minds.
          </p>
          <p className="max-w-[45em]">
            Our pricing structure is designed to cater to both individual
            learners and educational institutions, ensuring that the journey of
            curiosity and learning is open to everyone.
          </p>
          <div className="flexss sm1:justify-center gap-[1em] font-[700] text-[19px] ls:text-[17px] flex-wrap sm1:w-full mt-[2em] p-[0.5em] bg-white rounded-full shadow-md sm:shadow-none">
            <div
              className="sm:flex flex-grow"
              onClick={() => {
                setPlan("term");
              }}
            >
              <Button
                className={
                  plan === "term"
                    ? "border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[0.5em] px-[52px] py-[20px] rounded-full sm:w-full transition duration-500 ease-in-out"
                    : "border-[0.2em] border-sec1 text-sec1 flexmm gap-[0.5em] px-[52px] py-[20px] rounded-full sm:w-full transition duration-500 ease-in-out"
                }
              >
                <p>Cost per term ₦</p>
              </Button>
            </div>
            <div
              className="sm:flex flex-grow"
              onClick={() => {
                setPlan("annual");
              }}
            >
              <Button
                className={
                  plan === "term"
                    ? "border-[0.2em] border-sec1 text-sec1 flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full transition duration-500 ease-in-out"
                    : "border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full transition duration-500 ease-in-out"
                }
              >
                <p>Cost per annum ₦</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full cflexmm gap-[40px]">
          <div className="w-[80%] sm:w-full cflexmm">
            <Range
              step={1}
              min={0}
              max={700}
              values={values}
              onChange={(newValues) => setValues(newValues)}
              disabled={false}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "10px",
                    width: "100%",
                    backgroundColor: "#00AC76",
                    borderRadius: "6px",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#00AC76",
                    border: "3px solid white",
                    outline: "none",
                  }}
                />
              )}
            />
            <p className="pt-[0.5em] pl-[2em] w-full">1 - {values[0]}</p>
          </div>
          {plan === "term" ? (
            <>
              <div className="cflexmm gap-[40px] text-[24px] lg:text-[20px] ls:text-[18px] font-[400] w-[40%] sm:w-full">
                <div
                  className={
                    selected === "individual"
                      ? "w-full flexsm gap-[1em] rounded-xl shadow-lg p-[1em] border-[3px] border-sec1 cursor-pointer transition duration-500 ease-in-out"
                      : "w-full flexsm gap-[1em] rounded-xl p-[1em] cursor-pointer bg-[#F0F0F0] transition duration-500 ease-in-out"
                  }
                  onClick={() => {
                    setSelected("individual");
                  }}
                >
                  <div
                    className={
                      selected === "individual"
                        ? "w-[1.3em] h-[1.3em] rounded-full border-[4px] border-sec1 transition duration-500 ease-in-out"
                        : "w-[1.2em] h-[1.2em] rounded-full bg-white transition duration-500 ease-in-out"
                    }
                  />
                  <div>
                    <h3 className="font-[700] text-[28px] lg:text-[24px] ls:text-[22px]">
                      ₦ 2000/per term
                    </h3>
                    <p>For Individual Learners</p>
                  </div>
                </div>
                <div
                  className={
                    selected === "individual"
                      ? "w-full flexbm rounded-xl p-[1em] cursor-pointer bg-[#F0F0F0] transition duration-500 ease-in-out flex-wrap"
                      : "w-full flexbm rounded-xl shadow-lg p-[1em] border-[3px] border-sec1 cursor-pointer transition duration-500 ease-in-out flex-wrap"
                  }
                  onClick={() => {
                    setSelected("institution");
                  }}
                >
                  <div className="flexmm gap-[1em]">
                    <div
                      className={
                        selected === "individual"
                          ? "w-[1.2em] h-[1.2em] rounded-full bg-white transition duration-500 ease-in-out"
                          : "w-[1.3em] h-[1.3em] rounded-full border-[4px] border-sec1 transition duration-500 ease-in-out"
                      }
                    />
                    <div>
                      <h3 className="font-[700] text-[28px] lg:text-[24px] ls:text-[20px]">
                        ₦ {60000*values[0]}/per term
                      </h3>
                      <p>For Schools and Institutions</p>
                    </div>
                  </div>
                  <div
                    className={
                      selected === "individual"
                        ? "bg-[#AAAAAA] p-[0.3em] font-[600] text-[20px] lg:text-[18px] ls:text-[15px] px-[1em] rounded-full text-white"
                        : "bg-sec1 p-[0.3em] px-[1em] font-[600] text-[20px] lg:text-[18px] ls:text-[15px] rounded-full text-white"
                    }
                  >
                    <p>1 - {values[0]}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="cflexmm gap-[40px] text-[24px] lg:text-[20px] ls:text-[18px] font-[400] w-[40%] sm:w-full">
                <div
                  className={
                    selected === "individual"
                      ? "w-full flexsm gap-[1em] rounded-xl shadow-lg p-[1em] border-[3px] border-sec1 cursor-pointer transition duration-500 ease-in-out"
                      : "w-full flexsm gap-[1em] rounded-xl p-[1em] cursor-pointer bg-[#F0F0F0] transition duration-500 ease-in-out"
                  }
                  onClick={() => {
                    setSelected("individual");
                  }}
                >
                  <div
                    className={
                      selected === "individual"
                        ? "w-[1.3em] h-[1.3em] rounded-full border-[4px] border-sec1 transition duration-500 ease-in-out"
                        : "w-[1.2em] h-[1.2em] rounded-full bg-white transition duration-500 ease-in-out"
                    }
                  />
                  <div>
                    <h3 className="font-[700] text-[28px] lg:text-[24px] ls:text-[22px]">
                      ₦ 5000/per annum
                    </h3>
                    <p>For Individual Learners</p>
                  </div>
                </div>
                <div
                  className={
                    selected === "individual"
                      ? "w-full flexbm rounded-xl p-[1em] cursor-pointer bg-[#F0F0F0] transition duration-500 ease-in-out flex-wrap"
                      : "w-full flexbm rounded-xl shadow-lg p-[1em] border-[3px] border-sec1 cursor-pointer transition duration-500 ease-in-out flex-wrap"
                  }
                  onClick={() => {
                    setSelected("institution");
                  }}
                >
                  <div className="flexmm gap-[1em]">
                    <div
                      className={
                        selected === "individual"
                          ? "w-[1.2em] h-[1.2em] rounded-full bg-white transition duration-500 ease-in-out"
                          : "w-[1.3em] h-[1.3em] rounded-full border-[4px] border-sec1 transition duration-500 ease-in-out"
                      }
                    />
                    <div>
                      <h3 className="font-[700] text-[28px] lg:text-[24px] ls:text-[20px]">
                        ₦ {180000*values[0]}/per annum
                      </h3>
                      <p>For Schools and Institutions</p>
                    </div>
                  </div>
                  <div
                    className={
                      selected === "individual"
                        ? "bg-[#AAAAAA] p-[0.3em] text-[20px] lg:text-[18px] ls:text-[15px] font-[600] px-[1em] rounded-full text-white"
                        : "bg-sec1 p-[0.3em] px-[1em] text-[20px] lg:text-[18px] ls:text-[15px] font-[600] rounded-full text-white"
                    }
                  >
                    <p>1 - {values[0]}</p>
                  </div>
                </div>
              </div>
            </>
          )}
          <Link href="/signup" className="sm:w-full">
            <Button className="bg-sec1 text-white flexmm gap-[0.5em] px-[8em] sm:px-0 py-[1em] rounded-full sm:w-full">
              <p>Create account</p> <ArrowRightOutline size="1em" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
