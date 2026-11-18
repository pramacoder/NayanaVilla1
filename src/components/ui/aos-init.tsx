"use client";

import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  React.useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
    });

    // Refresh after dynamic image or client-side rendering
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
