import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import BookProvider from "./contexts/BookContext";
import WishListProvider from "./contexts/WishListProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BookProvider>
            <WishListProvider>
                <RouterProvider router={router}></RouterProvider>
                <ToastContainer></ToastContainer>
            </WishListProvider>
        </BookProvider>
    </StrictMode>,
);
