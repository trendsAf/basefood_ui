import React from "react";
import NewsList from "../components/NewsList";

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold dark:text-white">Market News</h1>
      </header>
      <main>
        <div className="bg-white dark:bg-secondary-black rounded overflow-hidden">
          <NewsList title={""} date={""} image={""} url={""} />
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
