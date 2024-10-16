import React, { useState } from "react";
import { VscGraph } from "react-icons/vsc";
import { LuTable } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { TbNews } from "react-icons/tb";
import { FaTruck } from "react-icons/fa6";
import { MdOutlineScatterPlot } from "react-icons/md";

interface ComponentOption {
  type: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const componentOptions: ComponentOption[] = [
  {
    type: "table",
    title: "Watchlist Table",
    description: "Display a table of commodities with columns.",
    icon: <LuTable className="text-2xl" />,
  },
  {
    type: "historical",
    title: "Historical Price Graph",
    description: "Display a price historical graph.",
    icon: <BsGraphUp className="text-2xl" />,
  },
  {
    type: "graph",
    title: "Historical Production Graph",
    description: "Display a production historical graph.",
    icon: <VscGraph className="text-2xl" />,
  },
  {
    type: "news",
    title: "Latest News",
    description: "Display the latest news.",
    icon: <TbNews className="text-2xl" />,
  },
  {
    type: "countries",
    title: "Countries",
    description: "Display according to country.",
    icon: <TbNews className="text-2xl" />,
  },
  {
    type: "list",
    title: "Track Shipping and Logistics",
    description:
      "Get quick estimates on trucking and freight forwarding rates.",
    icon: <FaTruck className="text-2xl" />,
  },
  {
    type: "chart",
    title: "Scatter Plot",
    description: "Plot a chart of price and production quantities.",
    icon: <MdOutlineScatterPlot className="text-2xl" />,
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
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null,
  );

  const handleSelection = (componentType: string) => {
    setSelectedComponent(componentType);
  };

  const handleAddComponent = () => {
    if (selectedComponent) {
      onAdd(selectedComponent);
    }
  };

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
                onClick={() => handleSelection(option.type)}
                className={`flex items-center px-4 py-3 border rounded-lg transition-colors text-left ${
                  selectedComponent === option.type
                    ? "bg-blue-100 dark:bg-gray-900 border-blue-500"
                    : "hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
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
            className="px-6 py-2  bg-gray-600 rounded hover:bg-gray-700 text-white transition-colors mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAddComponent}
            disabled={!selectedComponent}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${
              !selectedComponent ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Add Component
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddComponentModal;
