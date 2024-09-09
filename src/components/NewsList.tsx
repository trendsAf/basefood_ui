import React from "react";
import NewsItem from "./NewsItem";

interface NewsItemData {
  id: number;
  title: string;
  source: string;
  date: string;
  imageUrl: string;
}

const dummyNews: NewsItemData[] = [
  {
    id: 1,
    title:
      "US Equities Markets Close Higher Friday As Powell Hints Easing of Monetary Policy",
    source: "ABC NEWS",
    date: "Aug 23 '24",
    imageUrl:
      "https://st3.depositphotos.com/7865540/13838/i/450/depositphotos_138380864-stock-photo-viewof-newspaper-on-the-table.jpg",
  },
  {
    id: 2,
    title:
      "Equities Rally After Fed Chair Indicates 'Time Has Come' for Rate Cuts",
    source: "ABC NEWS",
    date: "Aug 23 '24",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/011/599/360/non_2x/newspaper-with-the-headline-news-and-glasses-and-coffee-cup-on-wooden-table-daily-newspaper-mock-up-concept-photo.jpg",
  },
  {
    id: 3,
    title:
      "Exchange-Traded Funds, Equity Futures Higher Pre-Bell Friday as Investors Hope for Dovish Powell Remarks",
    source: "ABC NEWS",
    date: "Aug 23 '24",
    imageUrl:
      "https://st3.depositphotos.com/7865540/13838/i/450/depositphotos_138380864-stock-photo-viewof-newspaper-on-the-table.jpg",
  },
];

const NewsList: React.FC = () => {
  return (
    <div className="bg-white dark:bg-secondary-black rounded-lg overflow-hidden">
      <div className="grid gap-4 p-4">
        {dummyNews.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
