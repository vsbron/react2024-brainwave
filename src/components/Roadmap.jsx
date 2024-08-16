import { roadmap } from "../constants";

import Section from "./Section";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Tagline from "../ui/Tagline";

import { check2, grid, loading1 } from "../assets";

function Roadmap() {
  // Returned JSX
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading title="What we're working on" tag="Ready to get started" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            // Setting the status const of the item
            const isStatusDone = item.status === "done";

            // Returned JSX
            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-4">
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between mb-8 max-[430px]:flex-col max-[430px]:gap-3 max-[430px]:items-start">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={isStatusDone ? check2 : loading1}
                          className={`mr-2.5 ${!isStatusDone && "animate-[spin_2000ms_linear_infinite]"}`}
                          width={16}
                          height={16}
                          alt="Status"
                        />
                        <div className="tagline">{item.status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="#roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
}

export default Roadmap;
Roadmap;
