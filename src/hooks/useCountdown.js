// useCountdown.js
import { useState, useEffect } from "react";

const useCountdown = (initialMinutes = 0, initialSeconds = 0) => {
  const storedHours =
    parseInt(localStorage.getItem("countdownHours"), 10) || 10;
  const storedMinutes =
    parseInt(localStorage.getItem("countdownMinutes"), 10) || initialMinutes;
  const storedSeconds =
    parseInt(localStorage.getItem("countdownSeconds"), 10) || initialSeconds;

  const [hours, setHours] = useState(storedHours);
  const [minutes, setMinutes] = useState(storedMinutes);
  const [seconds, setSeconds] = useState(storedSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("countdownHours", hours.toString());
    localStorage.setItem("countdownMinutes", minutes.toString());
    localStorage.setItem("countdownSeconds", seconds.toString());
  }, [hours, minutes, seconds]);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          setIsActive(false);
        } else {
          updateCountdown();
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, hours, minutes, seconds]);

  const startCountdown = () => {
    if (hours >= 0 && minutes >= 0 && seconds >= 0) {
      setIsActive(true);
    }
  };

  const updateCountdown = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else if (minutes > 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else if (hours > 0) {
      setHours(hours - 1);
      setMinutes(59);
      setSeconds(59);
    }
  };

  const resetCountdown = () => {
    setIsActive(false);
    setHours(storedHours);
    setMinutes(storedMinutes);
    setSeconds(storedSeconds);
  };

  return {
    hours,
    minutes,
    seconds,
    isActive,
    startCountdown,
    resetCountdown,
  };
};

export default useCountdown;
