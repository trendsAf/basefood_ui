/* eslint-disable react/jsx-key */
import { PiBagSimpleFill } from "react-icons/pi";
import { TbWorldBolt } from "react-icons/tb";
import { RiScales2Fill } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";

interface RFTQsDetailsCardProps {
  title: string;
  attribute: { name: string }[];
  details: { name: string }[];
  titleIndex: number;
}

const RFTQsDetailsCard: React.FC<RFTQsDetailsCardProps> = ({
  attribute,
  details,
  title,
  titleIndex,
}) => {
  const iconsData = [
    <PiBagSimpleFill />,
    <TbWorldBolt />,
    <RiScales2Fill />,
    <GiNotebook />,
    <FaTruck />,
    <LuWallet />,
    <GrNotes />,
  ];

  return (
    <div className="dark:text-white">
      <div className="flex items-center gap-2 text-xl dark:text-white">
        <span className="text-brand-blue/70 lg:text-2xl md:text-lg text-base">
          {iconsData[titleIndex]}
        </span>
        <h1 className="logo lg:text-2xl md:text-lg text-base">{title}</h1>
      </div>
      <div className="grid lg:grid-cols-[1fr_3fr] grid-cols-2 gap-x-2 gap-y-5 ">
        <div className="flex flex-col gap-2 ml-2 mt-2">
          {attribute.map((item, idx) => (
            <span
              key={idx}
              className="md:text-lg text-sm text-black/80 dark:text-white"
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="md:text-lg text-sm flex flex-col gap-2 mt-2 text-black/80 dark:text-white">
          {details.map((item, idx) => (
            <span key={idx}>{item.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RFTQsDetailsCard;
