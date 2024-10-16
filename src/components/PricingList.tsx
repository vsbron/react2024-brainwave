import { pricing } from "../constants";

import Button from "../ui/Button";

import { check } from "../assets";

import { useGSAP } from "@gsap/react";
import { animateScrollMultipleGsap } from "../utils/animations";

function PricingList() {
  useGSAP(() => {
    // Animation for the pricing options elements
    animateScrollMultipleGsap({
      target: ".pricing-element",
      animationProps: {
        opacity: 0,
        scale: 0.75,
        ease: "power2.in",
      },
    });
  });

  // Returned JSX
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto py-6 even:sm:py-14 odd:sm:py-8 max-sm:my-2 sm:odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 pricing-element"
        >
          <h4 className="h4 mb-2 sm:mb-4">{item.title}</h4>
          <p className="body-2 min-h-[2rem] sm:min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-4 sm:mb-6">
            {item.price && (
              <>
                <div className="h3 mr-1.5">$</div>
                <div className="text-[4.5rem] sm:text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-[16rem] lg:w-full mb-4"
            href={item.price ? "#pricing" : "mailto:info@jsm.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact Us"}
          </Button>
          <ul>
            {item.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start py-3 sm:py-5 border-t border-n-6"
              >
                <img
                  src={check}
                  width={24}
                  height={24}
                  className="max-sm:scale-[0.8]"
                  alt="Check"
                />
                <p className="body-2 ml-3 sm:ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PricingList;
