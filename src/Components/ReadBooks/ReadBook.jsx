import { useEffect, useState } from "react";
import { getLocalData } from "../utils/localStorageData";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import NoData from "../NoData/NoData";
import PropTypes from 'prop-types';


const ReadBook = ({ sortBy }) => {
    const [readBooks, setReadBooks] = useState([]);
    

    // console.log(sortBy);

    useEffect(() => {
        const allreadBooks = getLocalData('allReadedBooks');
        setReadBooks(allreadBooks);
    }, [])

    // console.log('read books = ', readBooks)
    if (readBooks.length === 0) {
        return <NoData msg={'Read'}></NoData>
    }

    if (sortBy == 'sortByRating') {
        readBooks.sort((a, b) => b.rating - a.rating);
    }
    else if (sortBy == 'sortByPublishedYear') {
        readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    else if(sortBy == 'sortByTotalPages') {
        readBooks.sort((a, b) => b.totalPages - a.totalPages);
    }
    // console.log(sortBy, readBooks);
    return (
        <div className="mt-10 space-y-5">
            {
                readBooks.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

ReadBook.propTypes = {
    sortBy:PropTypes.string
}

export default ReadBook;