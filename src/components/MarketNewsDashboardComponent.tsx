import React from "react";

// Example market news data
const marketNews = [
  {
    id: 1,
    title: "Stock Markets Rally After Strong Earnings Reports",
    description:
      "The stock markets saw a significant rally today as major companies posted strong earnings reports. Analysts believe this could lead to continued growth...",
    date: "Sep 20, 2024",
    link: "#",
  },
  {
    id: 2,
    title: "Oil Prices Decline Amid Global Supply Concerns",
    description:
      "Oil prices declined sharply today as concerns over global supply disruptions intensified. Experts predict further volatility in the energy market...",
    date: "Sep 19, 2024",
    link: "#",
  },
  {
    id: 3,
    title: "Tech Sector Faces Regulatory Hurdles in Europe",
    description:
      "Major tech companies are facing increased scrutiny in Europe due to new regulatory measures aimed at data privacy and monopolistic practices...",
    date: "Sep 18, 2024",
    link: "#",
  },
  // Add more news items as needed
];

const truncateText = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const MarketNewsDashboardComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-2">
      <h2 className="text-lg font-bold dark:text-white">Market News</h2>
      <div className="flex flex-col gap-2">
        {marketNews.map((news) => (
          <div
            key={news.id}
            className="bg-white dark:bg-[#252525] shadow-md rounded-lg p-2"
          >
            <h3 className="text-lg font-semibold dark:text-white">
              {news.title}
            </h3>
            <div className="flex items-center justify-between pr-10">
              <p className="text-gray-600 dark:text-white text-sm mb-">
                {truncateText(news.description, 25)}
              </p>
              <p className="text-gray-500 text-xs mb-">{news.date}</p>
            </div>
            <a
              href={news.link}
              className="text-blue-500 hover:underline text-sm"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketNewsDashboardComponent;
