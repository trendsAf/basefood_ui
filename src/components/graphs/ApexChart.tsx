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
      type: "line",
      stacked: false,
      height: 350,
      width: "100%",
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
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
      width: 1.5,
    },
    markers: {
      size: 0,
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `$${val.toFixed(0)}`,
      },
      title: {
        text: "Price (in $)",
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: true,
      y: {
        formatter: (val: number) => `$${val.toFixed(0)}`,
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
    // theme: {
    //   mode: isDarkMode ? 'dark' : 'light',
    //   palette: 'palette2',
    // },
  };

  return (
    <ReactApexChart
      style={{ width: "100%" }}
      //@ts-ignore
      options={options}
      series={data}
      type="line"
      height={350}
    />
  );
};

export default ApexChart;
