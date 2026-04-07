const getAllReadLocalDB = () => {
    const allReadList = localStorage.getItem("storeBook");

    if (allReadList) return JSON.parse(allReadList);

    return [];
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);

    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem('storeBook', JSON.stringify(allBooks))
    }
}

const getWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem('wishListItems');

    if (allWishList) return JSON.parse(allWishList);
    return [];
}

const addWishListToLocalDB = (book) => {
    const allWishlist = getWishListFromLocalDB();

    const isAlreadyExist = allWishlist.find(bk => bk.bookId === book.bookId);

    if (!isAlreadyExist) {
        allWishlist.push(book);
        localStorage.setItem('wishListItems', JSON.stringify(allWishlist))
    }
}

export { getAllReadLocalDB, addReadListToLocalDB, getWishListFromLocalDB, addWishListToLocalDB };