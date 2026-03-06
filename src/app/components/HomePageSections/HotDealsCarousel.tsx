"use client";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./HotDealsCarousel.module.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { DUMMY_PRODUCTS } from "@/lib/data/dummy-data";

export default function HotDealsCarousel() {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          635: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
          1268: {
            slidesPerView: 4,
          },
          1650: {
            slidesPerView: 5,
          },
          1950: {
            slidesPerView: 6,
          },
        }}
        loop={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Autoplay, Navigation]}
        className={styles.swiper}
      >
        {DUMMY_PRODUCTS.map((product) => (
          <SwiperSlide key={product.id} className={styles.swiperSlide}>
            <Link
              href="/"
              aria-label="Go to product details page"
              className={styles.slideContent}
            >
              {/* Product Image */}
              <Image
                src={product.imageUrl}
                alt="Product image"
                width={300}
                height={350}
              />
              <div className={styles.slideContentText}>
                <span>Ksh 123,000</span>
                <p>{product.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation outside swiper */}
      <div className={styles.swiperCustomNavigation}>
        <Link href="/">View All Latest Arrivals</Link>
        <div className={styles.swiperCustomNavigationBtns}>
          <button className={`${styles.swiperCustomNavigationBtn} custom-prev`}>
            <HiOutlineChevronLeft size={16} />
          </button>
          <button className={`${styles.swiperCustomNavigationBtn} custom-next`}>
            <HiOutlineChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
