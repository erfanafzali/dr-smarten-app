import { IoPlayOutline } from "react-icons/io5";

function PersonDetail() {
  return (
    <div className="md:mt-20 mt-10 flex-col flex md:flex-row justify-center mb-10 px-10 md:px-40 gap-x-20 items-start">
      <div className="relative">
        <img
          src="/src/assets/images/معرفی دکتر.png"
          alt=""
          className="max-w-[200px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[440px]"
        />
        <div className="flex justify-center items-center absolute  top-44 right-20 sm:top-64 sm:right-32 md:top-80 md:right-24 lg:top-[360px] lg:right-30 xl:top-[440px] xl:right-40 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-2 md:py-3 xl:py-4 bg-white opacity-[0.9] shadow-lg">
          <span className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-extrabold text-blue-400">
            ۲۰۰+
          </span>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap font-regular-doran">
            <span> مشاوره حضوری </span>
            <br />
            <span> و غیر حضوری</span>
          </span>
        </div>
      </div>
      <DetailSection />
    </div>
  );
}

export default PersonDetail;

function DetailSection() {
  return (
    <div className="mt-6">
      <div className="text-gray-500 pb-2">ـــــــــــــ درباره ما</div>
      <div className="font-extrabold font-bold-doran  flex flex-col justify-center items-start">
        <div className="text-3xl lg:text-4xl xl:text-5xl">متن ساختگی</div>
        <span className="text-2xl lg:text-3xl xl:text-4xl">
          درمورد روانشناسی
        </span>
      </div>
      <div className="text-justify lg:pl-10 xl:pl-20 pt-5 text-xs md:text-base lg:text-xl">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد،
      </div>
      <div className="flex mt-7 justify-start items-center gap-x-4 mb-8">
        <div className=" flex flex-col justify-center items-center ">
          <span className="border-b-4 border-black px-8 md:px-10 lg:px-12 xl:px-14 md:text-3xl text-2xl">
            ۶۰۰+
          </span>
          <span className="pt-2 text-gray-700 md:text-lg text-sm">
            ساعت برگزاری
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="border-b-4 border-black px-8 md:px-10 lg:px-12 xl:px-14 md:text-3xl text-2xl">
            ۱۷+
          </span>
          <span className="pt-2 text-gray-700 md:text-lg text-sm">
            سال تجربه کاری
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center xl:justify-start xl:pr-6 items-center gap-x-8 ">
        <div className="flex justify-center items-center gap-x-1">
          <span className="text-blue-500 font-regular-doran text-base sm:text-lg lg:text-xl">ویدیو معرفی</span>
          <span>
            <IoPlayOutline className="w-5 h-5 shadow text-blue-600 shadow-blue-400 rounded-full p-1"/>
          </span>
        </div>
        <div className="font-regular-doran text-base sm:text-lg lg:text-xl px-4 py-1 bg-gray-600 text-white rounded-2xl ">مشاهده کامل رزومه</div>
      </div>
    </div>
  );
}
