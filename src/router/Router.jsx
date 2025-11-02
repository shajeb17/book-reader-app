import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import BookList from "../pages/booklist/BookList";
import PagesRead from "../pages/pageread/PagesRead";
import { FadeLoader } from "react-spinners";
import BookDetails from "../pages/home/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: 
    <div className="w-full h-screen flex justify-center items-center">
      <FadeLoader ></FadeLoader>
    </div>
    ,
    children: [
      { index: true, loader: () => fetch("booksData.json"), Component: Home },
      {
        path:"bookdetails",
        loader:()=> fetch("booksData.json"),
        Component:BookDetails,
      },
      { path: "/booklist", Component: BookList },
      { path: "/PagesRead", Component: PagesRead },
    ],
  },
]);
