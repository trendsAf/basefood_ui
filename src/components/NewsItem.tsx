import React from "react";

interface NewsItemProps {
  title: string;
  source: string;
  date: string;
  imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  source,
  date,
  imageUrl,
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-secondary-black dark:text-white rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out">
      <img
        src={imageUrl}
        alt={title}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
          <span className="font-medium text-gray-800 dark:text-gray-200 mr-2">
            {source}
          </span>
          <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mx-2"></span>
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
