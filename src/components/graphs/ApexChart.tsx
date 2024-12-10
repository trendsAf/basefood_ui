/* eslint-disable quotes */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ApexChartProps {
  data: { name: string; data: { x: Date; y: number }[] }[];
}

const ApexChart: React.FC<ApexChartProps> = ({ data }) => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const isDarkMode = theme === "dark";

  const options = {
    chart: {
      type: "bar",
      stacked: false,
      height: 350,
      width: "100%",
      zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: false,
      },
      toolbar: {
        autoSelected: "zoom",
      },
      foreColor: isDarkMode ? "#fff" : "#373d3f",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2.5,
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: 0.6,
    },
    markers: {
      size: 1,
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `$${val.toFixed(0)}`, // Explicitly type 'val'
        style: {
          fontSize: "14px", // Default font size
        },
      },
      title: {
        text: "Price (in $)", // Add this title explicitly
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: true,
      y: {
        formatter: (val: number) => `$${val.toFixed(0)}`, // Explicitly type 'val'
      },
      theme: isDarkMode ? "dark" : "light",
      style: {
        background: isDarkMode ? "#161616" : undefined,
      },
    },
    toolbar: {
      autoSelected: "zoom",
      tools: {
        download: '<i class="fas fa-download" width="20"></i>',
        selection: '<i class="fas fa-expand" width="20"></i>',
        zoom: '<i class="fas fa-search-plus" width="20"></i>',
        zoomin: '<i class="fas fa-plus" width="20"></i>',
        zoomout: '<i class="fas fa-minus" width="20"></i>',
        pan: '<i class="fas fa-hand-paper" width="20"></i>',
        reset: '<i class="fas fa-undo" width="20"></i>',
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 300,
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "12px", // Smaller font size
              },
            },
            title: {
              text: "Price (in $)", // Retain title for this breakpoint
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 250,
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
            title: {
              text: "Price (in $)", // Retain title for this breakpoint
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "8px",
              },
            },
          },
          tooltip: {
            style: {
              fontSize: "8px",
            },
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      style={{ width: "100%" }}
      //@ts-ignore
      options={options}
      series={data}
      type="line"
      height={320}
    />
  );
};

export default ApexChart;
