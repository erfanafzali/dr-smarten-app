import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import CountDown from "./Features/CountDown";
import MyPackage from "./MyPackage/MyPackage";

function Favorite() {
  return (
    <div className="flex justify-between w-full items-center flex-col lg:flex-row gap-y-14 gap-x-20 overflow-hidden px-6 md:px-4 ">
      <AboutFavorit />
      <Package />
    </div>
  );
}

export default Favorite;

function AboutFavorit() {
  return (
    <div className="lg:max-w-md  max-w-sm relative xl:right-48 lg:right-12 md:top-14 md:mb-20">
      <div className="flex flex-col justify-center items-start">
        <p className="text-gray-600 text-base md::text-lg">
          ــــــــــــــ دوره های پرطرفدار
        </p>
        <h1 className="flex flex-col justify-center items-start font-bold-doran font-extrabold mb-5">
          <span className="text-5xl">متن ساختگی</span>
          <span className="text-4xl">درمورد روانشناسی</span>
        </h1>
        <p className="text-justify pl-8 text-gray-600 font-semibold mb-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-full text-right  ">
          <button className="font-bold bg-gray-600 text-white px-4 py-2 rounded-full font-bold-doran  whitespace-nowrap">
            مشاهده همه دوره ها
          </button>
        </div>
        <div className="lg:flex justify-start items-center xl:pl-20 lg:pl-10  gap-x-10 hidden">
          <span>
            <MdArrowForwardIos className="w-6 h-6 hidden" />
          </span>
          <span>
            <MdArrowBackIos className="w-6 h-6 hidden" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Package() {
  return (
    <div className="w-full flex md:justify-center md:items-center  flex-col justify-center items-center md:gap-y-10 lg:gap-y-20 lg:pl-10">
      <CountDown />
      <MyPackage />
    </div>
  );
}
