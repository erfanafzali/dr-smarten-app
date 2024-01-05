import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
 

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="md:flex justify-center items-center hidden">
      <ul className="flex justify-center items-center md:text-sm lg:text-lg xl:text-xl  whitespace-nowrap gap-x-5 md:gap-x-4 lg:gap-x-6">
        <li
          className={`flex justify-center items-center w-full ${
            activeIndex === 0 ? "active" : ""
          }`}
          onClick={() => handleItemClick(0)}>
          <span> صفحه ی اصلی</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>

        <li
          className={`flex justify-center items-center w-full ${
            activeIndex === 1 ? "active" : ""
          }`}
          onClick={() => handleItemClick(1)}>
          <span>خدمات</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>

        <li
          className={`flex justify-center items-center w-full ${
            activeIndex === 2 ? "active" : ""
          }`}
          onClick={() => handleItemClick(2)}>
          <span>تست روانشناسی</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>

        <li
          className={`flex justify-center items-center w-full ${
            activeIndex === 3 ? "active" : ""
          }`}
          onClick={() => handleItemClick(3)}>
          <span>مقالات</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>

        <li
          className={`flex justify-center items-center w-full ${
            activeIndex === 4 ? "active" : ""
          }`}
          onClick={() => handleItemClick(4)}>
          <span>ارتباط با ما</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>
      </ul>
    </div>
  );
}
