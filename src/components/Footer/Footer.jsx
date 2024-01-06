import useFetch from "../../hooks/useFetch";
import Article from "./Article";
import Articles from "./Articles";
import { HashLink } from "react-router-hash-link";
function Footer() {
  return (
    <div className="w-full flex justify-center items-start  h-auto mt-32 mb-20 lg:pb-64 px-6 flex-col lg:flex-row">
      <Article id="section1" />
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
            <HashLink smooth key={item.id} to={`/article/${item.id}#section1`}>
              <Articles item={item} />
            </HashLink>
          ))}
        </div>
      )}
    </div>
  );
}
