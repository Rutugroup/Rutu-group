"use client";

import React, { useEffect, useRef, useState } from "react";
import { Building, Users, Home, SquareIcon as SquareFeet } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  duration: number;
  icon: React.ReactNode;
  label: string;
}

export default function StatsCounter() {
  function FlipCounter({ count }: { count: number }) {
    const [prevCount, setPrevCount] = useState(count);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
      if (prevCount !== count) {
        setFlip(true);
        setTimeout(() => {
          setPrevCount(count);
          setFlip(false);
        }, 1500);
      }
    }, [count, prevCount]);

    const digits = String(prevCount)
      .padStart(String(count).length, "0")
      .split("");
    const newDigits = String(count)
      .padStart(String(count).length, "0")
      .split("");

    return (
      <>
        <style jsx>{`
          @keyframes flip {
            0% {
              transform: rotateX(0deg);
            }
            35% {
              transform: rotateX(-90deg);
            }
            65% {
              transform: rotateX(90deg);
            }
            100% {
              transform: rotateX(0deg);
            }
          }
          .flip-container {
            display: flex;
            gap: 4px;
          }
          .digit-wrapper {
            perspective: 600px;
          }
          .digit {
            width: 2.5rem;
            height: 3.5rem;
            background-color: white;
            color: #e1bc6a;
            border: 2px solid #e1bc6a;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: bold;
            position: relative;
            transition: background 0.3s;
          }
          @media (min-width: 1024px) {
            .digit {
              width: 3rem;
              height: 4rem;
              font-size: 2.4rem;
            }
          }
          .flip {
            animation: flip 1.5s ease-in-out;
          }
        `}</style>

        <div className="flip-container">
          {digits.map((digit, index) => {
            const newDigit = newDigits[index];
            const isChanging = digit !== newDigit && flip;

            return (
              <div key={index} className="digit-wrapper">
                <div className={`digit ${isChanging ? "flip" : ""}`}>
                  {isChanging ? newDigit : digit}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function Counter({ end, suffix, duration, icon, label }: CounterProps) {
    const countRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      let animationFrameId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);

        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [end, duration, isVisible]);

    // Capitalizing first letter of the label
    const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);

    return (
      <div ref={countRef} className="flex flex-col items-center text-center">
        <div className="text-[#e1bc6a] mb-4">{icon}</div>
        <FlipCounter count={count} />
        <div className="mt-2 text-xl font-bold text-[#e1bc6a]">{suffix}</div>
        <p className="font-roboto text-gray-600 mt-2 text-2xl font-bold">
          {capitalizedLabel}
        </p>{" "}
        {/* Updated label */}
      </div>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFFBEC]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter
            end={45}
            suffix="+"
            duration={4000}
            icon={<Building className="w-12 h-12" />}
            label="years legacy"
          />
          <Counter
            end={45}
            suffix="+"
            duration={4000}
            icon={<Home className="w-12 h-12" />}
            label="finished projects"
          />
          <Counter
            end={10000}
            suffix="+"
            duration={5000}
            icon={<Users className="w-12 h-12" />}
            label="happy families"
          />
          <Counter
            end={10}
            suffix=" million sq.ft"
            duration={5000}
            icon={<SquareFeet className="w-12 h-12" />}
            label="spaces developed"
          />
        </div>
      </div>
    </section>
  );
}
