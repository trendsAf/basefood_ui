import React, { useState } from "react";
import NewsList from "../components/NewsList";

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Top Market");

  const categories = ["Top Market", "Global Market", "Corporate Events"];

  return (
    <div className="container mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold dark:text-white">Market News</h1>
        <nav className="mt-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-2 text-sm border rounded transition-colors duration-200 ease-in-out
                  ${
                    activeCategory === category
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-white dark:bg-secondary-black rounded overflow-hidden">
          <NewsList />
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
