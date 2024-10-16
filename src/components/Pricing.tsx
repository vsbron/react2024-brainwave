import { MouseParallax } from "react-just-parallax";

import Section from "./Section.js";
import PricingList from "./PricingList.js";
import Heading from "../ui/Heading.js";

import { smallSphere, stars } from "../assets/index.js";
import { LeftLine, RightLine } from "../design/Pricing.js";
import { useGSAP } from "@gsap/react";
import {
  animateScrollGsap,
  animateTitleScrollGsap,
} from "../utils/animations.js";

function Pricing() {
  useGSAP(() => {
    // Animation for the title
    animateTitleScrollGsap({ target: ".pricing-title" });

    // Animation for benefits elements
    animateScrollGsap({
      target: ".planets-element",
      animationProps: {
        opacity: 0,
        y: 100,
        ease: "power1.inOut",
        duration: 0.75,
      },
    });
  });

  // Returned JSX
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex planets-element">
          <MouseParallax strength={0.015}>
            <img
              src={smallSphere}
              className="relative z-1 mx-auto"
              width={255}
              height={255}
              alt="Sphere"
            />
          </MouseParallax>

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <MouseParallax strength={0.06}>
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Start"
              />
            </MouseParallax>
          </div>
        </div>
        <div className="pricing-title">
          <Heading
            tag="get started with Brainwave"
            title="Pay once, use forever"
          />
        </div>
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#pricing"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Pricing;
