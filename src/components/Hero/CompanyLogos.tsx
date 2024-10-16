import { useGSAP } from "@gsap/react";

import { companyLogos } from "../../constants";
import { CompanyLogosProps } from "../../lib/types";
import { animateScrollMultipleGsap } from "../../utils/animations";

function CompanyLogos({ className }: CompanyLogosProps) {
  // Animation for other companies' logos
  useGSAP(() => {
    animateScrollMultipleGsap({
      target: ".logo",
      animationProps: {
        opacity: 0,
        y: 100,
        ease: "power1.inOut",
      },
    });
  });

  // Returned JSX
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex items-center justify-center flex-1 h-[8.5rem] logo"
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyLogos;
