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

import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", coffee: 100, maize: 200, wheat: 300 },
  { name: "Feb", coffee: 300, maize: 100, wheat: 250 },
  { name: "Mar", coffee: 200, maize: 250, wheat: 350 },
  { name: "Apr", coffee: 278, maize: 320, wheat: 180 },
  { name: "May", coffee: 189, maize: 240, wheat: 300 },
  { name: "Jun", coffee: 189, maize: 150, wheat: 210 },
  { name: "Jul", coffee: 150, maize: 200, wheat: 330 },
  { name: "Aug", coffee: 129, maize: 230, wheat: 310 },
  { name: "Sep", coffee: 175, maize: 290, wheat: 270 },
  { name: "Oct", coffee: 260, maize: 310, wheat: 350 },
  { name: "Nov", coffee: 300, maize: 330, wheat: 370 },
  { name: "Dec", coffee: 382, maize: 400, wheat: 420 },
  { name: "Jan", coffee: 100, maize: 200, wheat: 300 },
  { name: "Feb", coffee: 300, maize: 100, wheat: 250 },
  { name: "Mar", coffee: 200, maize: 250, wheat: 350 },
  { name: "Apr", coffee: 278, maize: 320, wheat: 180 },
  { name: "May", coffee: 189, maize: 240, wheat: 300 },
  { name: "Jun", coffee: 189, maize: 150, wheat: 210 },
  { name: "Jul", coffee: 150, maize: 200, wheat: 330 },
  { name: "Aug", coffee: 129, maize: 230, wheat: 310 },
  { name: "Sep", coffee: 175, maize: 290, wheat: 270 },
  { name: "Oct", coffee: 260, maize: 310, wheat: 350 },
  { name: "Nov", coffee: 300, maize: 330, wheat: 370 },
  { name: "Dec", coffee: 382, maize: 400, wheat: 420 },
];

const PriceHistoricalGraph: React.FC = () => {
  const visible = {
    coffee: true,
    maize: true,
    wheat: true,
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {visible.coffee && (
            <Line
              type="monotone"
              dataKey="coffee"
              stroke="#8884d8"
              strokeWidth={1}
            />
          )}
          {visible.maize && (
            <Line
              type="monotone"
              dataKey="maize"
              stroke="#82ca9d"
              strokeWidth={1}
            />
          )}
          {visible.wheat && (
            <Line
              type="monotone"
              dataKey="wheat"
              stroke="#ff7300"
              strokeWidth={1}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceHistoricalGraph;
