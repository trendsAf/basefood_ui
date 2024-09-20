// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// const ProductionHistoricalGraph: React.FC = () => {
//   const series = [
//     {
//       name: "Rwanda",
//       data: [5000, 5200, 5300, 5500, 5700, 5900, 6100, 6300, 6500],
//     },
//     {
//       name: "DRC",
//       data: [4500, 4700, 4800, 5000, 5200, 5400, 5600, 5800, 6000],
//     },
//     {
//       name: "Uganda",
//       data: [4000, 4100, 4300, 4500, 4700, 4900, 5100, 5300, 5500],
//     },
//     {
//       name: "Kenya",
//       data: [6000, 6200, 6400, 6600, 6800, 7000, 7200, 7400, 7600],
//     },
//     {
//       name: "Tanzania",
//       data: [4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200, 6400],
//     },
//     {
//       name: "Burundi",
//       data: [3800, 3900, 1100, 400, 800, 4700, 4900, 5100, 5300],
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
//     },
//     title: {
//       text: "Production Historical Graph",
//       align: "left",
//     },
//     yaxis: {
//       title: {
//         text: "Production Volume (Units)",
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

// export default ProductionHistoricalGraph;

import { Line } from "@ant-design/plots";

const ProductionHistoricalGraph = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-connect-nulls.json",
      transform: [
        {
          type: "map",
          callback: (d: any) => ({
            ...d,
            close: new Date(d.date).getUTCMonth() < 3 ? NaN : d.close,
          }),
        },
      ],
    },
    xField: (d: any) => new Date(d.date),
    yField: "close",
    connectNulls: {
      connect: true,
      connectStroke: "#aaa",
    },
  };
  return <Line {...config} className="dark:bg-black dark:text-white" />;
};

export default ProductionHistoricalGraph;
