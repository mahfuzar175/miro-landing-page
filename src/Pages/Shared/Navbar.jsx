import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { LuMoveRight } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navLinks = (
    <>
      <div className="relative group">
        <a to="/" className="lg:ml-3 flex items-center gap-1 font-medium">
          Product <IoChevronDownOutline className="mt-1" />
        </a>
        {/* dropdown */}
        <div className="absolute lg:block hidden lg:left-14 left-0 lg:top-full lg:mt-2 w-[200px] bg-white shadow-md text-black z-[999999] border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:duration-500 transition-all ease-in-out">
          <div>
            <ul className="flex flex-col gap-2 px-2 py-3">
              <li className="hover:font-medium">ZenDesk</li>
              <li className="hover:font-medium">Slack</li>
              <li className="hover:font-medium">Adobe</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative group">
        <a to="/" className="lg:ml-3 flex items-center gap-1 font-medium">
          Solutions <IoChevronDownOutline className="mt-1" />
        </a>
        {/* dropdown */}
        <div className="absolute lg:block hidden lg:left-14 left-0 lg:top-full lg:mt-2 w-[200px] bg-white shadow-md text-black z-[999999] border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:duration-500 transition-all ease-in-out">
          <div>
            <ul className="flex flex-col gap-2 px-2 py-3">
              <li className="hover:font-medium">Salesforce</li>
              <li className="hover:font-medium">Microsoft 365</li>
              <li className="hover:font-medium">AWS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative group">
        <a to="/" className="lg:ml-3 flex items-center gap-1 font-medium">
          Resources <IoChevronDownOutline className="mt-1" />
        </a>
        {/* dropdown */}
        <div className="absolute lg:block hidden lg:left-14 left-0 lg:top-full lg:mt-2 w-[200px] bg-white shadow-md text-black z-[999999] border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:duration-500 transition-all ease-in-out">
          <div>
            <ul className="flex flex-col gap-2 px-2 py-3">
              <li className="hover:font-medium">Google Scholar</li>
              <li className="hover:font-medium">GitHub</li>
              <li className="hover:font-medium">TED Talks</li>
            </ul>
          </div>
        </div>
      </div>
      <a to="/services" className="lg:ml-4 font-medium">
        Enterprise
      </a>
      <a to="/services" className="lg:ml-4 font-medium">
        Pricing
      </a>
    </>
  );

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen top-0 left-0 z-10`}
      ></div>

      <div className="border-b  border-slate-200 shadow-sm">
        <div className="px-4 lg:px-9 py-3 mb-1">
          <div className="flex justify-between items-center">
            <div className="flex relative  items-center gap-4 ">
              <div className="logo w-[100px]">
                <img className="h-full w-full" src={logo} alt="logo" />
              </div>

              {/* Desktop menu */}
              <div className="hidden relative cursor-pointer lg:block mt-2 text-[17px]">
                <ul className="lg:flex lg:gap-2">{navLinks}</ul>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg  transform  z-20 h-full w-[320px] bg-white text-black absolute top-0 left-0`}
            >
              <button
                className="h-9 w-9 text-[26px] font-semibold flex absolute right-2 mt-[7px] rounded-full border border-blue-500"
                onClick={() => setOpen(false)}
              >
                <RxCross1 className="mt-1 ml-1" />
              </button>

              <div className="border-b border-slate-200 py-3">
                <img className="w-[70px] mx-auto" src={logo} alt="" />
              </div>
              <ul className="flex cursor-pointer flex-col p-5 space-y-4 overflow-y-auto text-[18px]">
                {navLinks}
              </ul>
              <div className="flex items-center px-5 font-medium">
                <AiOutlineGlobal className="text-xl" />
                <button className="block ml-1">EN</button>
              </div>
              <div className="flex items-center px-5 py-3 font-medium">
                <button className="block lg:ml-4">Contact Sales</button>
              </div>
              <div className="flex items-center px-5 py-1 font-medium">
                <button className="block lg:ml-4">Login</button>
              </div>
            </div>
            <div className="flex items-center text-[17px] gap-1">
              <div className="hidden lg:flex items-center font-medium">
                <AiOutlineGlobal className="text-xl" />
                <button className="hidden lg:block ml-1 ">EN</button>
              </div>
              <div className="flex items-center font-medium">
                <button className="hidden lg:block lg:ml-4">
                  Contact Sales
                </button>
              </div>
              <div className="flex items-center font-medium">
                <button className="hidden lg:block lg:ml-4">Login</button>
              </div>
              <div className="flex items-center">
                <div>
                  <button className="btn flex items-center font-normal gap-1 lg:gap-2 lg:ml-4 bg-[#4262FF] hover:bg-blue-800 px-4 lg:px-5 py-2 text-[15px] lg:text-[17px] lg:py-[9px] rounded-full text-white">
                    Sign up free <LuMoveRight className="mt-[2px] " />
                  </button>
                </div>

                <IoMdMenu
                  className="text-3xl cursor-pointer lg:hidden ml-4"
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
