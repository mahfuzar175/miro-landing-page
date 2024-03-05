import { LuMoveRight } from "react-icons/lu";
import VmWare from "../assets/images/VmWare.png";
import Docus from "../assets/images/DocuSign.png";
import Frog from "../assets/images/Frog.png";
import person1 from "../assets/images/Person1.png";
import person2 from "../assets/images/Person2.png";
import person3 from "../assets/images/Person3.png";

const Review = () => {
  return (
    <div className="overflow-hidden py-3 md:py-7 lg:py-10 lg:mt-10 font-inter">
      {/* heading */}
      <div>
        <h1 className="text-center  text-[#050038] text-2xl md:text-3xl lg:text-5xl font-bold">
          Loved by the world's best teams
        </h1>
        <div className="text-center pt-6">
          <button className="btn text-xs lg:text-base font-normal lg:gap-2 border border-[#4262FF] bg-white hover:border-none hover:text-white hover:bg-blue-800 px-4 lg:px-7 lg:py-3 rounded-full text-blue-500">
            <div className="flex gap-1 items-center">
              See all customer stories
              <span>
                <LuMoveRight className="mt-[2px] " />
              </span>
            </div>
          </button>
        </div>
      </div>
      {/* Cards section */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 mt-5 md:mt-6 lg:mt-16 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
          {/* first card */}
          <div className="lg:h-[330px] flex flex-col">
            <img className="w-[200px]" src={VmWare} alt="VmWare" />
            <p className="text-slate-600 pt-3 lg:pt-4">
              “When the pandemic hit, those of us <br /> who thrive on in-person{" "}
              <br />
              collaboration were worried that our <br /> creativity and
              productivity would <br /> suffer. Miro was the perfect tool to{" "}
              <br /> help us with collaboration, <br /> white boarding, and
              retrospectives <br /> while remote.”
            </p>
            <div className="mt-4 flex-grow flex gap-2 items-center">
              <img
                src={person1}
                className="border rounded-full"
                alt="person1"
              />
              <div>
                <h2 className="font-medium text-xs lg:text-base text-slate-600">
                  Roxanne Mustafa
                </h2>
                <p className="text-xs lg:text-base text-slate-600">
                  Design Team Lead at VMware
                </p>
              </div>
            </div>
          </div>
          {/* second review */}
          <div className="lg:h-[330px] flex flex-col">
            <img className="w-[230px]" src={Docus} alt="Docus" />
            <p className="text-slate-600 pt-3 lg:pt-4">
              “Miro helps solve one of the major <br /> gaps in product design:
              how to <br /> manage tasks across product <br /> designers whose
              projects are in <br /> different tools.”
            </p>
            <div className="mt-4 lg:mt-[82px] flex-grow flex gap-2 items-center">
              <img
                src={person2}
                className="border rounded-full"
                alt="person2"
              />
              <div>
                <h2 className="font-medium text-xs lg:text-base text-slate-600">
                  Jane Ashley
                </h2>
                <p className="text-xs lg:text-base text-slate-600">
                  Head of Design at DocuSign
                </p>
              </div>
            </div>
          </div>
          {/* thirs review */}
          <div className="lg:h-[330px] flex flex-col">
            <img className="w-[230px]" src={Frog} alt="Frog" />
            <p className="text-slate-600 pt-3 lg:pt-4">
              “As we used Miro we moved from <br /> skepticism to belief to
              innovation, <br />
              and now we have a tool that’s at <br /> the core of what we do and
              will <br />
              continue to extend into the future.”
            </p>
            <div className="mt-4 lg:mt-[82px] flex-1 flex gap-2 items-center">
              <img
                src={person3}
                className="border rounded-full"
                alt="person3"
              />
              <div>
                <h2 className="font-medium text-xs lg:text-base text-slate-600">
                  Laura Baird
                </h2>
                <p className="text-xs lg:text-base text-slate-600">
                  Associate Design Director at frog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
