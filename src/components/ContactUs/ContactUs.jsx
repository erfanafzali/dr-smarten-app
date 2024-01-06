import { useState } from "react";
import "./ContactUs.css"; // فایل سبک CSS
import { MdArrowBackIos } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

import { RiTelegramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full md:h-28 h-20">
      <button
        className="hover-button w-full flex justify-start items-center mb-20 h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <span className="py-10 px-3 text-white bg-green-400 rounded-tl-full rounded-bl-full z-50 flex justify-center items-center  hover:bg-white hover:text-black">
          <span className="font-bold text-lg">ارتباط با ما</span>
          <MdArrowBackIos className="font-bold w-8 h-8" />
        </span>
        <div
          className={`md:w-[50%] w-full hidden-text ${
            isHovered ? "visible" : ""
          }`}>
          <ul className="w-full flex justify-end items-center md:gap-x-20 md:pl-20 gap-x-7 pl-7 ">
            <li>
              <FaInstagram className="md:w-11 md:h-11 w-6 h-6" />
            </li>
            <li>
              <RiTelegramLine className="md:w-11 md:h-11 w-6 h-6" />
            </li>
            <li>
              <FaLinkedinIn className="md:w-11 md:h-11 w-6 h-6" />
            </li>
            <li>
              <FaWhatsapp className="md:w-11 md:h-11 w-6 h-6" />
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default ContactUs;
