import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { eastern_product_image } from "../assets/images";
import RFTQsDetailsCard from "./common/cards/RFTQsDetailsCard";
import { rftqDetailsData } from "../utils/rftqDetailsData";
import BuyersInformationCard from "./common/cards/BuyersInformationCard";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const RFQDetails = () => {
  const theme = useSelector((state: RootState) => state.theme.value);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body")?.classList.add("dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="bg-slate-100 dark:bg-[#252525] min-h-screen mt-16 dark:text-white ">
        <div className="bg-white dark:bg-[#252525] py-16 flex flex-col gap-6 px-[15%]">
          <div className="space-y-6">
            <Link to={"/buyers"} className="flex items-center gap-2 text-lg">
              <MdArrowBackIosNew className="text-lg" /> RFQs
            </Link>
            <div className="inline-block rounded-r-full rounded-l-full bg-[#DAE6FC] dark:bg-transparent dark:border dark:border-white/40 px-2">
              <Link to={"#"} className="text-sm flex items-center gap-2">
                <h1>On going</h1>{" "}
                <b className="w-1 h-1 bg-black rounded-full"></b> D-3
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between lg:flex-row flex-col">
              <div className="flex items-center gap-10 lg:flex-row flex-col">
                <div className="lg:h-14 lg:w-14">
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
        <div className="bg-slate-100 dark:bg-black/90 dark:text-white px-[15%]">
          {rftqDetailsData.map((item, idx) => (
            <div
              key={idx}
              className={`py-5 ${idx === rftqDetailsData.length - 1 ? "border-b-0" : "border-b-2 dark:border-white/40"}`}
            >
              <RFTQsDetailsCard
                title={item.title}
                attribute={item.attribute.map((item) => item)}
                details={item.details.map((item) => item)}
                titleIndex={idx}
              />
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-[#252525] px-[15%] py-10">
          <h1 className="text-2xl logo py-5">Buyers Information</h1>
          <div className="border dark:border-white/40 p-10">
            <BuyersInformationCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default RFQDetails;
