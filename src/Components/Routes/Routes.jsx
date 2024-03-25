import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ListedBooks from '../ListedBooks/ListedBooks';
import PagesToRead from '../PagesToRead/PagesToRead';
import Mainlayout from '../Mainlayout/Mainlayout'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
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
                element: <PagesToRead />
            }
        ]
    },
]);

export default router;