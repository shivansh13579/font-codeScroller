import React from "react";
import { CgFacebook } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";

function Footer() {
  return (
    <>

    <div className="bg-black/80 px-4 py-8 sm:px-20">
      <div className="grid  gap-2 sm:grid-cols-3">

        <div className="min-h-[100px]">
        <h1 className="text-lg relative">
                <div>
                  <span className="border-2  border-orange-500 absolute left-0 bottom-0 top-0 "></span>
                </div>
                <div className="pl-3 text-white  font-extrabold ">ABOUT US</div>
         </h1>
         <p className="pr-8 pt-6 pb-2 text-gray-500 text-lg">
                CodeScroller: Start Scrolling the Code!. Explore our blog for
                easy-to-understand tips, tutorials, and advice on coding.
                Whether you are just starting out or looking to level up your
         </p>

        </div>

        <div className="min-h-[100px]">

        <h1 className="text-lg relative">
              <div>
                <span className="border-2  border-orange-500 absolute left-0 bottom-0 top-0 "></span>
              </div>
              <div className="pl-3 font-extrabold text-white">QUICK LINKS</div>
        </h1>
        <div className=" pt-6  pb-4 border-b border-gray-700 text-gray-500 font-bold hover:text-yellow-300">
              <a href="/">Home</a>
            </div>
            <div className=" pt-6 pb-4 border-b border-gray-700 text-gray-500 font-bold hover:text-yellow-300">
              <a href="/term&condition">Term & Condition</a>
            </div>
            <div className=" pt-6 pb-4 border-b border-gray-700 text-gray-500 font-bold hover:text-yellow-300">
              <a href="/contactus"> Contact Us</a>
            </div>
            <div className="pt-6 pb-3 text-gray-500 font-bold hover:text-yellow-300">
              <a href="/aboutus"> About Us </a>
            </div>
        </div>

        <div className="min-h-[100px] ">
        <h1 className="text-lg relative">
              <div>
                <span className="border-2  border-orange-500 absolute left-0 bottom-0 top-0 "></span>
              </div>
              <div className="pl-3 font-extrabold text-white">SOCIAL</div>
        </h1>
        <div className="pt-6 flex">
              <div className="text-xl mr-2 bg-blue-950 p-2 rounded-full">
              <a href="/"> <CgFacebook /> </a>
              </div>
              <div className="text-xl mr-2 bg-blue-500 p-2 rounded-full">
              <a href="/"> <CiTwitter /> </a>
              </div>
              <div className="text-xl mr-2 bg-violet-900 bg-blue p-2 rounded-full">
              <a href="/"> <CiInstagram /> </a>
              </div>
              <div className="text-xl mr-2 bg-red-500 p-2 rounded-full">
              <a href="/"> <PiYoutubeLogoThin /> </a>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div className="bg-black/50 px-4 py-4 sm:h-[70px] sm:px-20">
        <div>
          <p>CodeScroller - Start Scrolling the Code ! GuCherry Blog by <span className="font-bold text-yellow-400">Everestthemes</span></p>
        </div>
    </div>
    </>
  );
}

export default Footer;
