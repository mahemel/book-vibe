import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { BookContext } from "../../contexts/BookContext";
import { WishListContext } from "../../contexts/WishListProvider";

const BookDetails = () => {
    const params = useParams();
    const books = useLoaderData();
    let navigate = useNavigate();

    const book = books.find((bookData) => bookData.bookId == params.id);

    const bookContext = useContext(BookContext);
    const wishListContext = useContext(WishListContext);

    const { handMarkAsRead } = bookContext;
    const { handeWishList } = wishListContext;

    return (
        <div className="container mx-auto py-20">
            <div className="flex justify-between">
                <figure className="w-[50%]">
                    <img className="w-[50%] mx-auto" src={book.image} />
                </figure>
                <div className="w-[50%] space-y-5">
                    <h2 className="text-2xl font-bold">{book.bookName}</h2>
                    <p>By: {book.publisher}</p>
                    <p className="font-bold">{book.category}</p>
                    <p>
                        <strong>Review</strong>: {book.review}
                    </p>

                    <div className="flex gap-3">
                        Tag
                        {book.tags.map((tag, index) => (
                            <div
                                key={index}
                                className="badge badge-soft badge-success"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <dl className="grid grid-cols-2">
                        <dt>Number of pages:</dt>
                        <dd>{book.totalPages}</dd>

                        <dt>Publisher:</dt>
                        <dd>{book.publisher}</dd>
                    </dl>
                    <div className="card-actions flex gap-3">
                        <button
                            className="btn"
                            onClick={() => handMarkAsRead(book)}
                        >
                            Mark as Read
                        </button>
                        <button
                            onClick={() => handeWishList(book)}
                            className="btn bg-[#59C6D2] border-0 text-white transition-colors duration-500 hover:bg-[#23be0a]"
                        >
                            Add to Wishlist
                        </button>
                    </div>

                    <div className="flex gap-2 items-center cursor-pointer">
                        <FaArrowLeft></FaArrowLeft>
                        <button
                            className=" cursor-pointer"
                            onClick={() => navigate(-1)}
                        >
                            Back to books
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
