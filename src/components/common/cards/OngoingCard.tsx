import { MdVerified } from "react-icons/md";

interface OngoingCardProps {
  companyName: string;
  companyRevenue: string;
  onGoing: number;
  productName: string;
  productQuantity: number;
  productCategory: string;
  portOfDestination: string;
  sourcingCountries: string;
  requestDuration: string;
}

const OngoingCard = ({
  companyName,
  companyRevenue,
  onGoing,
  productName,
  productQuantity,
  portOfDestination,
  productCategory,
  requestDuration,
  sourcingCountries,
}: OngoingCardProps) => {
  return (
    <div className=" border p-5 mt-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold">{companyName}</h1>
            <MdVerified className="text-blue-600 text-lg" />
          </div>
          <div>
            <h1 className="text-xs">{companyRevenue}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <button className="py-1 px-3 rounded-l-full rounded-r-full bg-slate-500">
              Ongoing D-{onGoing}
            </button>
            <div className="flex items-center gap-2">
              <h1>{productName}</h1>
              <h1>{productQuantity} ton</h1>
            </div>
          </div>
          <div className="grid grid-cols-2  items-start">
            <div className="text-slate-500">
              <h1>Product Category</h1>
              <h1>Port of Destination`</h1>
              <h1>Sourcing Countries</h1>
              <h1>Request Duration</h1>
            </div>
            <div>
              <h1>{productCategory}</h1>
              <h1>{portOfDestination}</h1>
              <h1>{sourcingCountries}</h1>
              <h1>{requestDuration}</h1>
            </div>
          </div>
        </div>
        <div>
          <button className="px-6 py-1 bg-slate-200">Submit Qoute</button>
        </div>
      </div>
    </div>
  );
};

export default OngoingCard;
