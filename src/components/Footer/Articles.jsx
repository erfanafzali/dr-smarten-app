/* eslint-disable react/prop-types */

function Articles({ item }) {
  if (!item) return null;
  return (
    <div className="w-full mt-10">
      <div className=" h-30 flex justify-start items-center gap-x-10">
        <div className="">
          <img src={item.img} alt={item.img} />
        </div>
        <div className="w-full">
          <h1 className=" sm:text-base font-bold">{item.name}</h1>
          <div className="sm:text-sm text-xs">{item.date}</div>
          <p className="xl:pl-32 lg:pl-8 sm:text-sm text-xs">{String(item.desc).slice(0,55)}...</p>
        </div>
      </div>
    </div>
  );
}

export default Articles;
