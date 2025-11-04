import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadSingle from "./ReadSingle";
import SingleBook from "../home/SingleBook";

const BookList = () => {
  let data = useLoaderData();
  let [dataAdd, setAddBook] = useState([]);
  let [dataFilter, setDataFilter] = useState([]);
  let [store, setStore] = useState("");
  useEffect(() => {
    let localSt = JSON.parse(localStorage.getItem("BookList"));
    let valus = data?.filter((all) => localSt?.includes(all.bookId));
    setAddBook(valus);
  }, []);

  useEffect(() => {
    setDataFilter(dataAdd);
  }, [dataAdd]);

  useEffect(() => {
    if (store === "Pages") {
      let filterPage = [...dataFilter].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setDataFilter(filterPage);
    }
  }, [store, dataAdd]);


  return (
    <div className="w-9/13 m-auto">
      <div className=" w-full text-center m-9 mb-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-secondary">
            Short By : {store}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setStore("Pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setStore("Publish Year")}>
              <a>Publish Year</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs className={"mt-5"}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          {dataFilter?.map((data) => (
            <ReadSingle key={data.bookId} data={data}></ReadSingle>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
