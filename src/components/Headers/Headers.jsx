import { IoPersonOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import HambergerMenu from "./HambergerMenu";

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
    <div className="md:hidden flex justify-center items-center pr-6">
      <HambergerMenu />
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

function Login() {
  return (
    <div className="flex justify-center items-center gap-x-2  md:gap-x-4 text-[10px] sm:text-[11px]  md:text-[13px] lg:text-[18px]">
      <div className="flex justify-center items-center flex-col md:flex-row whitespace-nowrap md:gap-x-1 hover:border-2 hover:border-blue-500 px-1 py-1 md:px-3 md:py-2 rounded-md cursor-pointer">
        <span>
          <IoPersonOutline className="hidden md:flex" />
        </span>
        <button className="font-bold ">حساب کاربری</button>
      </div>
      <button className="w-full whitespace-nowrap px-2 py-1 md:px-3 md:py-2  bg-blue-400 rounded-md font-bold text-white hover:bg-blue-700">
        ثبت نام
      </button>
    </div>
  );
}
