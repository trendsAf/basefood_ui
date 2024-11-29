import { GoDotFill } from "react-icons/go";
interface MarketInsightsProps {
  name: string;
  data: string[];
}

const MarketInsights = ({ name, data }: MarketInsightsProps) => {
  return (
    <div className="bg-white dark:bg-secondary-black py-3 rounded px-4 w-full">
      <div className="insights-container">
        <h3 className="logo text-lg">{name}</h3>
        <div className="flex flex-col gap-2">
          {data.map((item, idx) => (
            <p
              key={idx}
              className="text-white/60 flex gap-1 items-start text-sm"
            >
              <GoDotFill className="mt-1" /> {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;
