import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ListedBooks from '../ListedBooks/ListedBooks';
import PagesToRead from '../PagesToRead/PagesToRead';
import Mainlayout from '../Mainlayout/Mainlayout'
import BookDetails from "../AllBooks/BookDetails";
import ErrorComponent from "../ErrorComponent/ErrorComponent";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        errorElement:<ErrorComponent></ErrorComponent>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/listedbooks',
                element: <ListedBooks />
            },
            {
                path: '/pagestoread',
                element: <PagesToRead />,
                loader:()=> fetch('/book.json')
            },
            {
                path: '/book/:bookId',
                element: <BookDetails></BookDetails>,
                loader:()=> fetch('/book.json')
            }
        ]
    },
]);

export default router;