import { FaArrowRight } from "react-icons/fa6";
import connect from "../assets/images/connect.png";
const Connect = () => {
  return (
    <div className="py-3 md:py-5 lg:py-12 overflow-hidden font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        {/* image section */}
        <div className="lg:mx-0 md:mx-auto mb-8 lg:mb-0">
          <img className="w-[420px]" src={connect} alt="connect_image" />
        </div>
        {/* details section */}
        <div className="space-y-1 lg:space-y-5">
        <h1 className=" text-[#050038] text-2xl md:text-3xl lg:text-5xl font-bold">
            Connect your tools, <br /> close your tabs
          </h1>
          <p className="text-slate-500 text-[17px] lg:w-[80%]">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <button className="flex items-center gap-2 py-2 underline text-blue-600 hover:text-blue-800">
            Learn more <FaArrowRight className="text-[13px] mt-1" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
