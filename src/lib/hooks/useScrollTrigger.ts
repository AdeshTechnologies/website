"use client";

import { useEffect, useState } from "react";

export function useScrollTrigger(threshold: number) {
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setStickyNavbar(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return stickyNavbar;
}
