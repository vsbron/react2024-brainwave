import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import { LeftCurve, RightCurve } from "../ui/Collaboration";

import Button from "../ui/Button";
import Section from "./Section";
import { MouseParallax } from "react-just-parallax";

function Collaboration() {
  // Returned JSX
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="Check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        {/* Apps circle */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <MouseParallax strength={0.025} isAbsolutelyPositioned>
              <div className="flex w-60 aspect-square border border-n-6 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img
                      src={brainwaveSymbol}
                      width={48}
                      height={48}
                      alt="Brainwave"
                    />
                  </div>
                </div>
              </div>
            </MouseParallax>

            {/* App Icons */}
            <MouseParallax strength={0.01}>
              <ul>
                {collabApps.map((app, i) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${i * 45}`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${i * 45}`}
                    >
                      <img
                        src={app.icon}
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </MouseParallax>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Collaboration;
