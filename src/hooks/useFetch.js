import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

/**
 * یک hook سفارشی برای درخواست داده از سرور.
 *
 * @param {string} url - آدرس URL برای درخواست داده از آن.
 * @returns {Object} یک شیء شامل isLoading و data.
 */
export default function useFetch(url) {
  // وضعیت برای نگهداری داده‌های دریافت شده
  const [data, setData] = useState([]);
  // وضعیت برای ردیابی وضعیت لودینگ
  const [isLoading, setIsLoading] = useState(false);
  // آدرس اصلی سرور
  const BASE_URL = "http://localhost:5000";

  // useEffect برای درخواست داده هنگامی که کامپوننت مونت شده یا URL تغییر کرده است
  useEffect(() => {
    async function fetchData() {
      try {
        // تنظیم وضعیت لودینگ به true قبل از ارسال درخواست
        setIsLoading(true);
        // ارسال درخواست GET به URL مشخص شده
        const { data } = await axios.get(`${BASE_URL}/${url}`);
        // تنظیم داده در وضعیت
        setData(data);
        // تنظیم وضعیت لودینگ به false پس از با موفقیت دریافت داده
        setIsLoading(false);
        // نمایش پیام موفقیت با استفاده از toast
        toast.success("داده با موفقیت دریافت شد!");
      } catch (err) {
        // تنظیم داده به یک آرایه خالی در صورت درخواست ناموفق
        setData([]);
        // نمایش پیام خطا با استفاده از toast
        toast.error(err?.response?.data?.message || "یک خطا رخ داده است");
      }
    }

    // فراخوانی تابع fetchData
    fetchData();
  }, [url]); // وابستگی‌های useEffect

  // بازگشت وضعیت لودینگ و داده‌های دریافت شده
  return { isLoading, data };
}
