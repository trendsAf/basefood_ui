import { GoDotFill } from "react-icons/go";
interface MarketInsightsProps {
  name: string;
  data: string[];
}

const MarketInsights = ({ name, data }: MarketInsightsProps) => {
  return (
    <div className="bg-white dark:bg-secondary-black py-1 lg:py-3 rounded px-4 w-full md:pb-4">
      <div className="insights-container">
        <h3 className="logo sm:text-xl sm:py-2 lg:p-0 lg:text-[12px] xl:text-sm 2xl:text-lg ">
          {name}
        </h3>
        <div className="flex flex-col gap-2">
          {data.map((item, idx) => (
            <p
              key={idx}
              className="dark:text-white/60 flex gap-1 items-start 2xl:text-sm xl:text-[13px] lg:text-[10px] sm:text-[21px]"
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
