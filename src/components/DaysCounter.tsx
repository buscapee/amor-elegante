
import { useState, useEffect } from "react";
import { differenceInDays } from "date-fns";
import { HeartPulse } from "lucide-react";

interface DaysCounterProps {
  startDate?: string; // format: YYYY-MM-DD, now optional
}

const DaysCounter = ({ startDate }: DaysCounterProps) => {
  const [actualDays, setActualDays] = useState<number>(0);
  const [displayDays, setDisplayDays] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState<boolean>(false);

  useEffect(() => {
    // Use June 22, 2024 as the fixed start date
    const fixedStartDate = "2024-06-22";
    const actualStartDate = startDate || fixedStartDate;
    
    // Function to calculate and update days
    const updateDaysCount = () => {
      const start = new Date(actualStartDate);
      const today = new Date();
      const daysPassed = differenceInDays(today, start);
      setActualDays(daysPassed);
      
      // Only start the counting animation if it hasn't been done before
      if (!initialAnimationComplete) {
        // Reset display days to animate from 1
        setDisplayDays(0);
        
        // Animate counting up
        const duration = 3000; // 3 seconds for the animation
        const frameRate = 60;
        const totalFrames = duration / (1000 / frameRate);
        const increment = daysPassed / totalFrames;
        let currentFrame = 0;
        
        const animationInterval = setInterval(() => {
          currentFrame++;
          setDisplayDays(Math.ceil(Math.min(increment * currentFrame, daysPassed)));
          
          if (currentFrame >= totalFrames) {
            clearInterval(animationInterval);
            setDisplayDays(daysPassed);
            setInitialAnimationComplete(true);
          }
        }, 1000 / frameRate);
        
        return () => clearInterval(animationInterval);
      } else {
        // If initial animation is already done, just update the display directly
        setDisplayDays(daysPassed);
      }
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

    // Enhanced heartbeat animation
    const heartbeatInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 800); // Shorter duration to make it more pronounced
    }, 2000); // More frequent heartbeats

    return () => {
      clearTimeout(midnightTimeout);
      clearInterval(heartbeatInterval);
    };
  }, [startDate, initialAnimationComplete]);

  return (
    <div className="glass-card p-6 rounded-xl text-center">
      <p className="text-sm font-medium text-romance-400 mb-1">
        Estamos juntos há
      </p>
      <div className="flex items-center justify-center">
        <div className="text-4xl md:text-5xl font-playfair font-bold text-romance-500">
          {displayDays}
        </div>
        <HeartPulse
          className={`w-10 h-10 ml-2 text-romance-500 ${
            animate ? "animate-[heart-beat_0.8s_ease-in-out]" : ""
          }`}
          fill={animate ? "#f43f5e" : "none"}
          strokeWidth={animate ? 2.5 : 2}
        />
      </div>
      <p className="text-sm font-medium mt-1 text-gray-600">dias</p>
    </div>
  );
};

export default DaysCounter;
