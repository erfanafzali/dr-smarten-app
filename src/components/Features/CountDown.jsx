import useCountdown from "../../hooks/useCountDown";

export default function CountDown() {
  const { hours, minutes, seconds, isActive, startCountdown, resetCountdown } =
    useCountdown();
  return (
    <div className="w-full flex flex-col justify-center items-center relative lg:right-[150px] lg:top-10">
      <div className="flex justify-center items-center gap-x-3 ">
        <div  className="flex flex-col justify-center items-center px-5 py-4 rounded-md gap-y-2 yekan font-bold text-xl bg-gray-600 text-white">
          <span>{seconds}</span>
          <span>ثانیه</span>
        </div>
        <div className="flex flex-col justify-center items-center px-5 py-4 rounded-md gap-y-2 yekan font-bold text-xl bg-gray-600 text-white">
          <span>{minutes}</span>
          <span>دقیقه</span>
        </div>
        <div className="flex flex-col justify-center items-center px-5 py-4 rounded-md gap-y-2 yekan font-bold text-xl bg-gray-600 text-white">
          <span>{hours}</span>
          <span>ساعت</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-10 my-3">
        <button onClick={startCountdown} className="px-3 py-1 whitespace-nowrap bg-green-500 rounded-xl font-bold text-white ">شروع</button>
        <button onClick={resetCountdown} className="px-3 py-1 whitespace-nowrap bg-orange-500 rounded-xl font-bold text-white">شروع مجدد</button>
      </div>
    </div>
  );
}
