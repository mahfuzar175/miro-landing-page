import { useState } from "react";
import Nocontent from "../assets/images/NoContent.jpg";
import Crazy from "../assets/images/Crazy.png";
import Diamond from "../assets/images/Diamond.svg";
import Figma from "../assets/images/figma.svg";
import Notion from "../assets/images/Notion.svg";
import Xd from "../assets/images/Xd.png";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const BuildAllTeam = () => {
  const [tab, setTab] = useState("UX & Design");

  const allTeam = [
    "UX & Design",
    "Marketing",
    "Product Management",
    "Engineering",
    "Consultants",
    "Agile Coaches",
    "Sale",
  ];

  const handleTab = (teamTab) => {
    setTab(teamTab);
  };

  return (
    <div className="py-3 md:py-7 lg:py-10 space-y-6 lg:space-y-9 lg:mt-16 overflow-hidden relative font-inter">
      <h1 className="text-3xl lg:text-[42px] font-bold text-[#050038] my-4">
        Built for all kinds of teams
      </h1>
      {/*all tabs */}
      <div>
        <ul className="flex flex-wrap gap-2 lg:gap-4 mb-3 items-center">
          {allTeam?.map((teamTab) => (
            <li
              onClick={() => handleTab(teamTab)}
              key={teamTab}
              className={`${
                tab === teamTab
                  ? " border border-none rounded-full bg-slate-100 text-slate-600 px-4 py-3 font-medium "
                  : "border rounded-full px-4 py-3 font-medium"
              } text-sm cursor-pointer`}
            >
              {teamTab}
            </li>
          ))}
        </ul>
      </div>

      {tab === "UX & Design" && (
        <div className="grid grid-cols-1  lg:grid-cols-5  mt-5 lg:mt-8">
          <div className="col-span-2 order-2 lg:order-1 space-y-3 mt-6">
            <ul className="flex flex-col text-slate-600 space-y-2">
              <li className="flex  items-center gap-3 text-[18px] ">
                <span>
                  <FaCheck />
                </span>
                <p>Build low-fi wireframes</p>
              </li>
              <li className="flex  items-center gap-3 text-[18px] ">
                <span>
                  <FaCheck />
                </span>
                <p>
                  Involve stakeholders in the <br /> design process
                </p>
              </li>
              <li className="flex  items-center gap-3 text-[18px] ">
                <span>
                  <FaCheck />
                </span>
                <p>Run engaging design workshops</p>
              </li>
            </ul>
            <button className="flex items-center gap-2 py-2  text-blue-600 hover:text-blue-800">
              Learn more <FaArrowRight className="text-[13px] mt-1" />{" "}
            </button>

            <div className="pt-10 lg:pt-20">
              <h4 className="text-slate-700 mb-5">Integrate your favorite tools</h4>
              <div className="flex items-center gap-4 py-2">
                <img src={Diamond} alt="icon" />
                <img className="w-6" src={Xd} alt="xd" />
                <img src={Figma} alt="icon" />
                <img src={Notion} alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-span-3 order-1 lg:order-2">
            <img
              className="w-full"
              src={Crazy}
              alt="built image"
            />
          </div>
        </div>
      )}
      {tab !== "UX & Design" && (
        <div className="h-[350px] flex items-center border-slate-700 justify-center w-full">
          <img className="w-[500px]" src={Nocontent} alt="" />
        </div>
      )}
    </div>
  );
};

export default BuildAllTeam;
