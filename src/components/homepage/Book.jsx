import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
    return (
        <div className="card bg-base-100 border border-gray-100">
            <figure className="m-4 mb-0 bg-gray-200 p-5 rounded-xl">
                <img
                    className="w-full h-60 object-contain"
                    src={book.image}
                    alt={book.bookName}
                />
            </figure>
            <div className="card-body">
                <div className="flex gap-3">
                    {book.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="badge badge-soft badge-success"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <h2 className="card-title">{book.bookName}</h2>
                <p>By: {book.publisher}</p>
                <div className="card-actions justify-between items-center border-t-2 border-dashed border-gray-300 pt-3 mt-2">
                    <div>{book.category}</div>
                    <div className="flex items-center gap-2">
                        {book.rating}
                        <FaRegStar></FaRegStar>
                    </div>
                </div>
                <Link className="btn btn-primary" to={`/books/${book.bookId}`}>
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Book;
