import React, { useState } from "react";
import AddComponentModal from "../components/AddComponentModal";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import WatchlistTable from "../components/WatchlistTable";
import { IconButton } from "@mui/material";
import {
  Download,
  ViewList,
  FilterList,
  Close as CloseIcon,
} from "@mui/icons-material";
import PriceHistoricalGraph from "../components/PriceHistoricalGraph";
import ProductionHistoricalGraph from "../components/ProductionHistoricalGraph";
import MarketNewsDashboardComponent from "../components/MarketNewsDashboardComponent";
import CountriesComponent from "../components/common/CountriesComponent";
import { countriesColors, countriesData } from "../utils/countiesData";

const NewDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<number | null>(
    null,
  );
  const [checkedRows, setCheckedRows] = useState<boolean[]>([]);

  const theme = useSelector((state: RootState) => state.theme.value);
  const isDarkMode = theme === "dark";

  const [selectedComponents, setSelectedComponents] = useState<
    (string | null)[]
  >([null, null, null, null]);

  const openModal = (placeholderIndex: number) => {
    setSelectedPlaceholder(placeholderIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlaceholder(null);
  };

  const addComponent = (componentType: string) => {
    if (selectedPlaceholder !== null) {
      const updatedComponents = [...selectedComponents];
      updatedComponents[selectedPlaceholder] = componentType;
      setSelectedComponents(updatedComponents);
    }
    closeModal();
  };

  const countriesWithColors = countriesData.map((country, index) => ({
    ...country,
    color: countriesColors[index % countriesColors.length],
  }));

  const [_selectedCountries, setSelectedCountries] = useState<string[]>(
    countriesWithColors
      .filter((country) => country.checked)
      .map((country) => country.name),
  );
  const handleCountrySelect = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country],
    );
  };

  const renderComponent = (componentType: string | null) => {
    switch (componentType) {
      case "table":
        return <WatchlistTable onCheckedRowsChange={setCheckedRows} />;
      case "historical":
        return <PriceHistoricalGraph checkedRows={checkedRows} />;
      case "graph":
        return <ProductionHistoricalGraph checkedRows={checkedRows} />;
      case "news":
        return <MarketNewsDashboardComponent />;
      case "countries":
        return (
          <CountriesComponent
            countriesData={countriesWithColors}
            onCountrySelect={handleCountrySelect}
          />
        );
      default:
        return null;
    }
  };

  const getToolbarText = (componentType: string | null) => {
    switch (componentType) {
      case "table":
        return "Watchlist";
      case "historical":
        return "Price Historical Graph";
      case "graph":
        return "Production Historical Graph";
      case "news":
        return "Latest news";
      case "countrues":
        return "Countries";
      default:
        return "Component";
    }
  };

  const removeComponent = (index: number) => {
    const updatedComponents = [...selectedComponents];
    updatedComponents[index] = null;
    setSelectedComponents(updatedComponents);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 min-h-[85vh] max-h-[85vh]">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="relative border flex flex-col justify-center rounded-lg overflow-hidden h-auto min-h-[250px]"
          >
            {selectedComponents[index] ? (
              <>
                <div className="flex justify-between items-center bg-gray-100 dark:bg-[#252525] dark:text-white px-2 py-1">
                  <span className="font-semibold text-gray-900 ml-2 dark:text-gray-300">
                    {getToolbarText(selectedComponents[index])}
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
                  {renderComponent(selectedComponents[index])}
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
