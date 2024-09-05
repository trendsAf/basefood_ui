import React from "react";

interface ComponentOption {
  type: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const componentOptions: ComponentOption[] = [
  {
    type: "watchlist",
    title: "Watchlist Table",
    description: "View a table of commodities with columns.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    type: "historical",
    title: "Historical Graph Templates",
    description: "Display a historical graph of one of your graph templates.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
  },
  {
    type: "intraday",
    title: "Intraday Graph",
    description: "Display an intraday graph.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    type: "performance",
    title: "Performance Graph",
    description: "Display a performance graph.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

interface AddComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (componentType: string) => void;
}

const AddComponentModal: React.FC<AddComponentModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40 transition-opacity duration-300 ease-in-out">
      <div className="bg-white dark:bg-black dark:text-white rounded-lg max-w-2xl w-full animate-[popIn_0.3s_ease-out]">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Add New Component</h2>
          <p className="text-gray-600 mb-6">
            Please choose a selection below to add to your dashboard
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {componentOptions.map((option) => (
              <button
                key={option.type}
                onClick={() => onAdd(option.type)}
                className="flex items-center p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-left"
              >
                <div className="mr-4">{option.icon}</div>
                <div>
                  <h3 className="font-semibold">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="px-6 py-4 flex justify-end rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => onAdd("default")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Add component
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComponentModal;
