import React from "react";
import BookImg from "./../../assets/bookImg.png";
import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="container mx-auto pt-10">
            <div className="bg-base-200 py-20 rounded-3xl">
                <div className="hero-content flex-col md:flex-row-reverse gap-22">
                    <img src={BookImg} />
                    <div className="space-y-8">
                        <h1 className="text-5xl leading-[1.2em] font-bold">
                            Books to freshen up <br /> your bookshelf
                        </h1>

                        <Link
                            className="btn bg-[#23be0a] border-0 text-white transition-colors duration-500 hover:bg-[#59C6D2]"
                            to="books"
                        >
                            View The List
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
