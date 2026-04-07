import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, getAllReadLocalDB } from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storeBook, setStoreBook] = useState(getAllReadLocalDB());

    const handMarkAsRead = (currentBook) => {
        const isBookExist = storeBook.find(
            (bookItem) => bookItem.bookId == currentBook.bookId,
        );

        addReadListToLocalDB(currentBook);

        if (isBookExist) {
            toast.error("The book already exists in your list!", {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            const newItems = [...storeBook, currentBook];

            setStoreBook(newItems);
            toast.success("The book is added to your list!", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <BookContext.Provider
            value={{ storeBook, setStoreBook, handMarkAsRead }}
        >
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;
