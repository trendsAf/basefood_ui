import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const WatchlistTable: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const isDarkMode = theme === "dark";

  const data = [
    {
      commodity: "Maize",
      sector: "Food Grains",
      currentPrice: "$3.50/100kg",
      farmgatePrice: "$3.30/100kg",
      volumeTraded: "800K tons",
      priceChange: "+1.2%",
      trend: "up",
    },
    {
      commodity: "Wheat",
      sector: "Livestock",
      currentPrice: "$1.20/head",
      farmgatePrice: "$900/head",
      volumeTraded: "40K heads",
      priceChange: "-1.2%",
      trend: "down",
    },
    {
      commodity: "Coffee",
      sector: "Livestock",
      currentPrice: "$1.20/head",
      farmgatePrice: "$900/head",
      volumeTraded: "40K heads",
      priceChange: "-1.2%",
      trend: "down",
    },
    {
      commodity: "Goats",
      sector: "Livestock",
      currentPrice: "$1.20/head",
      farmgatePrice: "$900/head",
      volumeTraded: "40K heads",
      priceChange: "-1.2%",
      trend: "down",
    },
    {
      commodity: "Goats",
      sector: "Livestock",
      currentPrice: "$1.20/head",
      farmgatePrice: "$900/head",
      volumeTraded: "40K heads",
      priceChange: "-1.2%",
      trend: "down",
    },
  ];

  return (
    <TableContainer
      component={Paper}
      className="shadow-lg dark:bg-secondary-black overflow-auto relative"
    >
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100 dark:bg-[#1E1E1E]">
            <TableCell padding="checkbox">
              <Checkbox
                sx={{
                  color: isDarkMode ? "white" : "inherit",
                  "&.Mui-checked": {
                    color: isDarkMode ? "white" : "primary.main",
                  },
                }}
              />
            </TableCell>
            <TableCell className="font-semibold text-gray-700 dark:text-gray-300">
              Commodity
            </TableCell>
            <TableCell className="whitespace-nowrap font-semibold text-gray-700 dark:text-gray-300">
              Current Price
            </TableCell>
            <TableCell className="whitespace-nowrap font-semibold text-gray-700 dark:text-gray-300">
              Farmgate Price
            </TableCell>
            <TableCell className="whitespace-nowrap font-semibold text-gray-700 dark:text-gray-300">
              Price Change
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-[#151515]"
                  : "bg-white dark:bg-[#1E1E1E]"
              }`}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  sx={{
                    color: isDarkMode ? "white" : "inherit",
                    "&.Mui-checked": {
                      color: isDarkMode ? "white" : "primary.main",
                    },
                  }}
                />
              </TableCell>
              <TableCell className="whitespace-nowrap text-gray-900 dark:text-gray-300">
                {item.commodity}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap dark:text-gray-300">
                {item.currentPrice}
              </TableCell>
              <TableCell className="text-gray-900 whitespace-nowrap dark:text-gray-300">
                {item.farmgatePrice}
              </TableCell>
              <TableCell
                className={`whitespace-nowrap ${
                  item.priceChange.startsWith("-")
                    ? "!text-red dark:text-red"
                    : "!text-green dark:text-green"
                }`}
              >
                {item.priceChange}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WatchlistTable;