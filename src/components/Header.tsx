import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 59, seconds: 58 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#3f5c4f] h-10 flex items-center justify-center z-50">
      <div className="flex items-center text-white text-sm font-medium">
        <Clock className="w-4 h-4 mr-2" />
        <span>Oferta por tempo limitado — acaba em: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
      </div>
    </header>
  );
};

export default Header;