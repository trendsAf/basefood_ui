import { AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className={
        "flex items-center justify-between p-4 dark:bg-black bg-white dark:text-white border-b border-gray-200 dark:border-gray-700"
      }
    >
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg py-2 px-3 w-full max-w-sm">
        <FaSearch className="text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search by product or location"
          className="ml-2 bg-transparent border-none outline-none w-full text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
      <div className="flex items-center space-x-6">
        <button className="relative">
          <AiOutlineMail className="text-2xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="relative">
          <AiOutlineBell className="text-2xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5fGVufDB8fDB8fHww"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>John</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
