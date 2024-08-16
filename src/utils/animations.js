import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Helper function with all the gsap animation triggered on scroll
export const animateGsap = (target, animationProps, scrollProps) => {
  gsap.from(target, {
    ...animationProps,
    stagger: 0.1,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart none none reverse",
      start: () => (window.innerWidth < 640 ? "top 95%" : "top 80%"), // Adjust for mobile
      ...scrollProps,
    },
  });
};
