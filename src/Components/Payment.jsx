import { useState, useEffect, useRef } from "react";
import { ArrowLeftOutline, ChevronUpOutline } from "heroicons-react";
import Loader from "@/AtomicComponents/Loader";
import { setLazyProp } from "next/dist/server/api-utils";

const Payment = ({ type, pay, setPay, amount, body }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    numberOfStudents: 1,
    expDate: "",
    cardName: "",
    cardNumber: "",
    cvv: "",
    totalAmount: "",
  });

  const nStd = useRef(null);
  const [cardValid, setCardValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [error, setError] = useState(true);
  const [exceedChar, setExceedChar] = useState(false);
  const [numbValid, setNumbValid] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type === "annum" && body === 1) {
      nStd.current.focus();
    }
  }, []);

  useEffect(() => {
    if (
      paymentDetails["cardName"].trim().length > 0 &&
      paymentDetails["cardNumber"] &&
      paymentDetails["expDate"] &&
      paymentDetails["cvv"].length >= 3 &&
      numbValid
    ) {
      setCardValid(true);
      setError(false);
    } else {
      setCardValid(false);
      setError(true);
    }
    if (
      paymentDetails["cardNumber"].length >= 12 &&
      paymentDetails["cardNumber"].length <= 16
    ) {
      setNumbValid(true);
    } else {
      setNumbValid(false);
    }
    if (type === "annum") {
      body === 0
        ? setPaymentDetails({ ...paymentDetails, totalAmount: amount * 12 })
        : setPaymentDetails({
            ...paymentDetails,
            totalAmount:
              parseInt(paymentDetails["numberOfStudents"]) * amount * 12,
          });
    } else if (type === "month") {
      body === 0
        ? setPaymentDetails({ ...paymentDetails, totalAmount: amount })
        : setPaymentDetails({
            ...paymentDetails,
            totalAmount: parseInt(paymentDetails["numberOfStudents"]) * amount,
          });
    }
  }, [changing]);

  // const restrictCharacters = (name, value, length) => {
  //   var dummyText = value.split("");
  //   for (var i = 0; i < value.length; i++) {
  //     if (value[i] === " ") {
  //       dummyText.pop();
  //     }
  //   }
  //   if (dummyText.length <= length) {
  //     setPaymentDetails({ ...paymentDetails, [name]: value });
  //     setChanging(!changing);
  //     setExceedChar("");
  //   } else {
  //     setExceedChar(name);
  //   }
  // };

  const acceptNumbersOnly = (name, value, max) => {
    var numeric = /^[0-9]+$/;

    if ((numeric.test(value) && value.length <= max) || value.length === 0) {
      setPaymentDetails({ ...paymentDetails, [name]: value });
      setChanging(!changing);
      setExceedChar("");
    } else if (value.length > max) {
      setExceedChar(name);
    }
  };

  const acceptLettersOnly = (name, value, max) => {
    var alphabets = /^[A-Z|a-z| |@#$%^&-]+$/;

    if ((alphabets.test(value) && value.length <= max) || value.length === 0) {
      setPaymentDetails({ ...paymentDetails, [name]: value });
      setChanging(!changing);
      setExceedChar("");
    } else if (value.length > max) {
      setExceedChar(name);
    }
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so add 1 to get 1-12
  const currentYear = currentDate.getFullYear();

  // format the date as "YYYY-MM"
  const formattedDate = `${currentYear}-${currentMonth
    .toString()
    .padStart(2, "0")}`;

  console.log(formattedDate); // e.g. "2023-04"

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "cvv") {
      acceptNumbersOnly(name, value, 7);
    } else if (name === "expDate") {
      if (value >= formattedDate || value === "") {
        setPaymentDetails({ ...paymentDetails, [name]: value });
        setChanging(!changing);
        setExceedChar("");
      } else {
        setExceedChar(name);
      }
    } else if (name === "cardName") {
      acceptLettersOnly(name, value, 50);
    } else if (name === "cardNumber") {
      acceptNumbersOnly(name, value, 50);
    } else if (name === "numberOfStudents") {
      acceptNumbersOnly(name, value, 10);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body === 0) {
      cardValid && numbValid && setLoading(true);
      // IMPLEMENT PAYMENT ENDPOINT
    } else if (body === 1) {
      cardValid &&
        numbValid &&
        paymentDetails["numberOfStudents"] &&
        setLoading(true);
      // IMPLEMENT PAYMENT ENDPOINT
    }
  };

  return (
    <>
      <div className="flexmm w-full bg-[#FFF9D2] pt-[180px] sm:pt-[92px] px-xpadding text-[#808080] pb-[3em] text-[20px] lg:text-[18px] ls:text-[16px] font-[400]">
        <form className="px-[35px] py-[50px] w-[603px] flex-shrink rounded-[40px] sm:rounded-[25px] sm:px-[5%] bg-[#FFF] cflexss gap-[24px]">
          <div
            className="flexss bg-sec1 rounded-[0.5em] p-[0.4em] cursor-pointer"
            onClick={() => {
              setPay(false);
            }}
          >
            <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
              <ArrowLeftOutline size="12px" color="#00AC76" />
            </div>
          </div>
          {type === "month" ? (
            <>
              <div className="cflexss gap-[11px]">
                <p>Student Name</p>
                <p className="text-[28px] lg:text-[24px] text-[#090914] ls:text-[20px] font-[700]">
                  Annette Black
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="cflexss gap-[11px]">
                <p>School Name</p>
                <p className="text-[28px] lg:text-[24px] text-[#090914] ls:text-[20px] font-[700]">
                  Solon High School
                </p>
              </div>
            </>
          )}
          <div className="w-full flexbs">
            <div className="cflexss gap-[11px]">
              {type === "month" ? (
                <p>Monthly Payment</p>
              ) : (
                <p>Yearly Payment</p>
              )}
              <p className="font-[700] text-[#090914]">
                {type === "month" ? (
                  <>₦ {amount}</>
                ) : (
                  <>₦ {amount} x 12 months</>
                )}
              </p>
            </div>
            <div className="cflexss gap-[10px]">
              {body === 0 ? <p>/ One Student</p> : <p>/ Per Student</p>}
              <p className="font-[700] text-[#090914]">
                {type === "month" ? <>₦ {amount}</> : <>₦ {amount * 12}</>}
              </p>
            </div>
          </div>

          {body === 1 && (
            <div className="cflexss gap-[11px] w-full">
              <p>Number of students</p>
              <div className="inputCont2">
                <input
                  className="input"
                  type="text"
                  name="numberOfStudents"
                  placeholder="Number of students"
                  ref={nStd}
                  value={paymentDetails["numberOfStudents"]}
                  onChange={handleChange}
                />
              </div>
              {/* {emailError && (
                <p className="err">* Fill in a valid email address</p>
              )} */}
            </div>
          )}

          <div className="font-[700] text-[#090914] w-full flexsm gap-[20px]">
            <p>Do you have a promo code? </p>
            <ChevronUpOutline size="16px" />
          </div>

          {type === "annum" && (
            <div className="w-full cflexss gap-[11px]">
              <p>Discount</p>
              <div className="flexbs w-full font-[700] text-[#090914] gap-[10px]">
                <p>3%</p>
                <p>
                  ₦{" "}
                  {body === 0
                    ? `${(3 * amount * 12) / 100}`
                    : `${
                        (parseInt(paymentDetails["numberOfStudents"]) *
                          (3 * amount * 12)) /
                        100
                      }`}
                </p>
              </div>
            </div>
          )}

          <div className="w-full flexbm text-[24px] lg:text-[22px] ls:text-[20px] font-[700] text-[#090914]">
            <p>Total Due</p>
            {type === "annum" ? (
              <>
                <p>
                  ₦{" "}
                  {body === 0
                    ? `${amount * 12 - (3 * amount * 12) / 100}`
                    : `${
                        parseInt(paymentDetails["numberOfStudents"]) *
                          amount *
                          12 -
                        (parseInt(paymentDetails["numberOfStudents"]) *
                          (3 * amount * 12)) /
                          100
                      }`}
                </p>
              </>
            ) : (
              <>
                <p>
                  ₦{" "}
                  {body === 0
                    ? `${amount}`
                    : `${
                        parseInt(paymentDetails["numberOfStudents"]) * amount
                      }`}
                </p>
              </>
            )}
          </div>
          <div className="w-full flexbs gap-[20px] flex-wrap">
            <div className="cflexss gap-[11px] w-[60%]">
              <p>Name on Card</p>
              <div className="inputCont2">
                <input
                  className="input"
                  type="text"
                  name="cardName"
                  placeholder="Name on Card"
                  value={paymentDetails["cardName"]}
                  onChange={handleChange}
                />
              </div>
              {exceedChar === "cardName" && (
                <p className="text-red-800 text-[12px]">
                  *can't exceed 50 characters
                </p>
              )}
            </div>
            <div className="cflexss gap-[11px] w-[30%]">
              <p>Expiry</p>
              <div className="inputCont2">
                <input
                  className="input"
                  type="month"
                  name="expDate"
                  placeholder="MM/YY"
                  value={paymentDetails["expDate"]}
                  onChange={handleChange}
                />
              </div>
              {exceedChar === "expDate" && (
                <p className="text-red-800 text-[12px]">
                  *can't accept expired card
                </p>
              )}
            </div>
          </div>

          <div className="w-full flexbs gap-[20px] flex-wrap">
            <div className="cflexss gap-[11px] w-[60%]">
              <p>Card number</p>
              <div className="inputCont2">
                <input
                  className="input"
                  type="text"
                  name="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  value={paymentDetails["cardNumber"]}
                  onChange={handleChange}
                />
              </div>
              {!numbValid && (
                <p className="text-red-800 text-[12px]">
                  *Credit Card digits must be within the range of 12 and 16.
                </p>
              )}
            </div>
            <div className="cflexss gap-[11px] w-[30%]">
              <p>CVV</p>
              <div className="inputCont2">
                <input
                  className="input"
                  type="password"
                  name="cvv"
                  value={paymentDetails["cvv"]}
                  onChange={handleChange}
                  minLength="12"
                />
              </div>
              {exceedChar === "cvv" && (
                <p className="text-red-800 text-[12px]">
                  *can't exceed 7 characters
                </p>
              )}
            </div>
          </div>
          {body === 0 ? (
            <>
              {error && (
                <p className="text-red-800 text-[12px]">
                  *All fields are required
                </p>
              )}
            </>
          ) : (
            <>
              {error === true && !paymentDetails["numberOfStudents"] > 0 && (
                <p className="text-red-800 text-[12px]">
                  *All fields are required
                </p>
              )}
            </>
          )}
          <button
            className="bg-sec1 w-full text-white font-[600] text-[19px] lg:text-[17px] flexmm px-[52px] py-[20px] sm:py-[15px] rounded-full sm:w-full cursor-pointer"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : <p>Pay Now</p>}
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
