import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { LuMoveRight } from "react-icons/lu";
import banner from "../assets/images/banner.png";
import img1 from "../assets/images/G.png";
import img2 from "../assets/images/GetApp.png";
import img3 from "../assets/images/Capterra.png";

const Banner = () => {
  return (
    <div className="lg:h-[vh] overflow-hidden pb-4 w-full flex justify-center items-center font-inter">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-btween mt-5 lg:mt-14">
        <div className="lg:w-[48%] mt-6 lg:mt-0 space-y-3">
          <h1 className="text-[#050038] text-4xl font-bold lg:text-5xl">
            Take ideas from better to best
          </h1>
          <p className="text-slate-700 my-2 mb-2 text-[17px]">
            Miro is your team's visual platform to connect, <br /> collaborate,
            and create — together.
          </p>
          <div className="space-y-3 my-2 pt-3">
            <input
              className="w-full rounded-full border border-slate-500 outline-none focus:border-blue-500 py-2 px-4"
              type="text"
              placeholder="Enter your work email"
            />
            <button className=" flex items-center font-normal w-full justify-center gap-1 lg:gap-2  bg-[#4262FF] px-4 lg:px-5 py-2 text-[15px] lg:text-[17px] lg:py-[9px] rounded-full text-white">
              Sign up free <LuMoveRight className="mt-[2px] " />
            </button>
            <p className="text-slate-500 text-[16px]">
              Collaborate with your team within minutes
            </p>
          </div>
          <div className="py-7">
            <div className="bg-gray-200  lg:w-[90%]  rounded-md">
              <div className="flex items-center lg:flex-row flex-col gap-3 px-4 py-2">
                <div>
                  <div className="flex items-center gap-">
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStar className="text-[#ff9d48] text-[24px]" />
                    <IoMdStarHalf className="text-[#ff9d48] text-[24px]" />
                  </div>
                  <h3 className="text-[10px] text-[#050038] font-semibold">
                    Based on 5149+ reviews:{" "}
                  </h3>
                </div>
                <div className="flex items-center gap-4 lg:ml-2">
                  <img className="w-[25px]" src={img1} alt="logo" />
                  <img className="w-[75px]" src={img2} alt="logo" />
                  <img className="w-[75px]" src={img3} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={banner}
            className=" w-full md:w-full lg:w-[640px] lg:h-[442px]"
            alt="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
