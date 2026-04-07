import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { addWishListToLocalDB, getWishListFromLocalDB } from "../utils/localDB";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
    const [wishListItem, setWishListItem] = useState(getWishListFromLocalDB());

    const handeWishList = (wishListBook) => {
        const isInWishListItem = wishListItem.find(
            (wishItem) => wishItem.bookId == wishListBook.bookId,
        );

        addWishListToLocalDB(wishListBook);

        if (isInWishListItem) {
            toast.error("This item is already in your wishlist!", {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            const newWishList = [...wishListItem, wishListBook];
            setWishListItem(newWishList);

            toast.success(
                `${wishListBook.bookName} is added to your wish list`,
                {
                    position: "top-right",
                    autoClose: 3000,
                },
            );
        }
    };

    return (
        <WishListContext.Provider value={{ wishListItem, handeWishList }}>
            {children}
        </WishListContext.Provider>
    );
};

export default WishListProvider;
