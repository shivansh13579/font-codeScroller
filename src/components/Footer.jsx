import React from "react";
import { CgFacebook } from "react-icons/cg";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoThin } from "react-icons/pi";

function Footer() {
  return (
    <>
    <div className="bg-black w-full max-h-screen ">
      <div className="container">
        <div className="flex py-8">

          <div className="text-white flex-col w-1/3">
            <div>
              <h1 className="text-lg relative">
                <div>
                  <span className="border-2  border-orange-500 absolute left-0 bottom-0 top-0 "></span>
                </div>
                <div className="pl-3 font-extrabold p">ABOUT US</div>
              </h1>
              <p className="pr-6 pt-6 text-gray-500 text-lg">
                CodeScroller: Start Scrolling the Code!. Explore our blog for
                easy-to-understand tips, tutorials, and advice on coding.
                Whether you are just starting out or looking to level up your
                skills, we are here to make coding simple and enjoyable for
                everyone.
              </p>
            </div>
          </div>

          <div className="text-white flex-col w-1/3 ">
            <h1 className="text-lg relative">
              <div>
                <span className="border-2  border-orange-500 absolute left-0 bottom-0 top-0 "></span>
              </div>
              <div className="pl-3 font-extrabold p">QUICK LINKS</div>
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
            <div className="pt-6 text-gray-500 font-bold hover:text-yellow-300">
              <a href="/aboutus"> About Us </a>
            </div>
          </div>

          <div className="text-white flex-col w-1/3 pl-10">
            <h1 className="text-lg relative">
              <div>
                <span className="border-2  border-orange-500 absolute left-0 bottom-0 top-0 "></span>
              </div>
              <div className="pl-3 font-extrabold p">SOCIAL</div>
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
    </div>


    <div className="bg-gray-600  w-full h-[70px]">
         <div className="container ">
         <div className="">
         <p className="pt-5 font-semibold">CodeScroller - Start Scrolling the Code ! GuCherry Blog by <span className="font-bold text-yellow-400">Everestthemes</span></p>
         </div>
        </div>
    </div>
    </>
  );
}

export default Footer;
