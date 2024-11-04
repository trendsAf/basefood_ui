/* eslint-disable no-console */
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { formVariants, itemVariants } from "../../utils/variants";
import Cookies from "js-cookie";

const ProfileInformation = () => {
  const userInfo = JSON.parse(Cookies.get("userInfo") as string) || undefined;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      // username: userInfo ? : "",
      firstName: userInfo ? userInfo.firstname : "",
      lastName: userInfo ? userInfo.lastname : "",
      email: userInfo ? userInfo.email : "",
      phoneNumber: "0789438437",
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
      <h2 className="my-5 logo text-2xl">Profile Information</h2>
      <motion.form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        variants={formVariants}
      >
        {/* <motion.div variants={itemVariants} className="flex flex-col gap-1">
          <label className="block mb-1">User name</label>
          <input
            type="text"
            {...register("username")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div> */}

        <motion.div variants={itemVariants} className="flex flex-col gap-1">
          <label className="block mb-1">First name</label>
          <input
            type="text"
            {...register("firstName")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-1">
          <label className="block mb-1">Last name</label>
          <input
            type="text"
            {...register("lastName")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-1">
          <label className="block mb-1">Email</label>
          <input
            disabled
            type="email"
            {...register("email")}
            className="w-full p-3 border border-gray-300 dark:bg-[#353535] dark:text-white"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-1">
          <label className="block mb-1">Phone Number</label>
          <input
            type="text"
            {...register("phoneNumber")}
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

export default ProfileInformation;
