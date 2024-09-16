/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

interface NewsItem {
  title: string;
  date: string;
  image: string;
  url: string;
}

const NewsList: React.FC<NewsItem> = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-08-16&sortBy=publishedAt&apiKey=bfd7d86bab164533af3ed5ac5d79d412",
      );

      const formattedNews = response.data.articles.map((article: any) => ({
        title: article.title,
        date: new Date(article.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        image: article.urlToImage,
        url: article.url,
      }));

      setNews(formattedNews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="bg-white dark:bg-secondary-black rounded-lg overflow-hidden">
      <div className="grid p-4">
        {news.map((item, idx) => (
          <NewsItem
            key={idx}
            title={item.title}
            date={item.date}
            image={item.image}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
