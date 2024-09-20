/* eslint-disable no-console */
import { TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface SubmitQuoteModalProps {
  toggleQuoteModal: () => void;
}

interface QuoteFormInputs {
  fullName: string;
  companyName: string;
  quantity: number;
  message: string;
}

const SubmitQuoteModal = ({ toggleQuoteModal }: SubmitQuoteModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormInputs>();

  const onSubmit: SubmitHandler<QuoteFormInputs> = (data) => {
    console.log(data);
    toast.success("Quote request submitted successfully!");

    setTimeout(() => {
      toggleQuoteModal();
    }, 3000);
  };

  return (
    <>
      <ToastContainer />
      <AnimatePresence>
        <div className="w-full h-full inset-0 flex items-center justify-center fixed bg-black/20 backdrop-blur-sm">
          <div
            className="w-full h-full inset-0 absolute -z-10"
            onClick={() => toggleQuoteModal()}
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1.1 }}
            exit={{ opacity: 0, y: 50, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 h-auto bg-white text-black py-6 md:py-12 px-10 md:px-8 lg:px-16 relative shadow-lg"
          >
            <IoClose
              className="absolute text-4xl text-red right-4 top-4 cursor-pointer"
              onClick={() => toggleQuoteModal()}
            />
            <h2 className="text-xl md:text-2xl mb-4">Request a Quote</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <TextField
                  label="Full Name"
                  fullWidth
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  error={!!errors.fullName}
                  helperText={errors.fullName ? errors.fullName.message : ""}
                  variant="outlined"
                />
              </div>

              <div className="mb-4">
                <TextField
                  label="Company Name"
                  fullWidth
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                  error={!!errors.companyName}
                  helperText={
                    errors.companyName ? errors.companyName.message : ""
                  }
                  variant="outlined"
                />
              </div>

              <div className="mb-4">
                <TextField
                  label="Quantity"
                  fullWidth
                  type="number"
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                  error={!!errors.quantity}
                  helperText={errors.quantity ? errors.quantity.message : ""}
                  variant="outlined"
                />
              </div>

              <div className="mb-4">
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  rows={2}
                  {...register("message", { required: "Message is required" })}
                  error={!!errors.message}
                  helperText={errors.message ? errors.message.message : ""}
                  variant="outlined"
                />
              </div>

              <button
                type="submit"
                className="bg-brand-blue px-10 py-2 md:px-14 md:py-2 text-white logo"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default SubmitQuoteModal;
