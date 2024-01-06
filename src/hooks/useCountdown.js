 // useCountdown.js
import { useState, useEffect } from "react";

const useCountdown = (initialHours = 10, initialMinutes = 0, initialSeconds = 0) => {
  // بازیابی مقادیر از ذخیره‌سازی محلی (localStorage)
  const storedHours = parseInt(localStorage.getItem("countdownHours"), 10) || initialHours;
  const storedMinutes = parseInt(localStorage.getItem("countdownMinutes"), 10) || initialMinutes;
  const storedSeconds = parseInt(localStorage.getItem("countdownSeconds"), 10) || initialSeconds;

  // استفاده از useState برای نگه‌داشتن وضعیت‌های مختلف شمارش
  const [hours, setHours] = useState(storedHours);
  const [minutes, setMinutes] = useState(storedMinutes);
  const [seconds, setSeconds] = useState(storedSeconds);
  const [isActive, setIsActive] = useState(true);

  // ذخیره مقادیر در localStorage هر بار که تغییری در hours، minutes یا seconds رخ می‌دهد
  useEffect(() => {
    localStorage.setItem("countdownHours", hours.toString());
    localStorage.setItem("countdownMinutes", minutes.toString());
    localStorage.setItem("countdownSeconds", seconds.toString());
  }, [hours, minutes, seconds]);

  // اجرای تابع شمارش معکوس با استفاده از setInterval
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, hours, minutes, seconds]);

  // شروع شمارش معکوس
  const startCountdown = () => {
    if (hours >= 0 && minutes >= 0 && seconds >= 0) {
      setIsActive(true);
    }
  };

  // به‌روزرسانی مقادیر شمارش
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

  // بازنشانی شمارش به مقادیر ابتدایی (10 ساعت)
  const resetCountdown = () => {
    setIsActive(true);
    setHours(10);
    setMinutes(0);
    setSeconds(0);
  };

  // ارائه ویژگی‌ها و توابع مورد نیاز به عنوان نتیجه
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
