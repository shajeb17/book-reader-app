import React from "react";
import { Link } from "react-router";

const SingleBook = ({ bookDel }) => {
  let { bookId,bookName, author, category, image, rating, tags } = bookDel;
  
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-4">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt="Book Cover"
          className="w-32 h-40 object-cover rounded-md"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-2 mt-5">
        <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
          {tags[0]}
        </span>
        <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
          {tags[1]}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">{bookName}</h2>

      {/* Author */}
      <p className="text-gray-500 text-sm mb-2">By: {author}</p>

      <hr className="border-dashed border-gray-300 mb-2" />

      {/* Category and Rating */}
      <div className="flex justify-between items-center text-sm text-gray-700">
        <span>{category}</span>
       <Link to={"/bookdetails"} state={bookId}><button className="btn btn-outline h-9 btn-secondary">More Details ...</button></Link>
        <span className="flex items-center gap-1">
          {rating}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431L24 9.753l-6 5.847 1.416 8.26L12 19.896l-7.416 4.964L6 15.6 0 9.753l8.332-1.735z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SingleBook;
