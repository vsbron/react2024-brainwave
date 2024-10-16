const MenuSvg = ({ openNavigation }: { openNavigation: boolean }) => {
  // Returned JSX
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className={`transition-all origin-center ${openNavigation ? "rotate-45" : "rotate-0"}`}
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
      />
      <rect
        className={`transition-all origin-center ${openNavigation ? "-rotate-45" : "rotate-0"}`}
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
      />
    </svg>
  );
};

export default MenuSvg;
