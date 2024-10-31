import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface ProductActionModalProps {
  toggleEditProductModal: () => void;
  position: {
    top: number;
    left: number;
  };
}

const ProductActionModal = ({
  toggleEditProductModal,
  position,
}: ProductActionModalProps & { position: { top: number; left: number } }) => {
  return (
    <div
      className="absolute "
      style={{ top: position.top, left: position.left - 30 }}
    >
      <div className="bg-white _shadow rounded-lg w-full max-w-xs flex flex-col gap-1 p-2">
        <button
          className="px-1 text-black rounded text-lg flex items-center gap-1"
          onClick={toggleEditProductModal}
        >
          <FaEdit className="text-lg text-blue-500" /> Edit product
        </button>
        <button className="px-1 bg-red-500  text-lg flex items-center gap-1 text-black">
          <MdDelete className="text-2xl text-red" /> Delete product
        </button>
      </div>
    </div>
  );
};

export default ProductActionModal;
