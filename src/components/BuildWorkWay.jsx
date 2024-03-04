import { useState } from "react";
import BrainStorm from "../assets/images/Brainstorm.png";
import Nocontent from "../assets/images/NoContent.jpg";
import { FaArrowRight } from "react-icons/fa";
const BuildWorkWay = () => {
  const [tab, setTab] = useState("Brainstorming");

  const work = [
    "Brainstorming",
    "Diagramming",
    "Meetings & Workshops",
    "Scrum Events",
    "Mapping",
    "Research Design",
    "Strategic Planning",
  ];

  const handleTab = (workTab) => {
    setTab(workTab);
  };

  return (
    <div className="py-3 md:py-7 lg:py-10 space-y-6 lg:space-y-9 lg:mt-16 overflow-hidden relative font-inter">
      <h1 className="text-3xl lg:text-[42px] font-bold text-[#050038] my-4">
        Built for the way you work
      </h1>
      {/*all tabs */}
      <div>
        <ul className="flex flex-wrap gap-2 lg:gap-4 mb-3 items-center">
          {work?.map((workTab) => (
            <li
              onClick={() => handleTab(workTab)}
              key={workTab}
              className={`${
                tab === workTab
                  ? " border border-none rounded-full bg-slate-100 text-slate-600 px-4 py-3 font-medium "
                  : "border rounded-full px-4 py-3 font-medium"
              } text-sm cursor-pointer`}
            >
              {workTab}
            </li>
          ))}
        </ul>
      </div>

      {tab === "Brainstorming" && (
        <div className="grid grid-cols-1 items-centr lg:grid-cols-5">
          <div className="col-span-2 order-2 lg:order-1 space-y-3 lg:mt-12 mt-6">
            <h3 className="text-lg text-slate-700 font-medium">
              Brainstorming
            </h3>
            <p className="text-base text-slate-700">
              Unleash creative ideas and build on <br /> them with the help of
              sticky notes, <br /> images, mind maps, videos, drawing <br />{" "}
              capabilities — the list goes on.
            </p>
            <button className="flex items-center gap-2 py-2  text-blue-600 hover:text-blue-800">
              Learn more <FaArrowRight className="text-[13px] mt-1" />{" "}
            </button>
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <img
              className="w-full"
              src={BrainStorm}
              alt="Brain_image"
            />
          </div>
        </div>
      )}
      {tab !== "Brainstorming" && (
        <div className="h-[350px] flex items-center border-slate-700 justify-center w-full">
          <img className="w-[500px]" src={Nocontent} alt="" />
        </div>
      )}
    </div>
  );
};

export default BuildWorkWay;
