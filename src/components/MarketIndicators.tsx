import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

interface MarketIndicator {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const marketIndicators: MarketIndicator[] = [
  {
    name: "Soybean in Ukraine",
    value: "WoW",
    change: "+3.35%",
    isPositive: true,
  },
  {
    name: "Soybean Meal in Ukraine",
    value: "WoW",
    change: "+1.06%",
    isPositive: true,
  },
  {
    name: "Wheat in Argentina",
    value: "WoW",
    change: "-1.45%",
    isPositive: false,
  },
  {
    name: "Wheat in Brazil",
    value: "WoW",
    change: "-0.14%",
    isPositive: false,
  },
  {
    name: "Wheat in Germany",
    value: "WoW",
    change: "-2.74%",
    isPositive: false,
  },
  {
    name: "Wheat in Netherlands",
    value: "WoW",
    change: "-0.04%",
    isPositive: false,
  },
  {
    name: "Wheat in Turkiye",
    value: "WoW",
    change: "+0.32%",
    isPositive: true,
  },
  {
    name: "Durum Wheat in Turkey",
    value: "WoW",
    change: "+1.45%",
    isPositive: true,
  },
];

const MarketIndicators: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType>();

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    swiperRef.current?.autoplay.stop();
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    swiperRef.current?.autoplay.start();
  };

  return (
    <div className="w-full bg-white dark:bg-secondary-black rounded-md shadow-sm overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={0}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="market-indicators-swiper"
      >
        {[...marketIndicators, ...marketIndicators].map((indicator, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div
              className={`flex justify-between items-center px-6 py-3 border-r dark:border-gray-700 
                whitespace-nowrap cursor-pointer transition-colors duration-100
                ${hoveredIndex === index ? "bg-gray-100 dark:bg-gray-800" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                console.log(`Clicked: ${indicator.name}`);
              }}
            >
              <span
                className={`text-sm font-medium dark:text-gray-200 mr-4
                ${hoveredIndex === index ? "text-primary-blue dark:text-primary-blue" : ""}`}
              >
                {indicator.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {indicator.value}
                </span>
                <span
                  className={`text-sm font-medium ${
                    indicator.isPositive ? "text-green" : "text-red"
                  }`}
                >
                  {indicator.change}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarketIndicators;
