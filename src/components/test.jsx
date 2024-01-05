import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
  width: 90%;

  @media (min-width: 768px) {
    width: 33%;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px; /* Default width for mobile */
  border: 3px solid green;
  border-radius: 10px;

  @media (min-width: 768px) {
    /* Adjust the width for desktop screens */
    width: 600px;
    height: 300px;
  }

  div {
    padding: 7px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  h3 {
    padding-top: 10px;
    color: gray;
  }
  h4 {
    padding-bottom: 30px;
    padding-top: 5px;
    color: gray;
  }

  p {
    width: 100%;
    text-align: center;
  }
`;

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
function MyPackage() {
  return (
    <div className="w-full h-[700px]">
      <div className="w-full h-full bg-green-500 top-80 ">
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
            <StyledSwiperSlide>
              <div className="flex justify-center items-center flex-col rounded-lg shadow-lg shadow-gray-500 lg:w-full h-full ">
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
                    <span>{/* <IoIosPerson /> */}</span>
                    <span>نام مدرس</span>
                  </div>
                  <p className="text-justify py-4 text-slate-600 font-semibold pl-1 lg:text-sm xl:text-base">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است،
                  </p>

                  <div className="border-t-2 border-b-2 py-3 text-center flex items-center justify-center gap-x-1 text-gray-500 my-2">
                    <span>{/* <IoPlayOutline /> */}</span>
                    <span>۱۵ساعت</span>
                  </div>
                  <div className="w-full flex justify-between items-center py-3">
                    <div className="flex justify-center items-center gap-x-1  bg-gray-200 ">
                      <span className="bg-gray-300 gap-x-1  py-1.5 px-1">
                        {/* <IoPlayOutline /> */}
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
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </StyledSwiperSlide>
            <StyledSwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </StyledSwiperSlide>
          </StyledSwiper>
        </>
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
