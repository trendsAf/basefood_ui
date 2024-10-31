import { Link } from "react-router-dom";
import { products } from "../../../utils/products/products";

const ConsumerProductComponent = () => {
  return (
    <div className="dark:text-white p-6">
      <div className="dark:bg-[#1f2937] px-5 pt-5">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-700 rounded-lg p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {product.description}
                </p>
                <p className="text-blue-500 font-semibold mb-2">
                  Price: ${product.price}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Quantity: {product.quantity}
                </p>
              </div>
              <div className="w-full">
                <Link to={`/products/${product.id}`} state={product}>
                  <button className="bg-blue-800 px-8 py-1 w-full mt-4">
                    Preview product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumerProductComponent;
