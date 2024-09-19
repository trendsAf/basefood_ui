import React, { useState } from "react";
import AddComponentModal from "../components/AddComponentModal";
import WatchlistTable from "../components/WatchlistTable";
import { IconButton } from "@mui/material";
import { Download, ViewList, FilterList } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const NewDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<number | null>(
    null,
  );
  const [components, setComponents] = useState<any[]>([null, null, null, null]);

  const theme = useSelector((state: RootState) => state.theme.value);
  const isDarkMode = theme === "dark";

  const openModal = (placeholderIndex: number) => {
    setSelectedPlaceholder(placeholderIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlaceholder(null);
  };

  const addComponent = (componentType: string) => {
    const newComponent = getComponentByType(componentType);
    if (selectedPlaceholder !== null) {
      const updatedComponents = [...components];
      updatedComponents[selectedPlaceholder] = newComponent;
      setComponents(updatedComponents);
    }
    closeModal();
  };

  const getComponentByType = (type: string) => {
    switch (type) {
      case "table":
        return <WatchlistTable />;

      default:
        return null;
    }
  };

  const removeComponent = (index: number) => {
    const updatedComponents = [...components];
    updatedComponents[index] = null;
    setComponents(updatedComponents);
  };

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 min-h-[85vh] max-h-[85vh]">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="relative border flex flex-col  justify-center rounded-lg overflow-hidden h-[100%]"
          >
            {components[index] ? (
              <>
                <div className="flex justify-between items-center bg-gray-100 dark:dark:bg-[#151515] px-2 py-1">
                  <span className="font-semibold text-gray-900 ml-2 dark:text-gray-300">
                    Watchlist
                  </span>
                  <div className="flex items-center gap-2">
                    <IconButton
                      size="small"
                      sx={{ color: isDarkMode ? "white" : "inherit" }}
                    >
                      <Download />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: isDarkMode ? "white" : "inherit" }}
                    >
                      <ViewList />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: isDarkMode ? "white" : "inherit" }}
                    >
                      <FilterList />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => removeComponent(index)}
                      sx={{ color: isDarkMode ? "white" : "inherit" }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>

                <div className="w-full h-full p-4 overflow-y-auto">
                  {components[index]}
                </div>
              </>
            ) : (
              <button
                onClick={() => openModal(index)}
                className="bg-blue-500 text-white px-4 py-2 justify-center self-center rounded hover:bg-blue-600 transition-colors"
              >
                + Add Component
              </button>
            )}
          </div>
        ))}
      </div>

      <AddComponentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAdd={addComponent}
      />
    </>
  );
};

export default NewDashboard;
