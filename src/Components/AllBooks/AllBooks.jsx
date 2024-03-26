import useFetchData from "../Hookes/useFetchData";
import BookCard from "./BookCard";



const AllBooks = () => {
    const { books } = useFetchData();

    return (
        <div className="mt-20">
            <div>
                <h1 className="text-4xl font-bold text-center">Books</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 mt-10">
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;