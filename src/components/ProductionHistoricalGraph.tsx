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
  {
    name: "Jan",
    Chili: 231,
    maize: 299,
    wheat: 150,
    sesame: 120,
    avocado: 168,
  },
  {
    name: "Feb",
    Chili: 289,
    maize: 322,
    wheat: 200,
    sesame: 151,
    avocado: 240,
  },
  {
    name: "Mar",
    Chili: 150,
    maize: 200,
    wheat: 229,
    sesame: 170,
    avocado: 280,
  },
  {
    name: "Apr",
    Chili: 292,
    maize: 290,
    wheat: 340,
    sesame: 100,
    avocado: 320,
  },
  {
    name: "May",
    Chili: 400,
    maize: 378,
    wheat: 300,
    sesame: 170,
    avocado: 270,
  },
  {
    name: "Jun",
    Chili: 370,
    maize: 391,
    wheat: 370,
    sesame: 210,
    avocado: 210,
  },
  {
    name: "Jul",
    Chili: 342,
    maize: 200,
    wheat: 400,
    sesame: 270,
    avocado: 180,
  },
  {
    name: "Aug",
    Chili: 300,
    maize: 268,
    wheat: 367,
    sesame: 313,
    avocado: 217,
  },
  {
    name: "Sep",
    Chili: 389,
    maize: 370,
    wheat: 310,
    sesame: 282,
    avocado: 260,
  },
  {
    name: "Oct",
    Chili: 430,
    maize: 400,
    wheat: 290,
    sesame: 200,
    avocado: 300,
  },
  {
    name: "Nov",
    Chili: 482,
    maize: 441,
    wheat: 250,
    sesame: 140,
    avocado: 340,
  },
  {
    name: "Dec",
    Chili: 428,
    maize: 392,
    wheat: 277,
    sesame: 100,
    avocado: 370,
  },
];

interface ProductionHistoricalGraphProps {
  checkedRows: boolean[];
}

const ProductionHistoricalGraph: React.FC<ProductionHistoricalGraphProps> = ({
  checkedRows,
}) => {
  const visible = {
    Chili: checkedRows[2],
    maize: checkedRows[0],
    wheat: checkedRows[1],
    Sesame: checkedRows[3],
    Avocado: checkedRows[4],
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: -20, bottom: -10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {visible.Chili && (
            <Line
              type="monotone"
              dataKey="Chili"
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
          {visible.Sesame && (
            <Line
              type="monotone"
              dataKey="sesame"
              stroke="#252525"
              strokeWidth={1}
            />
          )}
          {visible.Avocado && (
            <Line
              type="monotone"
              dataKey="avocado"
              stroke="#126c54"
              strokeWidth={1}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductionHistoricalGraph;
