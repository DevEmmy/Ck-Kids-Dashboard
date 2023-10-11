import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Payment({ type, pay, setPay, amount, body }) {
  console.log(amount);
  const config = {
    public_key: "FLWPUBK-**************************-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="flexmm w-full bg-[#FFF9D2] pt-[180px] sm:pt-[92px] px-xpadding text-[#808080] pb-[3em] text-[20px] lg:text-[18px] ls:text-[16px] font-[400]">
      <form className="px-[35px] py-[50px] w-[603px] flex-shrink rounded-[40px] sm:rounded-[25px] sm:px-[5%] bg-[#FFF] cflexss gap-[24px]">
        <h1>Hello Test user</h1>

        {/* <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
        >
          Payment with React hooks
        </button> */}
        <button
          className="bg-sec1 w-full text-white font-[600] text-[19px] lg:text-[17px] flexmm px-[52px] py-[20px] sm:py-[15px] rounded-full sm:w-full cursor-pointer"
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
        >
          <p>Pay Now</p>
        </button>
      </form>
    </div>
  );
}
