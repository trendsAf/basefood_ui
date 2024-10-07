import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface WatchlistTableProps {
  onCheckedRowsChange: (checkedRows: boolean[]) => void;
}

const WatchlistTable: React.FC<WatchlistTableProps> = ({
  onCheckedRowsChange,
}) => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const isDarkMode = theme === "dark";

  const data = [
    {
      commodity: "Maize",
      sector: "Food Grains",
      currentPrice: "$3.50/kg",
      farmgatePrice: "$3.30/kg",
      volumeTraded: "800K tons",
      priceChange: "+1.2%",
      trend: "up",
    },
    {
      commodity: "Wheat",
      sector: "Livestock",
      currentPrice: "$1.20/kg",
      farmgatePrice: "$1/kg",
      volumeTraded: "40K kgs",
      priceChange: "-1.2%",
      trend: "down",
    },
    {
      commodity: "Chili",
      sector: "Food Grains",
      currentPrice: "$1.20/kg",
      farmgatePrice: "$900/kg",
      volumeTraded: "40K kgs",
      priceChange: "-1.3%",
      trend: "down",
    },
    {
      commodity: "Sesame",
      sector: "Food Grains",
      currentPrice: "$1.45/kg",
      farmgatePrice: "$400/kg",
      volumeTraded: "40K kgs",
      priceChange: "-0.85%",
      trend: "down",
    },
    {
      commodity: "Avocado",
      sector: "Food Grains",
      currentPrice: "$1.60/kg",
      farmgatePrice: "$100/kg",
      volumeTraded: "40K kgs",
      priceChange: "-1.52%",
      trend: "down",
    },
  ];

  const [checkedRows, setCheckedRows] = useState<boolean[]>(
    Array(data.length).fill(true),
  );
  const [selectAll, setSelectAll] = useState(true);

  const handleRowCheckboxChange = (index: number) => {
    const updatedCheckedRows = [...checkedRows];
    updatedCheckedRows[index] = !updatedCheckedRows[index];
    setCheckedRows(updatedCheckedRows);
    onCheckedRowsChange(updatedCheckedRows);

    if (!updatedCheckedRows.every(Boolean)) {
      setSelectAll(false);
    }
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newCheckedRows = Array(data.length).fill(newSelectAll);
    setCheckedRows(newCheckedRows);
    onCheckedRowsChange(newCheckedRows);
  };

  useEffect(() => {
    onCheckedRowsChange(checkedRows);
  }, []);

  return (
    <div>
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
                  checked={selectAll}
                  onChange={handleSelectAllChange}
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
                className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-[#151515]" : "bg-white dark:bg-[#1E1E1E]"}`}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    sx={{
                      color: isDarkMode ? "white" : "inherit",
                      "&.Mui-checked": {
                        color: isDarkMode ? "white" : "primary.main",
                      },
                    }}
                    checked={checkedRows[index]}
                    onChange={() => handleRowCheckboxChange(index)}
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
                  className={`whitespace-nowrap ${item.priceChange.startsWith("-") ? "!text-red" : "!text-green"}`}
                >
                  {item.priceChange}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WatchlistTable;
