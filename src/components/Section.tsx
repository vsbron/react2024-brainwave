import SectionSvg from "../assets/svg/SectionSvg";
import { SectionProps } from "../lib/types";

function Section({
  className,
  id,
  crosses = false,
  crossesOffset,
  customPaddings = false,
  children,
}: SectionProps) {
  // Returned JSX
  return (
    <section
      id={id}
      className={`
        relative 
        ${customPaddings || `py-4 lg:py-12 xl:py-16 ${crosses && "lg:py-24"}`} 
        ${className || ""}`}
    >
      {id !== "footer" && <div className={`h-[5.25rem] md:h-[4.75rem]`} />}
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
}

export default Section;
