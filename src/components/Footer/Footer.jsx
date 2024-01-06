import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Article from "./Article";
import Articles from "./Articles";

function Footer() {
  return (
    <div className="w-full flex justify-center items-start  h-auto my-32 lg:pb-64 px-6 flex-col lg:flex-row">
      <Article />
      <ListArticles />
    </div>
  );
}

export default Footer;

export function ListArticles() {
  const { isLoading, data } = useFetch("articles");

  return (
    <div className="w-full">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="w-full md:space-y-9 sm:space-y-7 space-y-5">
          {data.map((item) => (
            <Link key={item.id} to={`/article/${item.id}`}>
              <Articles item={item}  />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
