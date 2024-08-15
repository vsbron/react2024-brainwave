import { MouseParallax } from "react-just-parallax";

import Section from "./Section";
import PricingList from "./PricingList";
import Heading from "../ui/Heading";

import { smallSphere, stars } from "../assets";
import { LeftLine, RightLine } from "../design/Pricing";

function Pricing() {
  // Returned JSX
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
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
        <Heading
          tag="get started with Brainwave"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
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
