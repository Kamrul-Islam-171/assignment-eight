import { useEffect, useState } from "react";
import NoData from "../NoData/NoData";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { getLocalWishListData } from "../utils/localWishList";



const WishList = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const allreadBooks = getLocalWishListData('allReadedBooks');
        setReadBooks(allreadBooks);
    }, [])

    // console.log('read books = ', readBooks)
    if (readBooks.length === 0) {
        return <NoData msg={'WishList'}></NoData>
    }
    return (
        <div className="mt-10 space-y-5">
            {
                readBooks.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default WishList;