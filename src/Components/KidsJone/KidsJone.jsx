import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import KidsBookCard from "../KidsBookCard/KidsBookCard";


const KidsJone = () => {
    const books = useLoaderData();
    const [kidsBooks, setKidsBooks] = useState([]);
    useEffect(() => {
        const desiredBooks = books.filter(book => book.category == 'Fantasy' || book.category == 'Detective');
        setKidsBooks(desiredBooks);
    }, [])
    console.log(kidsBooks)
    return (
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {
                kidsBooks.map(book => <KidsBookCard book={book} key={book.bookId}></KidsBookCard>)
            }
        </div>
    );
};

export default KidsJone;