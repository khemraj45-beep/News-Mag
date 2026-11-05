import NewsItems from "./NewsItems";
import { useEffect, useState } from "react";
const NewsBoard = ({ catagory }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const fetchArticles = async () => {
      setError(null);
      setIsLoading(true);

      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!isActive) return;

        if (data?.status !== "ok" || !Array.isArray(data.articles)) {
          setError(data?.message || "Unable to load articles");
          setArticles([]);
        } else {
          setArticles(data.articles);
        }
      } catch (err) {
        if (!isActive) return;
        setError(err.message || "Fetch failed");
        setArticles([]);
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchArticles();

    return () => {
      isActive = false;
    };
  }, [catagory]);

  return (
    <div>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>
      {isLoading ? (
        <p className="text-center">Loading articles...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : articles.length === 0 ? (
        <p className="text-center">No news articles available.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 px-3">
          {articles.map((news, index) => {
            return (
              <div className="col" key={index}>
                <NewsItems
                  title={news?.title}
                  description={news?.description}
                  src={news?.urlToImage}
                  url={news?.url}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
