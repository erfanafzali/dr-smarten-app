import useCountdown from "./../../hooks/useCountdown";
import { toPersianNumbers } from "../../hooks/toPersianNumbers";

export default function CountDown() {
  const { hours, minutes, seconds, isActive, startCountdown, resetCountdown } =
    useCountdown();

  const displayHours = toPersianNumbers(hours);
  const displayMinutes = toPersianNumbers(minutes);
  const displaySeconds = toPersianNumbers(seconds);
  return (
    <div className="w-full flex flex-col justify-center items-center relative lg:left-[100px] lg:top-10">
      <div className="flex justify-center items-center gap-x-3 ">
        <div className="flex flex-col justify-center items-center px-5 py-4 rounded-md gap-y-2 yekan font-bold text-xl bg-gray-600 text-white">
          <span className="text-4xl">{displaySeconds}</span>
          <span>ثانیه</span>
        </div>
        <div className="flex flex-col justify-center items-center px-5 py-4 rounded-md gap-y-2 yekan font-bold text-xl bg-gray-600 text-white">
          <span className="text-4xl">{displayMinutes}</span>
          <span>دقیقه</span>
        </div>
        <div className="flex flex-col justify-center items-center px-5 py-4 rounded-md gap-y-2 yekan font-bold text-xl bg-gray-600 text-white">
          <span className="text-4xl">{displayHours}</span>
          <span>ساعت</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-10 my-3">
        <button
          onClick={startCountdown}
          className="px-3 py-1 whitespace-nowrap bg-green-500 rounded-xl font-bold text-white ">
          شروع
        </button>
        <button
          onClick={resetCountdown}
          className="px-3 py-1 whitespace-nowrap bg-orange-500 rounded-xl font-bold text-white">
          شروع مجدد
        </button>
      </div>
    </div>
  );
}
