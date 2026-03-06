"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import component styles
import styles from "./BannersCarousel.module.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { EffectCreative, Pagination } from "swiper/modules";

import { BANNERS } from "@/lib/data/dummy-data";

export default function BannersCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect={"creative"}
        grabCursor={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative, Pagination]}
        style={{
          // @ts-expect-error
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "14px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className={styles.carouselWrapper}>
              <Image
                src={banner.imageUrl}
                alt="Banner image"
                fill
                priority
                sizes="(min-width: 1024px) 75vw, 100vw"
                className={styles.carouselImage}
              />
              <div className={styles.carouselOverlayBg} />
              <div className={styles.carouselTextOverlay}>
                <h1>{banner.title}</h1>
                <p>Hurry while stock lasts!</p>
                <button>SHOP NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
