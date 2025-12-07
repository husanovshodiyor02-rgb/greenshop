import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";

// Swiper modullari
import { Pagination, Autoplay } from "swiper/modules";

// Swiper style-lar
import "swiper/css";
import "swiper/css/pagination";

function Showcase() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{ width: "90%", height: "70vh" }}
    >
      {/* SLIDE 1 */}
      <SwiperSlide>
        <div className="flex items-center justify-between px-15 py-8">
          <div>
            <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
              Welcome to GreenShop
            </h3>
            <h1 className="font-black md:text-[55px] text-2xl leading-[100%] uppercase text-[#3d3d3d] py-3">
              Let’s Make a Better{" "}
              <span className="text-[#46a358]"> Planet</span>
            </h1>
            <p className="font-normal text-sm leading-[171%] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use <br /> our plants to create an unique Urban
              Jungle. Order your favorite plants!
            </p>
            <button className="w-[140px] h-10 rounded-md bg-[#46a358] font-bold text-base leading-[125%] uppercase text-white mt-10">
              SHOP NOW
            </button>
          </div>
          <div className="hidden md:block relative">
            <img
              src={Img1}
              alt="slide1"
              style={{
                width: "500px",
                height: "30%",
                objectFit: "cover",
              }}
            />
            <img
              src={Img2}
              alt="img"
              className="absolute bottom-10 left-5 w-30 h-30"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* SLIDE 2 */}
      <SwiperSlide>
        <div className="flex items-center justify-between px-15 py-8">
          <div>
            <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
              Welcome to GreenShop
            </h3>
            <h1 className="font-black md:text-[55px] text-2xl leading-[100%] uppercase text-[#3d3d3d] py-3">
              Let’s Make a Better{" "}
              <span className="text-[#46a358]"> Planet</span>
            </h1>
            <p className="font-normal text-sm leading-[171%] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use <br /> our plants to create an unique Urban
              Jungle. Order your favorite plants!
            </p>
            <button className="w-[140px] h-10 rounded-md bg-[#46a358] font-bold text-base leading-[125%] uppercase text-white mt-10">
              SHOP NOW
            </button>
          </div>
          <div className="hidden md:block relative">
            <img
              src={Img1}
              alt="slide1"
              style={{
                width: "500px",
                height: "30%",
                objectFit: "cover",
              }}
            />
            <img
              src={Img2}
              alt="img"
              className="absolute bottom-10 left-5 w-30 h-30"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* SLIDE 3 */}
      <SwiperSlide>
        <div className="flex items-center justify-between px-15 py-8">
          <div>
            <h3 className="font-medium text-sm leading-[114%] tracking-widest uppercase text-[#3d3d3d]">
              Welcome to GreenShop
            </h3>
            <h1 className="font-black md:text-[55px] text-2xl leading-[100%] uppercase text-[#3d3d3d] py-3">
              Let’s Make a Better{" "}
              <span className="text-[#46a358]"> Planet</span>
            </h1>
            <p className="font-normal text-sm leading-[171%] text-[#727272]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use <br /> our plants to create an unique Urban
              Jungle. Order your favorite plants!
            </p>
            <button className="w-[140px] h-10 rounded-md bg-[#46a358] font-bold text-base leading-[125%] uppercase text-white mt-10">
              SHOP NOW
            </button>
          </div>
          <div className="hidden md:block relative">
            <img
              src={Img1}
              alt="slide1"
              style={{
                width: "500px",
                height: "30%",
                objectFit: "cover",
              }}
            />
            <img
              src={Img2}
              alt="img"
              className="absolute bottom-10 left-5 w-30 h-30"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Showcase;
