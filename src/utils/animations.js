import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Helper function with all the gsap animation triggered on scroll
export const animateGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: () => (window.innerWidth < 640 ? "top 95%" : "top 85%"), // Adjust for mobile
      ...scrollProps,
    },
  });
};
