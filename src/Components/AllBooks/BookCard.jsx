import { CiStar } from "react-icons/ci";
import { Link, useNavigation } from "react-router-dom";
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;
    // const navigation = useNavigation();
    // if (navigation.state === 'loading') {
    //     return <p className="text-7xl">Loading....</p>
    // }
    return (
        <Link to={`/book/${bookId}`} className="border-2 hover:scale-105 transition border-[#13131326] space-y-5 rounded-3xl p-5">
            <div className="bg-[#F3F3F3] h-[350px] rounded-3xl flex justify-center items-center">
                <img className=" w[250px] h-[250px]" src={image} alt="" />
            </div>
            <div className="space-y-5">
                <div className="gap-5 flex">
                    {
                        tags.map((tag, idx) => <a key={idx} className="bg-[#23BE0A0D] font-medium p-2 rounded-2xl text-[#23BE0A]">{tag}</a>)
                    }
                </div>
                <h1 className="text-2xl font-bold playfair-display">{bookName}</h1>
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

BookCard.propTypes = {
    book: PropTypes.object

}

export default BookCard;