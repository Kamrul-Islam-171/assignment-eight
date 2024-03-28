
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineRestorePage } from "react-icons/md";
import { useNavigate } from 'react-router-dom';




const ReadBookCard = ({ book }) => {
    const { image, tags, bookName, author, bookId, category, rating, totalPages, yearOfPublishing, publisher } = book;
    const navigate = useNavigate();
    const handleGotoList = () => {
        navigate(`/book/${bookId}`);
    }
    return (

        <div className='flex flex-col lg:flex-row gap-10 border-2 border-[#13131326] rounded-xl p-8'>
            <div className='bg-[#1313130D] p-3 flex justify-center items-center rounded-xl'>
                <div>
                    <img className='w-[300px]' src={image} alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-between gap-6 w-full'>
                <h1 className='text-2xl font-bold playfair-display'>{bookName}</h1>
                <p className="text-[#131313CC] font-medium">By : {author}</p>
                <div className="gap-5 flex flex-col lg:flex-row lg:items-center">
                    <p className="font-bold">Tag : </p>
                    {
                        tags?.map((tag, idx) => <a key={idx} className="bg-[#23BE0A0D] font-medium py-2 px-5 rounded-full text-[#23BE0A]">#{tag}</a>)
                    }
                    <p className='flex gap-2 items-center text-[#131313CC]'><span className='text-xl'><CiLocationOn /></span> Year of Publishing : {yearOfPublishing}</p>
                </div>
                <div className='flex gap-10 text-[#13131399]'>
                    <p className='flex gap-2 items-center'><span><GoPeople /></span> Publisher : {publisher}</p>
                    <p className='flex gap-2 items-center'><span><MdOutlineRestorePage /></span> Page {totalPages}</p>
                </div>
                <hr />

                <div className='flex flex-col lg:flex-row gap-5'>
                    <p className='bg-[#328EFF26] py-3 px-5 flex justify-center rounded-full text-[#328EFF]'>Category: {category}</p>
                    <p className='bg-[#FFAC3326] py-3 px-8 flex justify-center rounded-full text-[#FFAC33]'>Rating:{rating}</p>
                    <button onClick={handleGotoList} className='bg-[#23BE0A] py-3 px-5 rounded-full hover:bg-green-900 text-white'>View Details</button>
                </div>
            </div>
        </div>
    );
};
ReadBookCard.propTypes = {
    book: PropTypes.object
}

export default ReadBookCard;