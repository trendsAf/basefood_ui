import React from "react";

const WelcomePage: React.FC = () => {
  // Hardcoded user data
  const user = { firstName: "Aphrodis" };

  return (
    <div className="relative h-screen bg-gradient-to-b from-purple-800 to-blue-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 bg-purple-700 h-1 w-10 rotate-45"></div>
        <div className="absolute top-28 right-10 bg-purple-700 h-1 w-10 rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center h-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Welcome, {user.firstName}!
        </h1>
        <h2 className="text-lg text-gray-300">We are here for you</h2>

        <p className="text-gray-300 max-w-2xl">
          Thank you for signing up! We're excited to have you on board.
        </p>

        <div className="bg-white bg-opacity-20 p-6 rounded-md max-w-lg space-y-4 text-gray-200">
          <h3 className="text-2xl font-semibold text-white">
            Key Features of the Platform
          </h3>
          <ul className="space-y-2 text-left">
            <li>
              <strong>Access to Real-time Commodity Prices:</strong> Stay
              updated with the latest commodity prices.
            </li>
            <li>
              <strong>Insights on Logistics Services:</strong> Get insights to
              efficiently manage your supply chain.
            </li>
            <li>
              <strong>Tailored Trade Finance Options:</strong> Financial
              solutions for agricultural businesses.
            </li>
          </ul>
        </div>

        <div className="text-gray-300 max-w-2xl">
          <p>Explore your dashboard and make the most of your account:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Set your preferences to receive personalized updates.</li>
            <li>Connect with other users to grow your network.</li>
          </ul>
        </div>

        <button className="px-8 py-3 bg-white text-blue-800 rounded-md shadow-lg hover:bg-gray-200">
          Go to Dashboard
        </button>
      </div>

      <footer className="absolute bottom-0 left-0 w-full p-6"></footer>
    </div>
  );
};

export default WelcomePage;
