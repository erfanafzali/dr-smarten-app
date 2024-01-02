import { MdArrowBackIos } from "react-icons/md";
import { IoPersonOutline, IoMenu } from "react-icons/io5";

function Headers() {
  return (
    <div>
      <div className="w-full flex justify-around items-center h-14 mt-4">
        <Menu />
        <Logo />
        <Navbar />
        <Login />
      </div>
    </div>
  );
}

export default Headers;

function Menu() {
  return (
    <div className="md:hidden flex justify-center items-center">
      <IoMenu className="w-7 h-7 md:h-8 md:w-8" />
    </div>
  );
}

function Logo() {
  return (
    <div className="">
      <img
        src="/src/assets/icons/لوگو.png"
        alt=""
        className="w-[100px] md:w-[150px] lg:w-[200px]"
      />
    </div>
  );
}

function Navbar() {
  return (
    <div className=" md:flex justify-center items-center hidden">
      <ul className="flex justify-center items-center md:text-sm lg:text-lg xl:text-xl  whitespace-nowrap gap-x-5 md:gap-x-4 lg:gap-x-6">
        <li className="flex justify-center items-center w-full">
          <span> صفحه ی اصلی</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>
        <li className="flex justify-center items-center w-full">
          <span>خدمات</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>
        <li className="flex justify-center items-center w-full">
          <span>تست روانشناسی</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>
        <li className="flex justify-center items-center w-full">
          <span>مقالات</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>
        <li className="flex justify-center items-center w-full">
          <span>ارتباط با ما</span>
          <span>
            <MdArrowBackIos className="w-3 h-3" />
          </span>
        </li>
      </ul>
    </div>
  );
}

function Login() {
  return (
    <div className="flex justify-center items-center gap-x-2  md:gap-x-4 text-[10px] sm:text-[11px]  md:text-[13px] lg:text-[18px]">
      <div className="flex justify-center items-center flex-col md:flex-row whitespace-nowrap md:gap-x-1">
        <span>
          <IoPersonOutline className="hidden md:flex" />
        </span>
        <span className="font-bold">حساب کاربری</span>
      </div>
      <div className="w-full whitespace-nowrap px-2 py-1 md:px-3 md:py-2  bg-blue-400 rounded-md font-bold text-white">
        ثبت نام
      </div>
    </div>
  );
}
