// import { useState } from "react";
// import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../ReadBooks/ReadBook';
import WishList from '../WishList/WishList';
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";


const ListedBooks = () => {
    // const [tab, setTab] = useState(0);
    const [sortBy, setSortBy] = useState('Default');
    return (
        <div className='space-y-5'>
            <div className="bg-[#1313130D] py-5 rounded-2xl">
                <h1 className="font-bold text-3xl text-center">Books</h1>
            </div>
            <div className="flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn border-none px-5 text-white  m-1 bg-[#23BE0A] hover:bg-green-900">Sort By<span className='text-xl'><IoIosArrowDropdown /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={() => setSortBy('sortByRating')}>Sort By Rating</a></li>
                        <li><a onClick={() => setSortBy('sortByPublishedYear')}>Sort By Published Year</a></li>
                    </ul>
                </div>
            </div>

            {/* <div>
                <div className={`flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap`}>
                    <Link onClick={() => setTab(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0 rounded-t-lg' : 'border-b '}  rounded-t-lg border-gray-400 `}>

                        <span>ArchitectRead Books</span>
                    </Link>
                    <Link onClick={() => setTab(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0 rounded-t-lg' : 'border-b'}  border-gray-400 `}>

                        <span>Wishlist Books</span>
                    </Link>

                </div>
            </div> */}

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab >Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <ReadBook sortBy={sortBy}></ReadBook>
                    </TabPanel>
                    <TabPanel>
                        <WishList sortBy={sortBy}></WishList>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ListedBooks;