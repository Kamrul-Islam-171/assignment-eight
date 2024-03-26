import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;
    return (
        <Link to={`/book/${bookId}`} className="border-2 border-[#13131326] space-y-5 rounded-3xl p-5">
            <div className="bg-[#F3F3F3] h-[350px] rounded-3xl flex justify-center items-center">
                <img className=" w[250px] h-[250px]" src={image} alt="" />
            </div>
            <div className="space-y-5">
                <div className="gap-5 flex">
                    {
                        tags.map((tag, idx) => <a key={idx} className="bg-[#23BE0A0D] font-medium p-2 rounded-2xl text-[#23BE0A]">{tag}</a>)
                    }
                </div>
                <h1 className="text-2xl font-bold">{bookName}</h1>
                <p className="text-[#131313CC] font-medium">By : {author}</p>
                <hr />
                <div className="flex justify-between text-[#131313CC] font-medium">
                    <p>{category}</p>
                    <p className="flex gap-2 items-center">{rating} <span className="text-2xl"><CiStar /></span></p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;