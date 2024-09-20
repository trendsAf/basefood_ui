// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// const PriceHistoricalGraph: React.FC = () => {
//   const series = [
//     {
//       name: "Rwanda",
//       data: [10, 30, 50, 25, 12, 27, 45, 55, 80],
//     },
//     {
//       name: "DRC",
//       data: [45, 50, 52, 53, 56, 58, 60, 63, 67],
//     },
//     {
//       name: "Uganda",
//       data: [40, 42, 45, 48, 50, 52, 55, 58, 62],
//     },
//     {
//       name: "Kenya",
//       data: [55, 60, 63, 65, 68, 70, 75, 78, 82],
//     },
//     {
//       name: "Tanzania",
//       data: [48, 50, 52, 54, 56, 58, 61, 63, 66],
//     },
//     {
//       name: "Burundi",
//       data: [38, 40, 42, 45, 47, 50, 52, 54, 58],
//     },
//   ];

//   const options: ApexOptions = {
//     chart: {
//       height: 350,
//       type: "line",
//       zoom: {
//         type: "x",
//         enabled: false,
//         autoScaleYaxis: false,
//       },
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//     stroke: {
//       curve: "smooth",
//       width: 2,
//     },
//     title: {
//       text: "Price Historical Graph",
//       align: "left",
//     },
//     yaxis: {
//       title: {
//         text: "Price (USD)",
//       },
//     },
//     legend: {
//       show: true,
//       position: "bottom",
//       horizontalAlign: "center",
//       onItemClick: {
//         toggleDataSeries: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="line"
//         height={350}
//       />
//     </div>
//   );
// };

// export default PriceHistoricalGraph;

import { Line } from "@ant-design/plots";

const PriceHistoricalGraph = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json",
      transform: [
        {
          type: "fold",
          fields: ["blockchain", "nlp"],
          key: "type",
          value: "value",
        },
      ],
    },
    xField: (d: any) => new Date(d.date),
    yField: "value",
    colorField: "type",
    axis: { x: { labelAutoHide: "greedy" } },
    annotations: [
      {
        type: "text",
        data: [new Date("2017-12-17"), 100],
        shape: "badge",
        style: {
          text: "100",
          dy: -1,
          markerSize: 24,
          markerFill: "#6395FA",
          markerFillOpacity: 0.55,
        },
        tooltip: false,
      },
    ],
  };
  return <Line {...config} />;
};

export default PriceHistoricalGraph;
