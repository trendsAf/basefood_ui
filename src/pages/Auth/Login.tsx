// import { login_image } from "../../assets/images";
import { TbWorldUpload } from "react-icons/tb";
import LoginFormComponent from "../../components/Auth/LoginFormComponent";

const Login = () => {
  const data = [
    "delectus exercitationem. Eius est exercitationem",
    "delectus exercitationem. Eius est exercitationem",
    "delectus exercitationem. Eius est exercitationem",
    "delectus exercitationem. Eius est exercitationem",
  ];

  return (
    <div className="bg-white flex h-screen">
      {/* Left Side (Image/Welcome Section) */}
      <div className="hidden lg:flex flex-col justify-between w-[50%] h-full relative">
        <div className="absolute w-full h-full bg-gradient-to-b from-black via-black/90 to-black/10 inset-0 z-10"></div>
        {/* <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src="https://res.cloudinary.com/dq6npfdgz/video/upload/v1725645136/small_3075999-hd_1280_720_30fps_ar9d0k.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="w-fu h-full">
          <img
            src="https://res.cloudinary.com/dq6npfdgz/image/upload/v1725875253/data_image7_tqfxiu.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-full z-30 top-52 text-white flex flex-col gap-4 items-center justify-center">
          <h1 className="text-3xl font-extrabold font-sans">
            Lorem ipsum dolor sit amet consec
          </h1>
          <div className="grid grid-cols-2 gap-2 px-10 w-2/3">
            {data.map((item, idx) => (
              <div key={idx} className="flex gap-1">
                <TbWorldUpload className="text-3xl" />
                <h1>{item}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center w-[50%] bg-[url('https://res.cloudinary.com/dq6npfdgz/video/upload/v1725639485/4778066-uhd_2562_1440_25fps_ytvf2g.mp4')]">
        <div className="px-2 flex flex-col items-center justify-center space-y-6 w-[80%] h-3/5 rounded-lg">
          <div className="w-full max-w-md">
            <h1 className="text-brand-blue text-3xl md:text-4xl font-black text-left">
              {/* Login */}
            </h1>
            <h1 className="text-2xl mb-10">
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
