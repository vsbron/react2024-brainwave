import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Helper function that sets when the animation starts
const animationStartTrigger = () =>
  window.innerWidth < 640 ? "top 95%" : "top 85%";

// Helper function to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// GSAP animation function that triggers on scroll
export const animateScrollGsap = (target, animationProps, scrollProps) => {
  gsap.from(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart none none reverse",
      start: animationStartTrigger,
      ...scrollProps,
    },
  });
};

// GSAP animation function that triggers multiple elements on scroll and shuffles them
export const animateScrollMultipleGsap = (
  target,
  animationProps,
  scrollProps
) => {
  // Select all elements with the given selector
  const elements = document.querySelectorAll(target);

  // Convert NodeList to array and shuffle the order
  const shuffledElements = shuffleArray(Array.from(elements));

  // Apply gsap animation to each element in the shuffled order
  shuffledElements.forEach((element, index) => {
    gsap.from(element, {
      ...animationProps,
      delay: index * 0.075,
      scrollTrigger: {
        trigger: element,
        toggleActions: "restart none none reverse",
        start: animationStartTrigger,
        ...scrollProps,
      },
    });
  });
};

// GSAP animation function for the section titles
export const animateTitleScrollGsap = (target, animationProps) => {
  gsap.from(target, {
    opacity: 0,
    // Check if any props of positioning passed, if no, do the default one
    ...(animationProps || { y: 100 }),
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart none none reverse",
      start: animationStartTrigger,
    },
  });
};
