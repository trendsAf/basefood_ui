import React from "react";

interface NewsItem {
  title: string;
  date: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    image:
      "https://media.istockphoto.com/id/813136942/photo/selective-focus-of-stacking-magazine-place-on-table-in-living-room.jpg?s=612x612&w=0&k=20&c=6nRlgDo9ecsb1vCPlN8G4cmq4vf8lW4YkSMhoU-jSqE=",
    title: "US Equities Markets Close Higher...",
    date: "Aug 23, 2024",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/011/599/360/non_2x/newspaper-with-the-headline-news-and-glasses-and-coffee-cup-on-wooden-table-daily-newspaper-mock-up-concept-photo.jpg",
    title: "Equities Rally After Fed Chair...",
    date: "Aug 23, 2024",
  },
  {
    image:
      "https://st3.depositphotos.com/7865540/13838/i/450/depositphotos_138380864-stock-photo-viewof-newspaper-on-the-table.jpg",
    title: "Exchange-Traded Funds, Equity...",
    date: "Aug 23, 2024",
  },
];

const MarketNews: React.FC = () => {
  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Market News</h2>
      <div>
        {newsData.map((news, index) => (
          <div key={index} className="mb-2 flex gap-3">
            <img src={news.image} alt="" className="h-10 w-10 object-cover" />
            <div>
              <a href="#" className="text-blue-500 hover:underline">
                {news.title}
              </a>
              <p className="text-gray-500 text-sm">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketNews;
