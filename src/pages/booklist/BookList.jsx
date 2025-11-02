import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadSingle from "./ReadSingle";
import SingleBook from "../home/SingleBook";

const BookList = () => {
  let data = useLoaderData();
  let [addBook, setAddBook] = useState([]);
  useEffect(() => {
    let localSt = JSON.parse(localStorage.getItem("BookList"));
    let valus = data.filter((all) => localSt.includes(all.bookId));
    setAddBook(valus);
  }, []);

  return (
    <div className="w-9/13 m-auto">
      <Tabs className={"mt-5"}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
             {addBook.map(data=>
             <ReadSingle key={data.bookId} data={data}></ReadSingle>
             )}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BookList;
