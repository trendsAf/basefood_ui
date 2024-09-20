import { profile_image } from "../../../assets/images";
import { FaDotCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface BuyersModalProps {
  toggleModal: () => void;
}

const BuyersModal = ({ toggleModal }: BuyersModalProps) => {
  return (
    <div className="w-full h-full fixed inset-0 bg-black/10 flex items-center justify-center backdrop-blur-sm">
      <div
        className="absolute w-full h-full inset-0 -z-10"
        onClick={() => toggleModal()}
      ></div>
      <div className="lg:w-1/2 md:w-4/5 bg-white dark:bg-black pb-4 _shadow rounded">
        <div className="md:text-2xl flex items-center justify-between px-6 py-4 border-b">
          <h1>Choose a Representative</h1>
          <IoClose
            onClick={() => toggleModal()}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div className="px-8 py-6 flex flex-col ">
          <h1 className="my-2 md:text-lg">
            Choose a representative to contact.
          </h1>
          <div className="relative border border-brand-blue h-48 flex flex-col justify-between dark:bg-[#252525] dark:border-none">
            <div className="bg-[#F1F2F4] dark:bg-[#F1F2F4]/30 h-16 flex items-center justify-end">
              <FaDotCircle className="rounded-full text-xl text-brand-blue mr-4" />
            </div>
            <div className="absolute top-0 px-6 mt-6 flex items-end gap-4 ">
              <div className="w-28 h-24 overflow-hidden border-2 border-white">
                <img
                  src={profile_image}
                  alt="profile_image"
                  className="w-full h-full object-covers"
                />
              </div>
              <div className="w-full">
                <h1 className="md:text-lg text-sm">Mohamed rachid MAHJOUB</h1>
                <p className="text-xs">General Manager</p>
              </div>
            </div>
            <div className="md:px-6 md:pl-6 md:pr-0 pr-2 pl-6">
              <p className="pb-4 md:text-lg text-base">
                exploring new colaboration opprtunitues
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end px-8 border-t pt-4">
          <button className="bg-brand-blue px-6 py-2 text-white cursor-pointer">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyersModal;
