import { useEffect, useState } from "react";
import { getLocalData } from "../utils/localStorageData";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import NoData from "../NoData/NoData";


const ReadBook = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const allreadBooks = getLocalData('allReadedBooks');
        setReadBooks(allreadBooks);
    }, [])

    // console.log('read books = ', readBooks)
    if (readBooks.length === 0) {
        return <NoData msg={'Read'}></NoData>
    }
    return (
        <div className="mt-10 space-y-5">
            {
                readBooks.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default ReadBook;