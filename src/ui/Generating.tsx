import { loading } from "../assets";
import { GeneratingProps } from "../lib/types";

function Generating({ className }: GeneratingProps) {
  // Returned JSX
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}
    >
      <img
        className="w-5 h-5 mr-4 animate-[spin_1500ms_linear_infinite]"
        src={loading}
        alt="Loading"
      />
      AI is generating
    </div>
  );
}

export default Generating;
