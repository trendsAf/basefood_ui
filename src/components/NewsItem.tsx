import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface NewsItemProps {
  title: string;
  date: string;
  image?: string;
  url: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, image, url }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-lg">
      <div className="mb-2 flex items-center gap-2">
        {isLoading ? (
          <Skeleton className="h-14 w-14" />
        ) : (
          image && (
            <img src={image} alt={title} className="h-14 w-14 object-cover" />
          )
        )}

        <div>
          {isLoading ? (
            <Skeleton className="w-[30rem] h-4" />
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-white text-black hover:text-brand-blue text-xl"
            >
              {title}
            </a>
          )}

          {isLoading ? (
            <Skeleton className="w-[10rem] h-4" />
          ) : (
            <p className="text-gray-500 text-sm">{date}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
