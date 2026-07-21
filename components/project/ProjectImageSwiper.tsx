"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

interface ProjectImageSwiperProps {
  images: StaticImageData[];
  title: string;
}

const ProjectImageSwiper = ({ images, title }: ProjectImageSwiperProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((image, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static image list, no stable id
          <SwiperSlide key={`${title}-${index}`}>
            <button
              type="button"
              className="relative block w-full h-40 overflow-hidden"
              onClick={() => {
                setActiveIndex(index);
                setOpen(true);
              }}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 80vw"
                className="object-contain transition-transform duration-300 hover:scale-105"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button type="button" className="absolute top-4 right-4 text-white text-xl" onClick={() => setOpen(false)}>
            ✕
          </button>

          <Swiper
            modules={[Pagination]}
            initialSlide={activeIndex}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="w-full max-w-3xl"
          >
            {images.map((image, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static image list, no stable id
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image src={image} alt="" className="max-h-[80vh] w-auto object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ProjectImageSwiper;
