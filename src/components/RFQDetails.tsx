import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { eastern_product_image } from "../assets/images";

const RFQDetails = () => {
  return (
    <div className="bg-slate-100 min-h-screen mt-16 ">
      <div className="bg-white py-16 flex flex-col gap-6 px-[15%]">
        <div className="space-y-6">
          <Link to={"#"} className="flex items-center gap-2 text-lg">
            <MdArrowBackIosNew className="text-lg" /> RFQs
          </Link>
          <div className="inline-block rounded-r-full rounded-l-full bg-[#DAE6FC] px-2">
            <Link to={"#"} className="text-sm flex items-center gap-2">
              <h1>On going</h1>{" "}
              <b className="w-1 h-1 bg-black rounded-full"></b> D-3
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div className="h-14 w-14">
                <img
                  src={eastern_product_image}
                  alt="eastern_image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl logo">Wheat Flour</h1>
                <p className="text-xl">
                  a powder made from the grinding of common wheat
                </p>
                <span className="text-sm">
                  Request Duration: Aug 18, 2024 ~ Sep 17, 2024 at 21:36
                  (GMT+02:00)
                </span>
              </div>
            </div>

            <div>
              <button className="px-8 py-2 bg-brand-blue text-white">
                Submit quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 px-[15%]">ha</div>
    </div>
  );
};

export default RFQDetails;
