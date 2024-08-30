import React from "react";
import ReactApexChart from "react-apexcharts";

interface ApexChartProps {
  data: { name: string; data: { x: Date; y: number }[] }[];
}

const ApexChart: React.FC<ApexChartProps> = ({ data }) => {
  const options = {
    chart: {
      type: "line", // Changed to 'line' for multiple series
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
    },
    dataLabels: {
      enabled: false,
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
      shared: true, // Make tooltip shared across series
      y: {
        formatter: (val: number) => `$${val.toFixed(0)}`,
      },
    },
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
