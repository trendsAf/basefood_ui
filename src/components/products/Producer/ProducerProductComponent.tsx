import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { products } from "../../../utils/products/products";
import AddProductModal from "../forms/AddProductModal";
import ProductActionModal from "../common/ProductActionModal";
import EditProductModal from "../forms/EditProductModal";

const ProducerProductComponent = () => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const toggleModal = (event: React.MouseEvent<SVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top: rect.bottom, left: rect.left });
    setModal(!modal);
  };

  const toggleProductModal = () => {
    setAddProductModal(!addProductModal);
  };

  const toggleEditProductModal = () => {
    setEditProductModal(!editProductModal);
    if (!editProductModal) {
      setAddProductModal(false);
      setModal(false);
    }
  };

  return (
    <div className="dark:text-white p-6">
      <div className="dark:bg-[#1f2937] px-5 pt-5">
        <div className="flex items-center justify-between px-2">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <button
            className="bg-blue-500 px-6 py-2 flex items-center gap-1 text-xl rounded text-white"
            onClick={toggleProductModal}
          >
            <MdAddCircle className="text-2xl" />
            Add product
          </button>
        </div>
        <div className="overflow-x-auto shadow-md">
          <table className="w-full text-left bg-white dark:bg-gray-800 border-separate border-spacing-0 p-2">
            <thead className="text-sm uppercase bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 overflow-hidden">
              <tr>
                <th className="p-3 rounded-l-lg">No</th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Description</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3 rounded-r-lg expand">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {products.map((product, index) => (
                <tr key={product.id} className="">
                  <td
                    className={`px-5  ${index === products.length - 1 ? "border-none" : "border-b dark:border-white/20"}`}
                  >
                    {index + 1}
                  </td>
                  <td
                    className={`px-3 h-10 w-[8%]  ${index === products.length - 1 ? "border-none" : "border-b dark:border-white/20"}`}
                  >
                    <img
                      src={product.image}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                  </td>
                  <td
                    className={`px-3  ${index === products.length - 1 ? "border-none" : "border-b dark:border-white/20"}`}
                  >
                    {product.name}
                  </td>
                  <td
                    className={`px-3  ${index === products.length - 1 ? "border-none" : "border-b dark:border-white/20"}`}
                  >
                    {product.description}
                  </td>
                  <td
                    className={`px-5 py-2  ${index === products.length - 1 ? "border-none" : "border-b dark:border-white/20"}`}
                  >
                    ${product.price}
                  </td>
                  <td
                    className={`px-5 py-2  ${index === products.length - 1 ? "border-none" : "border-b dark:border-white/20"}`}
                  >
                    {product.quantity}
                  </td>
                  <td
                    className={`px-2 py-4 space-x-2 flex items-center gap-1 ${index === products.length - 1 ? "border-none" : "border-b dark:border-white/20 "}`}
                  >
                    <Link to={`/products/${product.id}`} state={product}>
                      <button className="px-1 py-1 text-blue-500 rounded text-2xl">
                        <LuView />
                      </button>
                    </Link>
                    <div>
                      <BsThreeDotsVertical
                        className="text-2xl cursor-pointer"
                        onClick={toggleModal}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {addProductModal && (
        <AddProductModal toggleAddProductModal={toggleProductModal} />
      )}
      {modal && modalPosition && (
        <ProductActionModal
          toggleEditProductModal={toggleEditProductModal}
          position={modalPosition}
        />
      )}
      {editProductModal && (
        <EditProductModal toggleEditProductModal={toggleEditProductModal} />
      )}
    </div>
  );
};

export default ProducerProductComponent;
