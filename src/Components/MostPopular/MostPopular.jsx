// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import ReadBookCard from "../ReadBookCard/ReadBookCard";

const MostPopular = () => {
    const books = useLoaderData();
    // console.log(books)
    books.sort((a, b) => b.rating - a.rating);
    console.log(books);

    return (
        <div className="space-y-5 mt-10 mb-10">
            {
                books.slice(0, 3).map(book => <ReadBookCard book={book} key={book.bookId}></ReadBookCard>)
            }
        </div>
    );
};

export default MostPopular;