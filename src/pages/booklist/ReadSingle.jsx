import React from "react";

const ReadSingle = ({data}) => {
      let {
    bookId,
    bookName,
    author,
    category,
    image,
    rating,
    tags,
    review,
    totalPages,
    yearOfPublishing,
  } = data;
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col md:flex-row items-center md:items-start gap-5 w-full max-w-2xl mx-auto">
      <div className="flex-shrink-0 w-32 h-48 md:w-28 md:h-40 flex items-center justify-center">
        <img
          src={image}
          alt="Book Cover"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>

      <div className="flex-grow flex flex-col text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
         {bookName}
        </h2>
        <p className="text-gray-600 mb-3 text-sm md:text-base">
          By : {author}
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-gray-700 mb-4">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            #{tags[0]}
          </span>
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            #{tags[1]}
          </span>
          <span className="flex items-center gap-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-gray-600 mb-5">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Publisher: {author}
          </span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>{totalPages}
          </span>
        </div>

        <div className="border-t border-gray-200 w-full mb-5"></div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-auto">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-200 transition-colors shadow-sm text-sm">
            Category: {category}
          </button>
          <button className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-semibold hover:bg-orange-200 transition-colors shadow-sm text-sm">
            Rating:{rating}
          </button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadSingle;
