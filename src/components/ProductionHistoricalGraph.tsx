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

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", coffee: 231, maize: 299, wheat: 150 },
  { name: "Feb", coffee: 289, maize: 322, wheat: 200 },
  { name: "Mar", coffee: 150, maize: 200, wheat: 229 },
  { name: "Apr", coffee: 292, maize: 290, wheat: 340 },
  { name: "May", coffee: 400, maize: 378, wheat: 300 },
  { name: "Jun", coffee: 370, maize: 391, wheat: 370 },
  { name: "Jul", coffee: 342, maize: 200, wheat: 400 },
  { name: "Aug", coffee: 300, maize: 268, wheat: 367 },
  { name: "Sep", coffee: 389, maize: 370, wheat: 310 },
  { name: "Oct", coffee: 430, maize: 400, wheat: 290 },
  { name: "Nov", coffee: 482, maize: 441, wheat: 250 },
  { name: "Dec", coffee: 428, maize: 392, wheat: 277 },
  { name: "Jan", coffee: 231, maize: 299, wheat: 150 },
  { name: "Feb", coffee: 289, maize: 322, wheat: 200 },
  { name: "Mar", coffee: 150, maize: 200, wheat: 229 },
  { name: "Apr", coffee: 292, maize: 290, wheat: 340 },
  { name: "May", coffee: 400, maize: 378, wheat: 300 },
  { name: "Jun", coffee: 370, maize: 391, wheat: 370 },
  { name: "Jul", coffee: 342, maize: 200, wheat: 400 },
  { name: "Aug", coffee: 300, maize: 268, wheat: 367 },
  { name: "Sep", coffee: 389, maize: 370, wheat: 310 },
  { name: "Oct", coffee: 430, maize: 400, wheat: 290 },
  { name: "Nov", coffee: 482, maize: 441, wheat: 250 },
  { name: "Dec", coffee: 428, maize: 392, wheat: 277 },
];

const ProductionHistoricalGraph = () => {
  const visible = {
    coffee: true,
    maize: true,
    wheat: true,
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = e.target;
  //   setVisible((prev) => ({
  //     ...prev,
  //     [name]: checked,
  //   }));
  // };

  return (
    <div>
      <ResponsiveContainer width="100%" height={290}>
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

export default ProductionHistoricalGraph;
