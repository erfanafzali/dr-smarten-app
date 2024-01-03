function Introduction() {
  return (
    <div className=" w-full relative mt-20">
      <div className="flex justify-center items-center w-full flex-col">
        <img src="/src/assets/images/بخش معرفی کتاب.png" alt="" />
        <div className="absolute font-bold-doran text-left  left-[40px]  top-[40px] sm:left-[50px] sm:top-[80px] md:left-[70px] md:top-[100px] lg:left-[100px] lg:top-[130px] xl:left-[300px] xl:top-[180px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold">معرفی کتاب</h2>
          <h3 className="flex flex-col justify-center items-end text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700">
            <span>توضیحات مرتبط</span>
            <span className="border-b-4 border-white pb-4">در مورد کتاب</span>
          </h3>
          <p className="flex text-white sm:flex-col gap-x-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <span>نام نویسنده:</span>
            <span>اسم و فامیل</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
