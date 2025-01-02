import React, { useState, useEffect } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div onClick={scrollToTop} className="scroll-to-top">
        <ExpandCircleDownIcon className="scroll-to-top-button" />
      </div>
    )
  );
};

export default ScrollToTopButton;
