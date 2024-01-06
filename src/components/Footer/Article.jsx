import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
export default function Article({ item }) {
  const { isLoading, data } = useFetch("articles");
  // خواندن ID مقاله از params
  const { id } = useParams();

  // یافتن مقاله با استفاده از ID
  const selectedArticle = data.find((article) => article.id.toString() === id);

  if (!selectedArticle) {
    // اگر مقاله با این ID پیدا نشد
    return <div>مقاله مورد نظر یافت نشد</div>;
  }
  return (
    <div className="w-full h-auto lg:pr-24 ">
      <div className="xl:h-96 xl:w-[500px] lg:h-80 lg:w-[400px]">
        <p className="pb-3 font-semibold text-gray-500 text-xl">آخرین مقالات</p>
        <div className="w-full h-full">
          <img
            src={selectedArticle.img}
            alt={selectedArticle.name}
            className="w-full h-full bg-cover bg-center"
          />
        </div>
        <div>
          <h1 className="font-bold-doran text-3xl my-2">
            {selectedArticle.name}
          </h1>
          <p className="text-justify">{selectedArticle.desc}</p>
          <div className="w-full my-6 flex justify-start items-center">
            <button className="py-1 px-3  bg-blue-500 rounded-full font-semibold text-white">
              بیشتر بخوانید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
