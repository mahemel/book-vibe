import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router";

const BookListItem = ({ item }) => {
    return (
        <div className="flex gap-6 rounded-xl border border-gray-300 p-6">
            <div className="bg-gray-200 rounded-xl p-6 w-60">
                <img
                    className="h-50 mx-auto"
                    src={item.image}
                    alt={item.bookName}
                />
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">{item.bookName}</h2>
                <p>By: {item.publisher}</p>
                <div className="flex items-center gap-3">
                    Tag:
                    {item.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="badge badge-soft badge-success"
                        >
                            {tag}
                        </div>
                    ))}
                    <div className="flex items-center gap-2">
                        <SlLocationPin></SlLocationPin>
                        <span>Year of Publising: {item.yearOfPublishing}</span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <p className="text-gray-500">Publisher: {item.publisher}</p>
                    <p className="text-gray-500">Page: {item.totalPages}</p>
                </div>

                <div className="flex gap-3">
                    <div className="badge badge-soft badge-primary min-w-20">
                        {item.category}
                    </div>
                    <div className="badge badge-soft badge-warning min-w-20">
                        {item.rating}
                    </div>
                    <Link
                        to={`/books/${item.bookId}`}
                        className="bg-[#23be0a] border-0 px-3 rounded-2xl text-sm flex items-center text-white transition-colors duration-500 hover:bg-[#59C6D2]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookListItem;
