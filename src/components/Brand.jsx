import Marquee from "react-fast-marquee";
import brand1 from '../assets/images/Walmart.svg'
import brand2 from '../assets/images/cisco.svg.svg'
import brand3 from '../assets/images/volvo.svg'
import brand4 from '../assets/images/deloitte.svg.svg'
import brand5 from '../assets/images/okta.svg.svg'
const Brand = () => {
  return (
    <div className="py-3 md:py-7 overflow-hidden lg:py-16">
        <h1 className="text-[18px] mb-10 font-normal text-slate-500 text-center">
        Trusted by 45M+ users
      </h1>
      <Marquee>
        <img className="mr-9" src={brand1} alt="brand" />
        <img className="mr-9" src={brand2} alt="brand" />
        <img className="mr-9" src={brand3} alt="brand" />
        <img className="mr-9" src={brand4} alt="brand" />
        <img src={brand5} alt="brand" />
      </Marquee>
    </div>
  );
};

export default Brand;
