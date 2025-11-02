import React from "react";
import { useLoaderData } from "react-router";
import SingleBook from "./SingleBook";

const Home = () => {
  let data = useLoaderData();

  return (
    <div className="w-9/12 m-auto ">
      <h1 className="m-auto text-center text-2xl font-semibold mt-6">Book</h1>
      <div className="grid grid-cols-3 gap-5 mt-2.5">
        {data.map((bookDel) => (
          <SingleBook key={bookDel.bookId} bookDel={bookDel}></SingleBook>
        ))}
      </div>
    </div>
  );
};

export default Home;
