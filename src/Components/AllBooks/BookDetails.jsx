import { useLoaderData, useNavigation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { storeToLocalStorage } from "../utils/localStorageData";
import { isRead, storeWishListToLocalStorage } from "../utils/localWishList";
import toast from "react-hot-toast";


const BookDetails = () => {

    const [book, setBook] = useState([]);
    // const [read, setRead] = useState(false);
    const { bookId } = useParams();
    const bookInNum = parseInt(bookId)
    const allbook = useLoaderData();

    const navigation = useNavigation();
    useEffect(() => {
        const rem = allbook.filter(item => item.bookId === bookInNum);
        setBook(rem[0]);
    }, [])



    // if (navigation.state === 'loading') {
    //     return <p className="text-7xl">Loading....</p>
    // }


    const handleRead = () => {
        const x = storeToLocalStorage(book);
        if (x) toast.error('You have already read this book!')
        else {
            toast.success('Books Added To Read List')
        }
    }

    const handleWishList = () => {
        const x = isRead(book);
        if (x) {
            return toast.error('You have already read this book!')
        }
        const y = storeWishListToLocalStorage(book);
        if (y) {
            return toast.error('You have already wished this book!');
        }
        toast.success('Books Added To Wish List');

    }
    // console.log("read = ", read)




    const { tags } = book;

    return (
        <div>

            {/* <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row p-10 gap-10">

                    <div className="bg-base-200 p-10 rounded-2xl">
                        <img src={book.image} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold playfair-display">{book.bookName}</h1>
                        <p className="py-6 text-[#131313CC] font-bold">By : {book.author}</p>
                        <hr className="border-2" />
                        <p className="text-[#131313CC] font-bold">{book.category}</p>
                        <hr className="border-2" />
                        <p><span className="font-bold">Review : </span><span className="text-[#131313CC]">{book.review}</span></p>
                        <div className="gap-5 flex items-center">
                            <p className="font-bold">Tags : </p>
                            {
                                tags?.map((tag, idx) => <a key={idx} className="bg-[#23BE0A0D] font-medium p-2 rounded-2xl text-[#23BE0A]">{tag}</a>)
                            }
                        </div>

                        <hr className="border-2" />
                        <div className="flex gap-10">
                            <div className="space-y-5">
                                <p>Number of Pages: </p>
                                <p>Publisher: </p>
                                <p>Year of Publishing: </p>
                                <p>Rating: </p>
                            </div>
                            <div className="space-y-5">
                                <p className="font-bold">{book.totalPages}</p>
                                <p className="font-bold">{book.publisher}</p>
                                <p className="font-bold">{book.yearOfPublishing}</p>
                                <p className="font-bold">{book.rating}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={handleRead} className="btn px-5 border-[#1313134D]">Read</button>
                            <button onClick={handleWishList} className="btn bg-[#50B1C9] text-white px-5">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-col lg:flex-row gap-10 mt-14 mb-5">
                <div className="bg-base-200 p-5 lg:w-[40%] rounded-2xl flex items-center justify-center">
                    <img src={book.image} className="h-[450px] lg:h-[500px] w-[400px] lg:w-[w-500px] rounded-lg " />
                </div>
                <div className="space-y-5 lg:w-[58%]">
                    <h1 className="text-5xl font-bold playfair-display">{book.bookName}</h1>
                    <p className="py-6 text-[#131313CC] font-bold">By : {book.author}</p>
                    <hr className="border-2" />
                    <p className="text-[#131313CC] font-bold">{book.category}</p>
                    <hr className="border-2" />
                    <p><span className="font-bold">Review : </span><span className="text-[#131313CC]">{book.review}</span></p>
                    <div className="gap-5 flex items-center">
                        <p className="font-bold">Tags : </p>
                        {
                            tags?.map((tag, idx) => <a key={idx} className="bg-[#23BE0A0D] font-medium p-2 rounded-2xl text-[#23BE0A]">{tag}</a>)
                        }
                    </div>

                    <hr className="border-2" />
                    <div className="flex gap-10">
                        <div className="space-y-5">
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div className="space-y-5">
                            <p className="font-bold">{book.totalPages}</p>
                            <p className="font-bold">{book.publisher}</p>
                            <p className="font-bold">{book.yearOfPublishing}</p>
                            <p className="font-bold">{book.rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={handleRead} className="btn px-5 border-[#1313134D]">Read</button>
                        <button onClick={handleWishList} className="btn bg-[#50B1C9] text-white px-5">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;