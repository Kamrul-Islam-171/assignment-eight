


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getLocalData } from '../utils/localStorageData';
import NoData from '../NoData/NoData';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'green', 'purple'];



const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const readBooks = getLocalData();
        const bookList = readBooks.map(item => {
            const name = item.bookName.slice(0, 13);
            const totalPages = item.totalPages;
            return { name, totalPages };
        })
        setBooks(bookList);

    }, [])
    if (books.length == 0) {
        return <NoData msg={'Read'}></NoData>
    }
    return (
        <div className=' h-[500px] mt-20 flex justify-center items-center'>
            <BarChart
                width={800}
                height={300}
                data={books}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={`name`} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {books.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}

