// import { login_image } from "../../assets/images";
import LoginFormComponent from "../../components/Auth/LoginFormComponent";

const Login = () => {
  return (
    <div className="bg-white flex h-screen">
      {/* Left Side (Image/Welcome Section) */}
      <div className="hidden lg:flex flex-col justify-between w-[40%] h-full bg-brand-blue/80 px-[5%] py-[10%]">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center text-white">
            Welcome back!
          </h1>
          <p className="text-center text-lg text-white">
            Log in to baseFood for market insights and access to top-quality
            agricultural products.
          </p>
          <button className="w-full py-3 border text-white mt-8 border-white/40 hover:bg-white hover:text-brand-blue transition-all duration-300">
            Signup
          </button>
        </div>
        <div>
          <h1 className="text-white text-center text-2xl md:text-4xl font-black font-sans">
            baseFood
          </h1>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center w-full">
        <div className="px-2 flex flex-col items-center justify-center space-y-6 w-3/5 h-3/5 _shadow rounded-lg">
          <div className="w-full max-w-md">
            <h1 className="text-brand-blue text-3xl md:text-4xl font-black text-left">
              {/* Login */}
            </h1>
            <h1 className="text-2xl text-center mb-10">
              Log in to your{" "}
              <b className="text-brand-blue font-bold">baseFood</b> Account
            </h1>
            <LoginFormComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
