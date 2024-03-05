import { LuMoveRight } from "react-icons/lu";

const Review = () => {
  return (
    <div className="overflow-hidden py-3 md:py-7 lg:py-10 lg:mt-12 font-inter">
      <div>
        <h1 className="text-center  text-[#050038] text-2xl md:text-3xl lg:text-5xl font-bold">
          Loved by the world's best teams
        </h1>
        <div className="text-center pt-4 ">
          <button className="btn text-xs lg:text-base font-normal lg:gap-2 border border-[#4262FF] hover:border-none hover:text-white hover:bg-blue-800 px-4 lg:px-7 lg:py-3 text-[15px] lg:text-[17px] rounded-full  text-blue-500 ">
            <div className="flex gap-1 items-center">
              See all customer stories
              <span>
                <LuMoveRight className="mt-[2px] " />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
