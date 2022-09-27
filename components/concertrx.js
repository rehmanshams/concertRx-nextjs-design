import React, { useState } from "react";

export const concertrx = () => {
  const [faq, setFaq] = useState(0);

  return (
    <div className="w-full max-w-[1920px] h-full mx-auto">
      <div className="w-full item-center truncate	   place-content-center	 flex justify-centre  align-center ">
        <div className="w-full alii h-[570px] absolute ">
          <div className="flex justify-center w-full align-center text-center">
            <img src=""></img>
          </div>
        </div>
        <div className="absolute flex w-full max-w-[1440px] justify-between">
          <div>
            <img
              className="ml-[85px] mt-5"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20%281%29.svg"
            ></img>
          </div>
          <div>
            <nav className="flex gap-6	  font-satoshi text-sm font-medium	 pt-[36px]">
              <ul className="cursor-pointer">Product</ul>
              <ul className="cursor-pointer">Our Story</ul>
              <ul className="cursor-pointer">Pricing</ul>
            </nav>
          </div>
          <div>
            <button className="text-white mt-[22px] cursor-pointer font-satoshi font-bold text-sm bg-black w-[123px] h-[42px] mr-[85px] rounded-l-full  rounded-r-full text-center">
              Get Started
            </button>
          </div>
        </div>

        <div className="absolute align-center text-center 1 w-full max-w-[1440px]">
          <div className="">
            <p className="text-[#27272A] pt-[182px] font-satoshi font-bold text-5xl">
              Plans & Pricing
            </p>
            <p className="font-lg	tracking-tighter mt-4	 text-base font-satoshi text-[#27272A]">
              We’re working on a suit of tools to make managing complex systems{" "}
              <br></br>easier, for everyone. We can’t wait to hear what you
              think
            </p>
          </div>

          <div className="grid grid-cols-3 h-full gap-x-4		mt-24	">
            <div className="bg-white standard  rounded-lg ml-[30px] w-[405px] h-[516px]">
              <p className="font-satoshi text-[24px] font-medium	mr-[210px] mt-[44px]">
                Standard
              </p>
              <p className="font-satoshi  text-xs	 mr-[180px] font-medium">
                Hit the Ground Running
              </p>
              <p className="font-satoshi mt-3	  text-5xl mr-[155px] font-bold	">
                $29.95
              </p>
              <p className=" font-bold ml-[60px] mt-[-30px]">/ month</p>
              <div>
                <img
                  className="mt-[44px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[145px]">
                  Unlimited boards
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[145px]">
                  Free SENDER ID
                </p>
              </div>

              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[145px]">
                  IP address login
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[55px]">
                  Buy SMS credits for $0.1 / credit
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[105px]">
                  GST included in pricing
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[125px]">
                  Credits do not expire
                </p>
              </div>
              <button className="w-[313px] h-[40px] text-white font-satoshi mt-[18.4px] font-medium rounded-full border-2 bg-black">
                Get Started
              </button>
            </div>
            <div className=" bg-white standard rounded-lg	ml-[30px] w-[405px] h-[516px]">
              <p className="font-satoshi text-[24px] font-medium	mr-[270px] mt-[44px]">
                Pro
              </p>
              <p className="font-satoshi text-xs	 mr-[180px] font-medium">
                Power up your business
              </p>
              <p className="font-satoshi text-[48px] mr-[155px] font-bold	">
                $39.95
              </p>
              <p className=" font-bold ml-[60px] mt-[-40px]">/ month</p>
              <div>
                <img
                  className="mt-[44px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[115px]">
                  Everything in Standard
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[135px]">
                  Two way messaging
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[175px]">
                  One chatbot
                </p>
              </div>
              <div>
                <button className="w-[313px] h-[40px] text-[#71717A] font-satoshi mt-[130px] font-medium rounded-full border-2 bg-white">
                  {" "}
                  Coming Soon
                </button>
              </div>
            </div>
            <div className=" bg-white standard rounded-lg	ml-[10px] w-[405px] h-[516px]">
              <p className="font-satoshi text-[24px] font-medium	mr-[220px] mt-[44px]">
                Pro Plus
              </p>
              <p className="font-satoshi text-xs	 mr-[180px] font-medium">
                Customized just for you{" "}
              </p>
              <p className="font-satoshi text-[48px] mr-[155px] font-bold	">
                $89.95
              </p>
              <p className=" font-bold ml-[60px] mt-[-40px]">/ month</p>
              <div>
                <img
                  className="mt-[44px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[145px]">
                  Everything in Pro
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[85px]">
                  Print address labels locally
                </p>
              </div>
              <div>
                <img
                  className="mt-[24px] ml-[50px]"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector%20%282%29.svg"
                ></img>
                <p className="text-sm	 font-normal mt-[-15px] font-satoshi	mr-[63px]">
                  Integration with Australia Post
                </p>
              </div>
              <div>
                <button className="w-[313px] h-[40px] text-[#71717A] font-satoshi mt-[130px] font-medium rounded-full border-2 bg-white">
                  {" "}
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="w-[1300px] h-[145px] ml-[25px] bg-[#FAFAFA] rounded-lg	mt-[54px]">
              <p className="font-satoshi font-bold	text-base float-left ml-[24px] mt-[24px]">
                Note:
              </p>
              <br></br>
              <p className="float-left font-normal  text-sm mt-[30px] font-satoshi ml-[-40px] ">
                1.&nbsp;Pricing is subject to change{" "}
              </p>
              <p className="float-left mt-[52px] text-sm font-normal  ml-[-190px] font-satoshi">
                2.&nbsp;Transactions are processed in Australian Dollars (AUD).
              </p>
              <p className="float-left mt-[2px] text-sm 	font-normal ml-[20px] font-satoshi">
                3.&nbsp; We use Stripe to process your payment. It's the same
                payment provider used by products such as Twitter, Pinterest,
                and Lyft. We do not handle your credit card information
                directly.
              </p>
            </div>
            <div>
              <p className="text-[48px] font-bold font-satoshi mt-[116px] text-[#27272A]">
                Frequently asked questions
              </p>
              <br></br>
              <p className="text-lg font-satoshi font-normal	text-[#52525B]">
                Everything you need to know about the product and billing.
              </p>
            </div>
            <div className="w-full max-w-[800px] mx-auto">
              <div
                onClick={() => {
                  faq !== null ? setFaq(0) : setFaq(null);
                }}
                className="flex cursor-pointer justify-between w-full	 mt-10"
              >
                <p className="text-lg  font-satoshi font-medium	text-[#27272A]  text-left">
                  Is there a free trial available?
                </p>
                <button>
                  {faq == 1 ? (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className={`${faq === 0 ? "block" : "hidden"}`}>
                {" "}
                <p className="font-satoshi text-left font-normal transition-all	 text-[#52525B] text-base w-full">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-<br></br>minute
                  onboarding call to get you up and running as soon as possible.
                </p>
              </div>

              <div className="border-b  border-gray-300	 mt-[62px] w-[825px]"></div>
              <div
                onClick={() => {
                  faq !== null ? setFaq(2) : setFaq(null);
                }}
                className="flex cursor-pointer justify-between w-full	 mt-10"
              >
                <p className="text-lg  font-satoshi font-medium	text-[#27272A]  text-left">
                  Can I change my plan later?
                </p>
                <button>
                  {faq == 2 ? (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className={`${faq === 2 ? "block" : "hidden"}`}>
                {" "}
                <p className="font-satoshi text-left font-normal transition-all	 text-[#52525B] text-base w-full">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-<br></br>minute
                  onboarding call to get you up and running as soon as possible.
                </p>
              </div>
              <div className="border-b  border-gray-300	 mt-[22px] w-[825px]"></div>

              <div
                onClick={() => {
                  faq !== null ? setFaq(3) : setFaq(null);
                }}
                className="flex cursor-pointer justify-between w-full	 mt-10"
              >
                <p className="text-lg  font-satoshi font-medium	text-[#27272A]  text-left">
                  What is your cancellation policy?{" "}
                </p>
                <button>
                  {faq == 3 ? (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className={`${faq === 3 ? "block" : "hidden"}`}>
                {" "}
                <p className="font-satoshi text-left font-normal transition-all	 text-[#52525B] text-base w-full">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-<br></br>minute
                  onboarding call to get you up and running as soon as possible.
                </p>
              </div>
              <div className="border-b  border-gray-300	 mt-[22px] w-[825px]"></div>

              <div
                onClick={() => {
                  faq !== null ? setFaq(4) : setFaq(null);
                }}
                className="flex cursor-pointer justify-between w-full	 mt-10"
              >
                <p className="text-lg  font-satoshi font-medium	text-[#27272A]  text-left">
                  Can other info be added to an invoice?{" "}
                </p>
                <button>
                  {faq == 4 ? (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className={`${faq === 4 ? "block" : "hidden"}`}>
                {" "}
                <p className="font-satoshi text-left font-normal transition-all	 text-[#52525B] text-base w-full">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-<br></br>minute
                  onboarding call to get you up and running as soon as possible.
                </p>
              </div>
              <div className="border-b  border-gray-300	 mt-[22px] w-[825px]"></div>

              <div
                onClick={() => {
                  faq !== null ? setFaq(5) : setFaq(null);
                }}
                className="flex cursor-pointer justify-between w-full	 mt-10"
              >
                <p className="text-lg  font-satoshi font-medium	text-[#27272A]  text-left">
                  Can other info be added to an invoice?{" "}
                </p>
                <button>
                  {faq == 5 ? (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className={`${faq === 5 ? "block" : "hidden"}`}>
                {" "}
                <p className="font-satoshi text-left font-normal  transition-all	 text-[#52525B] text-base w-full">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-<br></br>minute
                  onboarding call to get you up and running as soon as possible.
                </p>
              </div>
              <div className="border-b  border-gray-300	 mt-[22px] w-[825px]"></div>
              <div
                onClick={() => {
                  faq !== null ? setFaq(6) : setFaq(null);
                }}
                className="flex cursor-pointer justify-between w-full	 mt-10"
              >
                <p className="text-lg  font-satoshi font-medium	text-[#27272A]  text-left">
                  Can other info be added to an invoice?{" "}
                </p>
                <button>
                  {faq == 6 ? (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7V15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                        stroke="#48B649"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className={`${faq === 6 ? "block" : "hidden"}`}>
                {" "}
                <p className="font-satoshi text-left transition-all leading-6	 font-normal text-[#52525B] text-base w-full">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-<br></br>minute
                  onboarding call to get you up and running as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ali h-[900px] absolute mt-[2200px]">
          <div className=" absolute align-center  text-center justify-center w-full">
            <div className="flex justify-center w-full align-center text-center">
              <img
                className=" mt-[100px]"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ConcertRx-full-logo.svg"
              ></img>
            </div>
            <div className="flex justify-center w-full align-center text-center ">
              <div className=" justify-center">
                <nav className="float-left ml-[90px] mt-[64px] text-[20px] font-bold font-satoshi  gap-[130px]">
                  <ul className=" text-[20px] font-bold font-satoshi ">
                    Product
                  </ul>
                  <ul className="font-medium	text-[15px] mt-[30px] pr-[38px] font-satoshi text-[#3F3F46]">
                    Login
                  </ul>
                  <ul className="font-medium pr-[30px]	text-[15px] mt-[12px] font-satoshi text-[#3F3F46]">
                    Pricing
                  </ul>
                  <ul className="font-medium	text-[15px] mt-[12px] pr-[49px] font-satoshi text-[#3F3F46]">
                    ----
                  </ul>
                  <ul className="font-medium	pr-[55px] text-[15px] mt-[12px]  font-satoshi text-[#3F3F46]">
                    ---
                  </ul>
                </nav>
              </div>
              <div className=" justify-center">
                <nav className="float-left ml-[90px] mt-[64px] text-[20px] font-bold font-satoshi  gap-[120px]">
                  <ul className=" text-[20px] pr-[40px] font-bold font-satoshi ">
                    Use Cases
                  </ul>
                  <ul className="font-medium	text-[15px] mt-[30px] pl-[4px] font-satoshi text-[#3F3F46]">
                    Ozempic Waiting List
                  </ul>
                  <ul className="font-medium	text-[15px]  pl-[24px] mt-[12px] font-satoshi text-[#3F3F46]">
                    Compounding Workflow
                  </ul>
                  <ul className="font-medium	pr-[5px] text-[15px] mt-[12px] font-satoshi text-[#3F3F46]">
                    Vaccination Journey{" "}
                  </ul>
                  <ul className="font-medium pr-[42px]	text-[15px] mt-[12px] font-satoshi text-[#3F3F46]">
                    Special Orders
                  </ul>
                  <ul className="font-medium	text-[15px] pr-[42px] mt-[12px] font-satoshi text-[#3F3F46]">
                    Drug Journeys
                  </ul>
                </nav>
              </div>
              <div className=" justify-center">
                <nav className="float-left ml-[90px] mt-[64px] text-[20px] font-bold font-satoshi  gap-[120px]">
                  <ul className=" text-[20px] font-bold font-satoshi ">
                    Company
                  </ul>
                  <ul className="font-medium	text-[15px] mt-[30px] pr-[25px] font-satoshi text-[#3F3F46]">
                    About Us
                  </ul>
                  <ul className="font-medium	text-[15px]  pr-[38px]  mt-[12px] font-satoshi text-[#3F3F46]">
                    Careers
                  </ul>
                  <ul className="font-medium	  pr-[54px] text-[15px] mt-[12px] font-satoshi text-[#3F3F46]">
                    FAQs
                  </ul>
                </nav>
              </div>
              <div className=" justify-center">
                <nav className="float-left ml-[90px] mt-[64px] text-[20px] font-bold font-satoshi  gap-[120px]">
                  <ul className=" text-[20px] font-bold pr-[85px] font-satoshi ">
                    Support
                  </ul>
                  <ul className="font-medium	text-[15px]  mt-[30px] font-satoshi text-[#3F3F46]">
                    Australia: 0482 097 007
                  </ul>
                  <ul className="font-medium	text-[15px] mt-[12px] font-satoshi text-[#3F3F46]">
                    United Kingdom: 07700 <br></br>
                  </ul>
                  <ul className="font-medium	text-[15px] pr-[113px] font-satoshi text-[#3F3F46]">
                    174007
                  </ul>
                  <a
                    className="font-medium	text-[15px] mt-[12px] font-satoshi text-[#3F3F46]"
                    href="https://concertrx.com"
                  >
                    support@concertrx.com
                  </a>
                </nav>
              </div>
              <div className=" justify-center">
                <nav className="float-right ml-[158px] mt-[64px] text-[20px] font-bold font-satoshi  gap-[120px]">
                  <ul className=" text-[20px] font-bold mr-[38px] font-satoshi ">
                    Contact us
                  </ul>
                  <a href="https://www.google.com/maps/dir/33.7310091,73.0745198/447+High+St,+Penrith+NSW+2750,+Australia/@-0.0085372,72.0334226,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x6b1285f4a4b46f49:0x84e7ae168ef6d42c!2m2!1d150.6972232!2d-33.7532502">
                    <img
                      className="mr-[40px] mt-[30px]"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon.svg"
                    ></img>
                  </a>

                  <ul className="font-medium	text-[15px] ml-[30px] mt-[-30px] font-satoshi text-[#3F3F46]">
                    447 High Street, Penrith,<br></br>
                  </ul>
                  <ul className="font-medium	text-[15px]  font-satoshi text-[#3F3F46]">
                    NSW 2750 Australia.
                  </ul>
                  <a href="https://www.microsoft.com/en-ww/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook">
                    <img
                      className="mt-[15px]"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon%20%281%29.svg"
                    ></img>
                  </a>
                  <ul className="font-medium	 pl-[10px] cursor-pointer text-[15px] mt-[-24px] font-satoshi text-[#3F3F46]">
                    hello@concertrx.com
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex justify-center mt-[74px] cursor-pointer ml-[100px]">
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%2031.svg"></img>
            </div>
            <div className="gap-[20px] mt-[42px] font-medium	font-satoshi text-base ml-[175px] flex justify-center">
              <a href="https://concertrx.com/privacy-policy">Privacy Policy</a>
              <h1 className="border-r-2 ml-[10px] border-[#52525B]"></h1>
              <a href="https://concertrx.com/terms-conditions">
                Terms and Conditions
              </a>
              <h1 className="border-r-2 ml-[10px] border-[#52525B]"></h1>

              <a href="https://concertrx.com/eula">EULA</a>
              <h1 className="border-r-2 ml-[10px] border-[#52525B]"></h1>

              <a href="https://concert-rx-client.vercel.app/security">
                Security
              </a>
              <h1 className="border-r-2 ml-[10px] border-[#52525B]"></h1>

              <button>Site Map</button>
            </div>
            <div className="flex justify-center mt-[32px] align-center text-center text-base font-satoshi font-medium	text-[#3F3F46] ml-[80px]">
              <p>
                Copyright © 2022 ConcertRx Pty Ltd and/or its subsidiaries or
                affiliates. All Rights Reserved. ConcertRx certain product names
                used herein are trademarks or registered<br></br> trademarks of
                ConcertRx Pty Ltd and/or one of its subsidiaries or affiliates
                in Australia and/or other countries. Any other trademarks
                contained herein are the property of<br></br> their respective
                owners.
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs	 ml-[40px] font-satoshi font-normal text-[#52525B] mt-[32px]">
                Powered by
              </p>
            </div>
            <div className="text-center">
              <p className="text-[36px] ml-[40px] font-satoshi font-normal text-[#27272A] mt-[]">
                GigaRx
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm	 ml-[40px] font-satoshi font-normal text-[#27272A] mt-[]">
                CAPITAL
              </p>
            </div>
          </div>
          <div className="w-full  justify-center  box h-[353px] ">
            <div className=" w-full align-center ">
              <div className=" ml-[110px]">
                <p className="font-bold	text-[40px] text-[#27272A] pt-[100px] font-satoshi ">
                  Want to receive product updates?
                </p>
              </div>
              <div className="leading-8">
                <p className="font-lg	 text-[18px] text-[#52525B] mt-[1px]  ml-[110px] font-satoshi ">
                  To opt-in to our text message update service.
                </p>
                <p className="font-lg	 text-[18px] text-[#52525B] mt-[-30px] ml-[110px] font-satoshi ">
                  <br></br>Text YES to{" "}
                  <a className="underline" href="tel:+61482097007">
                    +61482 097 007
                  </a>{" "}
                  OR Scan the QR code.
                </p>
                <br></br>
                <p className="font-lg	 text-[18px] text-[#52525B] mt-[-30px]  ml-[110px] font-satoshi ">
                  You can send STOP to unsubscribe anytime.
                </p>
              </div>
            </div>
            <div className="mr-[110px]">
              <div className="  ml-[1100px] mt-[-140px] cursor-pointer flex justify-center align-center text-center">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Frame%20813064.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default concertrx;
