import { useState } from "react";
import NavBar from "@/AtomicComponents/NavBar";
import Footer from "@/AtomicComponents/Footer";
import { ArrowRightOutline } from "heroicons-react";
import Button from "@/AtomicComponents/Button";
import Payment from "./Payment";

const Price = () => {
  const [pay, setPay] = useState(false);
  const [amount, setAmount] = useState(0);
  const [body, setBody] = useState(0);
  const [type, setType] = useState("month");

  const PaymentData = [
    {
      type: "month",
      card: [
        {
          label: "Individual Student",
          amount: "1500",
          rating: "Per month",
          content:
            "Gain complete access to all features and videos & enjoy unlimited usage for one month.",
        },
        {
          label: "Schools/Institution",
          amount: "1200",
          rating: "Per month/ Per student",
          content:
            "Gain complete access to all features and videos & enjoy unlimited usage for one month.",
        },
      ],
    },
    {
      type: "annum",
      card: [
        {
          label: "Individual Student",
          amount: "1500",
          rating: "Per annum",
          content:
            "Gain complete access to all features and videos & enjoy unlimited usage for one month.",
        },
        {
          label: "Schools/Institution",
          amount: "1200",
          rating: "Per annum/ Per student",
          content:
            "Gain complete access to all features and videos & enjoy unlimited usage for one month.",
        },
      ],
    },
  ];
  return (
    <>
      <NavBar active={3} background={"#FFF9D2"} />
      {pay ? (
        <>
          <Payment type={type} pay={pay} setPay={setPay} amount={amount} body={body} />
        </>
      ) : (
        <>
          <div className="cflexss w-full bg-[#FFF9D2] pt-[180px] sm:pt-[92px] px-xpadding pb-[3em] text-[24px] lg:text-[20px] ls:text-[18px] font-[400]">
            <div className="w-full cflexsm gap-[24px] text-center pb-[6em]">
              <p>Pricing That Supports Learning Adventures</p>
              <p className="font-[700] text-[40px] lg:text-[35px] ls:text-[24px] max-w-[25em]">
                Welcome to Curious Kids' Pricing Page! We believe in making
                quality education and engaging content accessible to all young
                minds.
              </p>
              <p className="max-w-[45em]">
                Our pricing structure is designed to cater to both individual
                learners and educational institutions, ensuring that the journey
                of curiosity and learning is open to everyone.
              </p>
              <div className="flexss sm1:justify-center gap-[1em] font-[700] text-[19px] ls:text-[17px] flex-wrap sm1:w-full mt-[2em] p-[0.5em] bg-[#FFF9D2] rounded-full sm:rounded-[15px] shadow-md sm:shadow-md">
                <div
                  className="sm:flex flex-grow"
                  onClick={() => {
                    setType("month");
                  }}
                >
                  <Button
                    className={
                      type === "month"
                        ? "border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[0.5em] px-[52px] py-[20px] rounded-full sm:w-full transition duration-500 ease-in-out"
                        : "border-[0.2em] border-sec1 text-sec1 flexmm gap-[0.5em] px-[52px] py-[20px] rounded-full sm:w-full transition duration-500 ease-in-out"
                    }
                  >
                    <p>Cost per Month ₦</p>
                  </Button>
                </div>
                <div
                  className="sm:flex flex-grow"
                  onClick={() => {
                    setType("annum");
                  }}
                >
                  <Button
                    className={
                      type === "month"
                        ? "border-[0.2em] border-sec1 text-sec1 flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full transition duration-500 ease-in-out"
                        : "border-[0.2em] border-sec1 bg-sec1 text-white flexmm gap-[0.5em] px-[2.5em] py-[1em] rounded-full sm:w-full transition duration-500 ease-in-out"
                    }
                  >
                    <p>Cost per Annum ₦</p>
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-full flexmm text-[28px] lg:text-[24px] ls:text-[20px] font-[400] gap-[40px] md:flex-wrap">
              {PaymentData.map((item, i) => {
                return (
                  <>
                    {item.type === type && (
                      <>
                        {item.card.map((card, i) => {
                          return (
                            <>
                              <div className="w-[569px] flex-shrink rounded-[40px] sm:rounded-[30px] text-[#808080] bg-[#FFF] px-[40px] py-[60px] cflexss gap-[40px]">
                                <div className="w-full text-[#222] font-[700] cflexss">
                                  <p>{card.label}</p>
                                  <div className="w-full cflexmm">
                                    <p className="w-full text-[100px] lg:text-[80px] ls:text-[40px]">
                                      {item.type === "month"
                                        ? card.amount
                                        : card.amount * 12}
                                    </p>
                                    <p className="w-full flexss text-[#808080] font-[400]">
                                      {card.rating}
                                    </p>
                                  </div>
                                </div>
                                <div className="w-full cflexss gap-[15px]">
                                  <div
                                    className="border-[1px] border-sec1 w-full font-[700] text-sec1 flexmm gap-[0.5em] px-[52px] py-[20px] sm:py-[15px] rounded-full sm:w-full transition duration-500 ease-in-out cursor-pointer"
                                    onClick={() => {
                                      setPay(true);
                                      setBody(i);
                                      setAmount(amount);
                                      console.log("payment");
                                    }}
                                  >
                                    <p>Get Started</p>
                                  </div>
                                  <p>{card.content}</p>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Price;
