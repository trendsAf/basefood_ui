import React from "react";
import { welcome_image } from "../assets/images";
import WelcomePolls from "../components/WelcomePolls";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const user = { firstName: "Aphrodis" };

  const keyVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1 },
    },
  };

  const lockVariants = {
    initial: { x: -400 },
    animate: { x: 0, transition: { duration: 2, ease: "easeInOut" } },
    moveToRight: {
      x: 0,
      transition: { delay: 1, duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative h-screen px-[10%] mt-14">
      <div>
        <h1 className="text-2xl text-center">
          Welcome to baseFood, <b className="logo">{user.firstName}</b>! We're
          thrilled to have you on board. Thank you for joining our community.
          We're here to help you every step of the way. Explore, create, and
          connect – we can't wait to see what you'll achieve with us!
        </h1>
        <div className="flex items-center">
          <motion.div
            className="key py-8"
            variants={keyVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl font-bold text-center text-grey_color-dark">
              Key features of the platform
            </h1>
            <div className="rounded-lg p-4 flex lg:flex-row flex-col items-center">
              <WelcomePolls />
            </div>
          </motion.div>

          <motion.div
            className="w-full flex items-center justify-center lock"
            variants={lockVariants}
            initial="initial"
            animate="moveToRight"
          >
            <div className="h-[42rem] w-[42rem] bg-white">
              <img
                src={welcome_image}
                alt="welcome_image"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Link to={"/"}>
              <button className="px-6 py-2 bg-brand-blue/60 text-white flex items-center gap-4">
                Go to dashboard
                <motion.div
                  animate={{
                    x: [-5, 5],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowCircleRight className="text-2xl" />
                </motion.div>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
