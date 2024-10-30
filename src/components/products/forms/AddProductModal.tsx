/* eslint-disable no-console */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";

interface ProductFormValues {
  name?: string;
  image?: FileList;
  description?: string;
  price?: number;
  quantity?: number;
  toggleAddProductModal: () => void;
}

const AddProductModal = ({ toggleAddProductModal }: ProductFormValues) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: ProductFormValues) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="w-full h-full absolute inset-0 -z-10 backdrop-blur-sm"
        onClick={() => toggleAddProductModal()}
      ></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl mx-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Edit Product
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Side: Image Upload */}
          <div className="flex flex-col items-center justify-center">
            <label className="block text-gray-700 dark:text-gray-300 mb-2 text-center">
              Upload Product Image
            </label>
            <div className="w-full h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center p-4 relative">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Image preview"
                  className="h-full w-full object-cover rounded-lg"
                />
              ) : (
                <>
                  <MdCloudUpload className="text-6xl text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    Drag and drop or click to upload
                  </p>
                </>
              )}
              <input
                {...register("image", {
                  required: "Product image is required",
                })}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="opacity-0 absolute inset-0 cursor-pointer"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>

          {/* Right Side: Other Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Product Name
              </label>
              <input
                {...register("name", { required: "Product name is required" })}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter product name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Product description is required",
                })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter product description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Price
                </label>
                <input
                  {...register("price", {
                    required: "Product price is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter product price"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700 dark:text-gray-300 mb-1">
                  Quantity
                </label>
                <input
                  {...register("quantity", {
                    required: "Product quantity is required",
                    valueAsNumber: true,
                  })}
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter product quantity"
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
