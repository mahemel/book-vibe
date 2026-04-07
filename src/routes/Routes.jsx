import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/hoempage/Homepage";
import Books from "../pages/books/Books";
import Errorpage from "../pages/errorpage/Errorpage";
import BookDetails from "../pages/bookdetails/BookDetails";
import PagesToRead from "../pages/pagesToRead/PagesToRead";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>,
            },
            {
                path: "/books",
                element: <Books></Books>,
            },
            {
                path: "/books/:id",
                loader: () => fetch("/booksData.json"),
                Component: BookDetails,
            },
            {
                path: "/pages-to-read",
                Component: PagesToRead,
            },
        ],
        errorElement: <Errorpage></Errorpage>,
    },
]);
