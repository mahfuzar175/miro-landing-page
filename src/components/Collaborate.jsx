import highlight from "../assets/images/idea.png";
import { LuMoveRight } from "react-icons/lu";
const Collaborate = () => {
  return (
    <div className="py-6 md:py-7 overflow-hidden relative lg:py-12 mt-10 font-inter">
        {/* heading */}
      <div>
        <h1 className="text-center text-[#050038] text-2xl lg:text-5xl md:text-3xl font-bold mt-3">
          Collaborate without <br /> constraints
        </h1>
        <div className="absolute lg:block -top-4 md:-top-6 left-12 md:left-[58%]">
          <img src={highlight} alt="highlite" />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
