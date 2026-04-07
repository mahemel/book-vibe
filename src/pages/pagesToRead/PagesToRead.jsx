import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import PageChart from "./PageChart";

const PagesToRead = () => {
    const bookList = useContext(BookContext);
    const { storeBook } = bookList;

    console.log(storeBook);

    return (
        <div className="container mx-auto py-20">
            <PageChart storeBook={storeBook}></PageChart>
        </div>
    );
};

export default PagesToRead;
