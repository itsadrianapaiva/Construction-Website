import React, { useState, useEffect } from "react";
import { CounterProps } from "../types/components";


const Counter: React.FC<CounterProps> = ({
  start = 0,
  end,
  duration = 2000,
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const steps = Math.abs(end - start);
    const stepDuration = duration / steps;
    let current = start;

    const timer = setInterval(() => {
      current = Math.round(current + 1);
      
      if (current >= end) {
        current = end; 
        clearInterval(timer);
      }
      setCount(current);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span>{count}</span>;
};

export default Counter;
