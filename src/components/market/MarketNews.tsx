/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface NewsItem {
  title: string;
  date: string;
  image: string;
  url: string;
}

const MarketNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const getNews = async () => {
    try {
      const response = await axios.get(
        // "https://newsapi.org/v2/everything?q=tesla&from=2024-08-16&sortBy=publishedAt&apiKey=bfd7d86bab164533af3ed5ac5d79d412",
        "https://finnhub.io/api/v1/global-filings/search?token=crkl0bhr01qq23fi0qo0crkl0bhr01qq23fi0qog",
      );

      // const formattedNews = response.data.articles.map((article: any) => ({
      //   title: article.title,
      //   date: new Date(article.publishedAt).toLocaleDateString("en-US", {
      //     month: "short",
      //     day: "numeric",
      //     year: "numeric",
      //   }),
      //   image: article.urlToImage,
      //   url: article.url,
      // }));

      // setNews(formattedNews);
      console.log(response, "Reeeeesssssspooonse");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleShowMore = () => {
    setVisibleNewsCount((prevCount) => prevCount + 4);
  };

  const handleShowLess = () => {
    setVisibleNewsCount(4);
  };

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-lg">
      <h2 className="text-sm font-bold mb-4">Market News</h2>
      <div>
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="mb-2 flex items-center gap-2">
                  <Skeleton className="h-14 w-14" />
                  <div className="flex-1">
                    <Skeleton width="70%" />
                    <Skeleton width="50%" />
                  </div>
                </div>
              ))
          : news.slice(0, visibleNewsCount).map((newsItem, index) => (
              <div key={index} className="mb-2 flex items-center gap-2">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="h-10 w-10 object-cover"
                />
                <div>
                  <a
                    href={newsItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-white text-black hover:text-brand-blue text-md"
                  >
                    {newsItem.title}
                  </a>
                  <p className="text-gray-500 text-xs">{newsItem.date}</p>
                </div>
              </div>
            ))}
      </div>

      {news.length > visibleNewsCount ? (
        <Link to={"/news"}>
          <button
            onClick={handleShowMore}
            className="mt-4 text-brand-blue text-sm hover:underline"
          >
            View More
          </button>
        </Link>
      ) : (
        visibleNewsCount > 4 && (
          <button
            onClick={handleShowLess}
            className="mt-4 text-brand-blue text-sm hover:underline"
          >
            View Less
          </button>
        )
      )}
    </div>
  );
};

export default MarketNews;
