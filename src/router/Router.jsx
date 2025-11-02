import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BookList from "../pages/BookList";
import PagesRead from "../pages/PagesRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {index:true,Component:Home},
      {path:"/booklist",Component:BookList},
      {path:"/PagesRead",Component:PagesRead}
    ]
  },
]);