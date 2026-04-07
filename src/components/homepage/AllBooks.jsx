import React, { use, useState } from "react";
import Book from "./Book";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
    let books = use(booksPromise);

    const [sortedBooks, setSortedBooks] = useState(books);

    const handleSorting = (sortingType) => {
        const NewSortedBooks = [...sortedBooks].sort(
            (a, b) => b[sortingType] - a[sortingType],
        );
        setSortedBooks(NewSortedBooks);
    };

    return (
        <div className="container mx-auto py-25">
            <h2 className="text-5xl mb-9 font-bold text-center">Books</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    Sort By{" "}
                    <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
                </div>
                <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                    <li>
                        <a onClick={() => handleSorting("totalPages")}>Pages</a>
                    </li>
                    <li>
                        <a onClick={() => handleSorting("rating")}>Rating</a>
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBooks.map((book) => (
                    <Book key={book.bookId} book={book}></Book>
                ))}
            </div>
        </div>
    );
};

export default AllBooks;
