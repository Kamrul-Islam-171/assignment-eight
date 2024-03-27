import { useEffect, useState } from "react";
import NoData from "../NoData/NoData";
import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { getLocalWishListData } from "../utils/localWishList";
import PropTypes from 'prop-types';


const WishList = ({sortBy}) => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const allreadBooks = getLocalWishListData('allReadedBooks');
        setReadBooks(allreadBooks);
    }, [])

    // console.log('read books = ', readBooks)
    if (readBooks.length === 0) {
        return <NoData msg={'WishList'}></NoData>
    }
    if (sortBy == 'sortByRating') {
        readBooks.sort((a, b) => b.rating - a.rating);
    }
    else if (sortBy == 'sortByPublishedYear') {
        readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return (
        <div className="mt-10 space-y-5">
            {
                readBooks.map(book => <ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

WishList.propTypes = {
    sortBy : PropTypes.string
}

export default WishList;