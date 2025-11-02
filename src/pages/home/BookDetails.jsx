import React from "react";
import { useLoaderData, useLocation } from "react-router";

const BookDetails = () => {
  let data = useLoaderData();
  let bookid = useLocation();
  let singelValue = data.find((data) => {
    return data.bookId === bookid.state;
  });
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
  } = singelValue;

  let readbook = (id) => {
    let book = localStorage.getItem("BookList");
    if (!book) {
      localStorage.setItem("BookList", JSON.stringify([id]));
    } else {
      // let localCollect = JSON.parse(localStorage.getItem(book));
      let localCollect = JSON.parse(book);
      if (!localCollect.includes(id)) {
        localCollect.push(id);
      }
      localStorage.setItem("BookList", JSON.stringify(localCollect));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <img
              src={image}
              alt="Book Cover"
              className="w-full max-w-xs h-auto rounded-lg shadow-xl object-cover"
              style={{ minHeight: "300px" }}
            />
          </div>

          <div className="md:w-2/3 flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {bookName}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-normal text-gray-500">By</span> :{" "}
              <span className="font-semibold">{author}</span>
            </p>

            <p className="text-md font-medium text-gray-700 mb-4">{category}</p>

            <div className="mb-6">
              <span className="font-bold text-gray-800 block mb-1">
                Review :
              </span>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                {review}
              </p>
            </div>

            <div className="mb-6">
              <span className="font-bold text-gray-800 block mb-2">Tag</span>
              <div className="flex flex-wrap">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2 hover:bg-green-200 transition-colors">
                  #{tags[0]}
                </span>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2 hover:bg-green-200 transition-colors">
                  #{tags[1]}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-2 mb-6 text-sm">
              <div className="flex justify-between md:justify-start md:space-x-1 mt-1 text-sm text-gray-700">
                <span className="font-medium text-gray-500 w-32 flex-shrink-0">
                  Number of Pages: {totalPages}
                </span>
                <span className="font-semibold text-gray-800">281</span>
              </div>

              <div className="flex justify-between md:justify-start md:space-x-1 mt-1 text-sm text-gray-700">
                <span className="font-medium text-gray-500 w-32 flex-shrink-0">
                  Publisher:
                </span>
                <span className="font-semibold text-gray-800">
                  J.B Lippincott & Co.
                </span>
              </div>

              <div className="flex justify-between md:justify-start md:space-x-1 mt-1 text-sm text-gray-700">
                <span className="font-medium text-gray-500 w-32 flex-shrink-0">
                  Year of Publishing:
                </span>
                <span className="font-semibold text-gray-800">
                  {" "}
                  {yearOfPublishing}
                </span>
              </div>

              <div className="flex justify-between md:justify-start md:space-x-1 mt-1 text-sm text-gray-700">
                <span className="font-medium text-gray-500 w-32 flex-shrink-0">
                  Rating: {rating}
                </span>
                <span className="font-semibold text-gray-800">4.8</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-auto">
              <button
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold bg-white hover:bg-gray-50 transition-colors shadow-sm max-w-[150px]"
                onClick={() => readbook(bookId)}
              >
                Read
              </button>
              <button className="flex-1 px-6 py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors shadow-md max-w-[150px]">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
