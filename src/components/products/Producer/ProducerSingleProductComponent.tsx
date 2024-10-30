/* eslint-disable no-console */
import { useLocation } from "react-router-dom";

const ProducerSingleProductComponent = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data, "Daaaaaaada");
  return (
    <div className="dark:text-white">
      <div className="flex">
        <div className="w-full h-[80vh]">
          <img
            src={data?.image}
            alt="image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full p-5">
          <h1>{data?.name}</h1>
          <h1>{data?.description}</h1>
          <h1>{data?.price}</h1>
          <h1>{data?.quantity}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProducerSingleProductComponent;
