import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Container from "./Container";
import miro from "../../assets/images/Miro.png";
import span from "../../assets/images/span.png";

const Footer = () => {
  return (
    <div className="bg-[#02033B] text-white mt-24">
      <Container>
        <div className="py-5 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
            <div className="space-y-4 lg:space-y-10">
              <h2 className="text-2xl font-bold ">Scan. Detect. Remove.</h2>
              <div className="flex items-center gap-x-4 lg:gap-x-9">
                <div className="bg-white rounded-md h-8 w-8">
                  <FaTwitter className="text-[#02033B] text-xl mx-auto mt-[6px]" />
                </div>
                <div className="bg-white rounded-md h-8 w-8 ">
                  <FaFacebookF className="text-[#02033B] text-xl mx-auto mt-[6px]" />
                </div>
                <div className="bg-white rounded-md h-8 w-8 ">
                  <FaYoutube className="text-[#02033B] text-xl mx-auto mt-[6px]" />
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <h3 className="underline text-sm">Privacy Policy</h3>
                <h3 className="underline text-sm"> Terms of Service</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  Copyright © 2022 Certo Software Limited | Registered in
                  England & Wales No. 10072356
                </p>
                <p>
                  Designed & developed by{" "}
                  <span className="underline">Bigger Picture</span>
                </p>
              </div>
            </div>
            <div>
              <img className="py-4 w-18 lg:w-36" src={miro} alt="miro" />
              <div className="pt-4 lg:pt-6">
                <ul className="flex flex-col space-y-2 text-[#FFC247]">
                  <li className="flex  items-center gap-3 text-[23px] font-bold">
                    <img src={span} alt="span" />
                    <p>iPhone</p>
                  </li>
                  <li className="flex items-center gap-3 text-2xl font-bold">
                    <img src={span} alt="span" />
                    <p>Android</p>
                  </li>
                  <li className="flex items-center gap-3 text-2xl font-bold">
                    <img src={span} alt="span" />
                    <p>Help</p>
                  </li>
                  <li className="flex items-center gap-3 text-2xl font-bold">
                    <img src={span} alt="span" />
                    <p>About</p>
                  </li>
                  <li className="flex items-center gap-3 text-2xl font-bold">
                    <img src={span} alt="span" />
                    <p>Insight</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#FFC247] rounded-[45px] w-full mt-8 lg:mt-0">
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-slate-800">
                  Sign Up to our Newsletter
                </h2>
                <p className="text-slate-800 text-[13px] font-semibold">
                  Receive the latest mobile security news, exclusive discounts &
                  offers straight to your inbox!
                </p>
                <div className="flex items-center py-3">
                  <input
                    className="py-1 px-4 w-full outline-none rounded-l-full"
                    type="email"
                    placeholder="Email address"
                  />
                  <button className="px-6 py-1 font-semibold bg-[#02033B] text-white rounded-r-full">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-24 text-sm">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
            registered in the U.S. and other <br /> countries. App Store is a
            service mark of Apple Inc. Android, Google Play <br /> and the
            Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
