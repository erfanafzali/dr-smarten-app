import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Template() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="w-full flex justify-center items-center mt-32">
      <div className="xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-[350px] ">
        <div className=" bg-blue-400 h-20 rounded-tl-full w-full text-center flex justify-center items-center font-bold-doran xl:text-4xl lg:text-3xl md:text-2xl text-xl  text-white ">
          برخی از بهترین ها که در کنارشون بودیم
        </div>
        <div className="w-full">
          <div className="h-52 ">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper">
              <SwiperSlide>
                <div className=" flex justify-center gap-x-20 items-center ">
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] "
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center gap-x-20 items-center ">
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] "
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center gap-x-20 items-center ">
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] "
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center gap-x-20 items-center ">
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] "
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" flex justify-center gap-x-20 items-center ">
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] "
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                  <img
                    src="/src/assets/icons/لوگو.png"
                    alt=""
                    className=" w-[200px] sm:w-[160px] md:w-[180px] lg:w-[250px] hidden md:flex"
                  />
                </div>
              </SwiperSlide>

              <div className="autoplay-progress no-transition" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span  ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;
