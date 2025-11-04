import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Custom Triangle Shape for Bar
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path
      d={`M${x},${y + height} L${x + width / 2},${y} L${x + width},${
        y + height
      } Z`}
      fill={fill}
    />
  );
};

const PagesRead = () => {
  const mydata = useLoaderData();
  const [dataadd, setDataadd] = useState([]);

  useEffect(() => {
    const collect = JSON.parse(localStorage.getItem("BookList")) || [];
    const filter = mydata.filter((data) => collect.includes(data.bookId));
    setDataadd(filter);
  }, [mydata]);

  return (
    <div className="w-9/12 m-auto mt-10">
      <h2 className="text-center text-2xl font-semibold mb-6">
        📊 Pages per Book
      </h2>
      <div className="flex justify-center">
        <BarChart
          width={700}
          height={400}
          data={dataadd}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" angle={-25} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </div>
    </div>
  );
};

export default PagesRead;
