import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const KidsBookCard = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;
    const navigate = useNavigate();
    const handleGotoList = () => {
        navigate(`/book/${bookId}`);
    }
    return (
        <div>
            <div className="card  w-96 h-[500px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className="card-actions ">
                        <button onClick={handleGotoList} className="btn border-none bg-[#23BE0A] text-white px-5">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

KidsBookCard.propTypes = {
    book: PropTypes.array
}

export default KidsBookCard;