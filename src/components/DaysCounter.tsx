
import { useState, useEffect } from "react";
import { differenceInDays } from "date-fns";
import { Heart } from "lucide-react";

interface DaysCounterProps {
  startDate?: string; // format: YYYY-MM-DD, now optional
}

const DaysCounter = ({ startDate }: DaysCounterProps) => {
  const [days, setDays] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    // Use June 22, 2024 as the fixed start date
    const fixedStartDate = "2024-06-22";
    const actualStartDate = startDate || fixedStartDate;
    
    // Function to calculate and update days
    const updateDaysCount = () => {
      const start = new Date(actualStartDate);
      const today = new Date();
      const daysPassed = differenceInDays(today, start);
      setDays(daysPassed);
    };
    
    // Initial calculation
    updateDaysCount();
    
    // Set up daily update at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();
    
    // Update days count immediately and set a timeout for the next update at midnight
    const midnightTimeout = setTimeout(() => {
      updateDaysCount();
      
      // Then set up an interval to update every 24 hours
      const dailyInterval = setInterval(updateDaysCount, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);

    // Animation effect
    const animationInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1500);
    }, 5000);

    return () => {
      clearTimeout(midnightTimeout);
      clearInterval(animationInterval);
    };
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
