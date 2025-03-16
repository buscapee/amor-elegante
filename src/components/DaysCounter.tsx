
import { useState, useEffect } from "react";
import { differenceInDays } from "date-fns";
import { Heart } from "lucide-react";

interface DaysCounterProps {
  startDate: string; // format: YYYY-MM-DD
}

const DaysCounter = ({ startDate }: DaysCounterProps) => {
  const [days, setDays] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const start = new Date(startDate);
    const today = new Date();
    const daysPassed = differenceInDays(today, start);
    setDays(daysPassed);

    // Add animation effect
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="glass-card p-6 rounded-xl text-center">
      <p className="text-sm font-medium text-romance-400 mb-1">
        Estamos juntos há
      </p>
      <div className="flex items-center justify-center">
        <div className="text-4xl md:text-5xl font-playfair font-bold text-romance-500">
          {days}
        </div>
        <Heart
          className={`w-8 h-8 ml-2 text-romance-500 ${
            animate ? "animate-heart-beat" : ""
          }`}
        />
      </div>
      <p className="text-sm font-medium mt-1 text-gray-600">dias</p>
    </div>
  );
};

export default DaysCounter;
