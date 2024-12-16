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
  { name: "Jan", Chili: 100, maize: 200, wheat: 300, sesame: 60, avocado: 120 },
  {
    name: "Feb",
    Chili: 300,
    maize: 100,
    wheat: 250,
    sesame: 130,
    avocado: 120,
  },
  {
    name: "Mar",
    Chili: 200,
    maize: 250,
    wheat: 350,
    sesame: 160,
    avocado: 120,
  },
  {
    name: "Apr",
    Chili: 278,
    maize: 320,
    wheat: 180,
    sesame: 100,
    avocado: 120,
  },
  { name: "May", Chili: 189, maize: 240, wheat: 300, sesame: 70, avocado: 120 },
  { name: "Jun", Chili: 189, maize: 150, wheat: 210, sesame: 60, avocado: 164 },
  { name: "Jul", Chili: 150, maize: 200, wheat: 330, sesame: 90, avocado: 198 },
  {
    name: "Aug",
    Chili: 129,
    maize: 230,
    wheat: 310,
    sesame: 100,
    avocado: 229,
  },
  {
    name: "Sep",
    Chili: 175,
    maize: 290,
    wheat: 270,
    sesame: 200,
    avocado: 200,
  },
  {
    name: "Oct",
    Chili: 260,
    maize: 310,
    wheat: 350,
    sesame: 210,
    avocado: 157,
  },
  {
    name: "Nov",
    Chili: 300,
    maize: 330,
    wheat: 370,
    sesame: 250,
    avocado: 170,
  },
  {
    name: "Dec",
    Chili: 382,
    maize: 400,
    wheat: 420,
    sesame: 270,
    avocado: 210,
  },
];

interface PriceHistoricalGraphProps {
  checkedRows: boolean[];
}

const PriceHistoricalGraph: React.FC<PriceHistoricalGraphProps> = ({
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

export default PriceHistoricalGraph;
