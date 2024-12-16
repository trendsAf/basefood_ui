import {
  Close as CloseIcon,
  Download,
  FilterList,
  ViewList,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AddComponentModal from "../AddComponentModal";
import MarketNewsDashboardComponent from "../MarketNewsDashboardComponent";
import PriceHistoricalGraph from "../PriceHistoricalGraph";
import ProductionHistoricalGraph from "../ProductionHistoricalGraph";
import WatchlistTable from "../WatchlistTable";
import CountriesComponent from "../common/CountriesComponent";
import { countriesColors, countriesData } from "../../utils/countiesData";

const Dashboard1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<number | null>(
    null,
  );
  const [checkedRows, setCheckedRows] = useState<boolean[]>([]);

  const theme = useSelector((state: RootState) => state.theme.value);
  const isDarkMode = theme === "dark";

  const [selectedComponents, setSelectedComponents] = useState<
    (string | null)[]
  >(["table", "historical", "graph", "news"]);

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
      case "countries":
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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 min-h-[85vh] max-h-[86vh]">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="relative border flex flex-col justify-center rounded-lg overflow-hidden h-[100%] min-h-[250px]"
          >
            {selectedComponents[index] ? (
              <>
                <div className="flex md:flex-row flex-col justify-between items-center bg-gray-100 dark:bg-[#252525] dark:text-white px-2 py-1">
                  <span className="font-semibold  text-gray-900 ml-2 dark:text-gray-300 text-lg md:text-xl lg:text-base">
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
                      onClick={() => openModal(index)}
                      sx={{ color: isDarkMode ? "white" : "inherit" }}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Replace
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

                <div className="w-full h-full p-2 md:p-4 overflow-y-auto">
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

export default Dashboard1;
