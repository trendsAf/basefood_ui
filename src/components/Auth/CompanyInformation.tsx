/* eslint-disable no-console */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { formVariants, itemVariants } from "../../utils/variants";

const CompanyInformations = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      companyName: "Eastern Farms LLC",
      country: "USA",
      companyType: "Private",
      companySize: "100-500",
      revenueRange: "$1M-$10M",
      year: "2022",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <motion.div
      className="px-[5%] dark:bg-[#252525] dark:text-white"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={formVariants}
    >
      <h2 className="my-2 logo text-2xl">Company Information</h2>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 dark:bg-[#252525] dark:text-white"
        noValidate
        autoComplete="off"
        variants={formVariants}
      >
        <motion.div variants={itemVariants} className=" flex flex-col gap-1">
          <label className="block mb-1">Company Name</label>
          <input
            type="text"
            {...register("companyName")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className=" flex flex-col gap-1">
          <label className="block mb-1">Country</label>
          <input
            type="text"
            {...register("country")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className=" flex flex-col gap-1">
          <label className="block mb-1">Company Type</label>
          <input
            type="text"
            {...register("companyType")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className=" flex flex-col gap-1">
          <label className="block mb-1">Company Size</label>
          <input
            type="text"
            {...register("companySize")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className=" flex flex-col gap-1">
          <label className="block mb-1">Revenue Range</label>
          <input
            type="text"
            {...register("revenueRange")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className=" flex flex-col gap-1">
          <label className="block mb-1">Year</label>
          <input
            type="text"
            {...register("year")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-700 text-white mt-4"
            style={{
              backgroundColor: "#3c82f6",
              color: "#ffff",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            Update
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default CompanyInformations;
