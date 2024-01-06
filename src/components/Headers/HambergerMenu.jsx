import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";

const HambergerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseTab = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
        {isMenuOpen ? (
          <IoClose className="w-7 h-7 md:h-8 md:w-8" />
        ) : (
          <IoMenu className="w-7 h-7 md:h-8 md:w-8" />
        )}
      </button>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50"
          onClick={toggleMenu}
        />
      )}

      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit>
        <div className="fixed top-0 right-0 w-48 sm:w-60 h-full bg-white shadow-md rounded p-2 z-50">
          <div className="w-full flex justify-end items-center">
            <IoClose
              className="w-8 h-8 text-red-600"
              onClick={handleCloseTab}
            />
          </div>
          <ul className=" px-2">
            <li className="cursor-pointer py-2 transition duration-300 hover:bg-gray-100 rounded-md text-base font-bold px-2">
              صفحه ی اصلی
            </li>
            <li className="cursor-pointer py-2 transition duration-300 hover:bg-gray-100 rounded-md text-sm sm:text-base font-semibold px-2">
              خدمات
            </li>
            <li className="cursor-pointer py-2 transition duration-300 hover:bg-gray-100 rounded-md text-sm sm:text-base font-semibold px-2">
              تست روانشناسی
            </li>
            <li className="cursor-pointer py-2 transition duration-300 hover:bg-gray-100 rounded-md text-sm sm:text-base font-semibold px-2">
              مقالات
            </li>
            <li className="cursor-pointer py-2 transition duration-300 hover:bg-gray-100 rounded-md text-sm sm:text-base font-semibold px-2">
              ارتباط با ما
            </li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default HambergerMenu;
