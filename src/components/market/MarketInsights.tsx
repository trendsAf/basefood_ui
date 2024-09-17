const MarketInsights = () => {
  const insights = [
    "Maize prices expected to rise due to drought in major producing regions",
    "Coffee exports from Uganda increased by 15% last month",
    "New trade agreement to boost wheat exports from Kenya",
    "Organic farming practices gaining traction in Rwanda",
  ];

  return (
    <div className="bg-white dark:bg-secondary-black py-3 rounded px-2">
      <h3 className="font-bold dark:text-white text-lg ml-2 mb-2">
        Market Insights
      </h3>
      <ul className="list-disc dark:text-dark-gray flex flex-col gap-1 pl-5">
        {insights.map((insight, index) => (
          <li key={index} className="text-sm mb-1">
            {insight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketInsights;
