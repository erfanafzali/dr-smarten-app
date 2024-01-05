import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import useFetch from "../../hooks/useFetch";
import { IoPlayOutline } from "react-icons/io5";

const StyledSwiper = styled(Swiper)`
  @media (min-width: 768px) {
    width: 40%;
  }

  /* حالت کوچک - sm */
  @media screen and (max-width: 576px) {
    width: 80%;
  }

  /* حالت متوسط - md */
  @media screen and (min-width: 577px) and (max-width: 992px) {
    width: 70%;
  }

  /* حالت بزرگ - lg */
  @media screen and (min-width: 993px) {
    width: 40%;
  }
  @media screen and (min-width: 1200px) {
    width: 35%;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px; /* Default width for mobile */
  border-radius: 10px;
  background-color: white;

  @media (min-width: 768px) {
    /* Adjust the width for desktop screens */
    width: 600px;
    height: 300px;
  }

  img {
    width: 100%;
  }
`;

function MyPackage() {
  const { isLoading, data } = useFetch("package");
  return (
    <div className=" md:bg-gray-400 rounded-full w-full ">
      <div className="w-full h-[600px] md:h-[650px]   mb-20 mt-10">
        <div className="w-full h-full">
          <>
            <StyledSwiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper">
              <div className="w-full h-full">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <div>
                    {data.map((pack) => (
                      <StyledSwiperSlide key={pack.id}>
                        <div className="flex justify-center items-center flex-col rounded-lg shadow-lg shadow-gray-500 lg:w-full h-full ">
                          <div className="w-full">
                            <img
                              src={pack.img}
                              alt={pack.title}
                              className="w-full h-full"
                            />
                          </div>
                          <div className="px-6 py-4">
                            <h2 className="font-bold font-bold-doran lg:text-[25px] xl:text-[29px] py-1 text-gray-700 text-2xl">
                              {pack.title}
                            </h2>
                            <div className="flex gap-x-1 text-blue-500 font-bold text-lg ">
                              <span></span>
                              <span className="w-full text-right">
                                {pack.teacher}
                              </span>
                            </div>
                            <p className="text-justify md:py-4 py-2 text-slate-500  font-semibold pl-1 lg:text-sm xl:text-base">
                              {pack.desc}
                            </p>

                            <div className="w-full border-t-2 border-b-2 py-3 text-center flex flex-row items-center justify-center gap-x-1 text-gray-500 my-2">
                              <IoPlayOutline /> {pack.hour}
                            </div>
                            <div className="w-full flex justify-between items-center py-3">
                              <div className="flex justify-center items-center gap-x-1  bg-gray-200 ">
                                <span className="bg-gray-300 gap-x-1  py-1.5 px-1">
                                  <IoPlayOutline />
                                </span>
                                <button className="px-2  lg:text-sm xl:text-base text-gray-700 font-semibold">
                                  {pack.member}
                                </button>
                              </div>
                              <div className="text-blue-500 font-bold lg:text-base xl:text-lg">
                                {pack.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      </StyledSwiperSlide>
                    ))}
                  </div>
                )}
              </div>
            </StyledSwiper>
          </>
        </div>
      </div>
    </div>
  );
}

export default MyPackage;

// <div className="flex justify-center items-center flex-col rounded-lg shadow-lg shadow-gray-500 lg:max-w-xs ">
// <div className="w-full">
//  <img
//     src="/src/assets/images/دوره پرطرفدار 1.png"
//     alt=""
//     className="w-full"
//   />
// </div>
// <div className="px-6 py-4">
//   <h2 className="font-bold font-bold-doran lg:text-[25px] xl:text-[29px] py-1 text-gray-700">
//     نــــــام دوره
//   </h2>
//   <div className="flex justify-start items-center gap-x-1 text-blue-500 font-bold text-lg">
//     <span>
//       {/* <IoIosPerson /> */}
//     </span>
//     <span>نام مدرس</span>
//   </div>
//   <p className="text-justify py-4 text-slate-600 font-semibold pl-1 lg:text-sm xl:text-base">
//     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
//     با استفاده از طراحان گرافیک است،
//   </p>

//   <div className="border-t-2 border-b-2 py-3 text-center flex items-center justify-center gap-x-1 text-gray-500 my-2">
//     <span>
//       {/* <IoPlayOutline /> */}
//     </span>
//     <span>۱۵ساعت</span>
//   </div>
//   <div className="w-full flex justify-between items-center py-3">
//     <div className="flex justify-center items-center gap-x-1  bg-gray-200 ">
//       <span className="bg-gray-300 gap-x-1  py-1.5 px-1">
//         {/* <IoPlayOutline /> */}
//       </span>
//       <button className="px-2  lg:text-sm xl:text-base text-gray-700 font-semibold">
//         ۳۰نفر
//       </button>
//     </div>
//     <div className="text-blue-500 font-bold lg:text-base xl:text-lg">
//       ۱۲۰,۰۰۰
//     </div>
//   </div>
// </div>
// </div>
