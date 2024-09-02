import { login_image } from "../../assets/images";
import LoginFormComponent from "../../components/Auth/LoginFormComponent";

const Login = () => {
  return (
    <div className="bg-white flex h-screen">
      <div className="hidden lg:flex lg:w-2/5 w-full h-full">
        <img
          src={login_image}
          alt="login_image"
          className="max-h-full w-full object-cover"
        />
      </div>
      <div className=" px-10 py-10 ben lg:w-3/5 w-full">
        <h1 className="text-brand-blue text-2xl md:text-4xl font-bold dark:text-white">
          baseFood
        </h1>
        <div className=" flex flex-col items-center justify-center mt-36 w-full">
          <div className="lg:w-3/4 2xl:w-1/2 flex flex-col space-y-4">
            <h1 className="text-2xl font-bold">
              Log in to your{" "}
              <b className="text-brand-blue font-bold">baseFood</b> Account
            </h1>
            <p className="text-lg ">
              Log in to baseFood for market insights and access to top-quality
              agricultural products.
            </p>
            <LoginFormComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
