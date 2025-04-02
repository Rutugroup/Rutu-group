import React, { useEffect, useState } from "react";

interface FlipCounterProps {
  count: number;
}

const FlipCounter: React.FC<FlipCounterProps> = ({ count }) => {
  const [prevCount, setPrevCount] = useState(count);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (prevCount !== count) {
      setFlipping(true);

      setTimeout(() => {
        setPrevCount(count);
        setFlipping(false);
      }, 500); // Slower flip animation (0.5s per number)
    }
  }, [count, prevCount]);

  return (
    <div className="flex space-x-2">
      {String(count)
        .padStart(5, "0") // Ensures 5-digit consistency (adjust if needed)
        .split("")
        .map((digit, index) => (
          <div
            key={index}
            className={`relative w-14 h-20 lg:w-16 lg:h-24 text-4xl lg:text-5xl text-[#e1bc6a] font-bold overflow-hidden flex items-center justify-center bg-white border-2 border-[#e1bc6a] rounded-md transition-transform duration-500 ${
              flipping ? "animate-flip" : ""
            }`}
          >
            <span className="absolute top-0">{digit}</span>
            <span className="absolute bottom-0 opacity-50">{digit}</span>
          </div>
        ))}
    </div>
  );
};

export default FlipCounter;
