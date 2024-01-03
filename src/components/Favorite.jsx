import { IoIosPerson } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import CountDown from './Features/CountDown';

function Favorite() {
  return (
    <div className="flex justify-between w-full items-center lg:pr-0 px-8 flex-col lg:flex-row gap-y-20 relative">
      <AboutFavorit />
      <Package />
    </div>
  );
}

export default Favorite;

function AboutFavorit() {
  return (
    <div className="lg:max-w-xs  max-w-sm relative xl:right-24 lg:right-12">
      <div className="flex flex-col justify-center items-start">
        <p className="text-gray-600 text-base md::text-lg">
          ــــــــــــــ دوره های پرطرفدار
        </p>
        <h1 className="flex flex-col justify-center items-start font-bold-doran font-extrabold mb-5">
          <span className="text-5xl">متن ساختگی</span>
          <span className="text-4xl">درمورد روانشناسی</span>
        </h1>
        <p className="text-justify pl-8 text-gray-600 font-semibold mb-16">
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
            <MdArrowForwardIos className="w-6 h-6" />
          </span>
          <span>
            <MdArrowBackIos className="w-6 h-6" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Package() {
  return (
    <div className="w-full flex md:justify-center md:items-center lg:pl-32  sm:max-w-md lg:max-w-none flex-col justify-center items-center md:gap-y-10 lg:gap-y-8 relative">
      <CountDown />
      <MyPackage />
    </div>
  );
}



function MyPackage() {
  return (
    <div className="mt-10  gap-y-20  lg:flex-row flex flex-col justify-center items-center lg:w-full gap-x-4 relative lg:right-40 top-6">
      <div className="flex justify-center items-center flex-col rounded-lg shadow-lg shadow-gray-500 lg:max-w-xs ">
        <div className="w-full">
          <img
            src="/src/assets/images/دوره پرطرفدار 1.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold font-bold-doran lg:text-[25px] xl:text-[29px] py-1 text-gray-700">
            نــــــام دوره
          </h2>
          <div className="flex justify-start items-center gap-x-1 text-blue-500 font-bold text-lg">
            <span>
              <IoIosPerson />
            </span>
            <span>نام مدرس</span>
          </div>
          <p className="text-justify py-4 text-slate-600 font-semibold pl-1 lg:text-sm xl:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>

          <div className="border-t-2 border-b-2 py-3 text-center flex items-center justify-center gap-x-1 text-gray-500 my-2">
            <span>
              <IoPlayOutline />
            </span>
            <span>۱۵ساعت</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <div className="flex justify-center items-center gap-x-1  bg-gray-200 ">
              <span className="bg-gray-300 gap-x-1  py-1.5 px-1">
                <IoPlayOutline />
              </span>
              <button className="px-2  lg:text-sm xl:text-base text-gray-700 font-semibold">
                ۳۰نفر
              </button>
            </div>
            <div className="text-blue-500 font-bold lg:text-base xl:text-lg">
              ۱۲۰,۰۰۰
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col rounded-lg shadow-lg shadow-gray-500 lg:max-w-xs scale-y-110">
        <div className="w-full">
          <img
            src="/src/assets/images/دوره پرطرفدار 2.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold font-bold-doran lg:text-[25px] xl:text-[29px] py-1 text-gray-700">
            نــــــام دوره
          </h2>
          <div className="flex justify-start items-center gap-x-1 text-blue-500 font-bold text-lg">
            <span>
              <IoIosPerson />
            </span>
            <span>نام مدرس</span>
          </div>
          <p className="text-justify py-4 text-slate-600 font-semibold pl-1 lg:text-sm xl:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>

          <div className="border-t-2 border-b-2 py-3 text-center flex items-center justify-center gap-x-1 text-gray-500 my-2">
            <span>
              <IoPlayOutline />
            </span>
            <span>۱۵ساعت</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <div className="flex justify-center items-center gap-x-1  bg-gray-200 ">
              <span className="bg-gray-300 gap-x-1  py-1.5 px-1">
                <IoPlayOutline />
              </span>
              <button className="px-2  lg:text-sm xl:text-base text-gray-700 font-semibold">
                ۳۰نفر
              </button>
            </div>
            <div className="text-blue-500 font-bold lg:text-base xl:text-lg">
              ۱۲۰,۰۰۰
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col rounded-lg shadow-lg shadow-gray-500 lg:max-w-xs ">
        <div className="w-full">
          <img
            src="/src/assets/images/دوره پرطرفدار 3.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold font-bold-doran lg:text-[25px] xl:text-[29px] py-1 text-gray-700">
            نــــــام دوره
          </h2>
          <div className="flex justify-start items-center gap-x-1 text-blue-500 font-bold text-lg">
            <span>
              <IoIosPerson />
            </span>
            <span>نام مدرس</span>
          </div>
          <p className="text-justify py-4 text-slate-600 font-semibold pl-1 lg:text-sm xl:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>

          <div className="border-t-2 border-b-2 py-3 text-center flex items-center justify-center gap-x-1 text-gray-500 my-2">
            <span>
              <IoPlayOutline />
            </span>
            <span>۱۵ساعت</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <div className="flex justify-center items-center gap-x-1  bg-gray-200 ">
              <span className="bg-gray-300 gap-x-1  py-1.5 px-1">
                <IoPlayOutline />
              </span>
              <button className="px-2  lg:text-sm xl:text-base text-gray-700 font-semibold">
                ۳۰نفر
              </button>
            </div>
            <div className="text-blue-500 font-bold lg:text-base xl:text-lg">
              ۱۲۰,۰۰۰
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
