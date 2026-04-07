import React, { useContext, useState } from "react";
import { WishListContext } from "../../contexts/WishListProvider";
import { BookContext } from "../../contexts/BookContext";
import BookListItem from "../bookLists/BookListItem";

const Books = () => {
    const wishList = useContext(WishListContext);
    const { wishListItem } = wishList;

    const bookList = useContext(BookContext);
    const { storeBook } = bookList;

    const [isActiveBookTab, setIsActiveBookTab] = useState(false);

    return (
        <div className="container mx-auto py-20">
            <div className="flex">
                <button
                    className={`btn bg-transparent shadow-none rounded-none border ${!isActiveBookTab ? "border-gray-200 border-b-transparent rounded-tl-lg rounded-tr-lg" : " border-transparent border-b-gray-200"} `}
                    onClick={() => setIsActiveBookTab(false)}
                >
                    Read Book
                </button>
                <button
                    className={`btn bg-transparent shadow-none rounded-none border ${isActiveBookTab ? "border-gray-200 border-b-transparent rounded-tl-lg rounded-tr-lg" : " border-transparent border-b-gray-200"} `}
                    onClick={() => setIsActiveBookTab(true)}
                >
                    Wishlist Books
                </button>
                <div className="border-b border-gray-200 flex-1"></div>
            </div>

            {isActiveBookTab ? (
                <div className="py-6 space-y-6">
                    {wishListItem.length ? (
                        wishListItem.map((item) => (
                            <BookListItem
                                key={item.bookId}
                                item={item}
                            ></BookListItem>
                        ))
                    ) : (
                        <h2>You wishlist is empty.</h2>
                    )}
                </div>
            ) : (
                <div className="py-6 space-y-6">
                    {storeBook.length ? (
                        storeBook.map((item) => (
                            <BookListItem
                                key={item.bookId}
                                item={item}
                            ></BookListItem>
                        ))
                    ) : (
                        <h2>You Read Book list is empty.</h2>
                    )}
                </div>
            )}
        </div>
    );
};

export default Books;
