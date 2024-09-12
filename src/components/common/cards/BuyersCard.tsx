import { MdVerified } from "react-icons/md";

interface BuyersCardProps {
  companyName: string;
  countryFlag: string;
  countryName: string;
  profile: string;
  companyImage: string;
  description: string;
  name: string;
}

const BuyersCard = ({
  companyName,
  companyImage,
  countryName,
  countryFlag,
  name,
  profile,
  description,
}: BuyersCardProps) => {
  return (
    <div className="flex flex-col p-4 border">
      <div className=" flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg">{companyName}</h1>
              <MdVerified className="text-blue-600 text-2xl" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{countryFlag}</span>
              <h1 className="text-sm">{countryName}</h1>
            </div>
          </div>
          <div className="w-12 h-6 bg-blue-500 mt-2">
            <img
              src={companyImage}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400">
            <img
              src={profile}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm">{name}</p>
        </div>
        <div>
          <button className="px-6 py-1 bg-slate-200">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default BuyersCard;
