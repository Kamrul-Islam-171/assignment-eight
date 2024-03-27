


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { useLoaderData } from 'react-router-dom';

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
    const books = useLoaderData();
    console.log(books)
    return (
        <div className=' h-[500px] mt-20 flex justify-center items-center'>
            <BarChart
                width={500}
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
                <XAxis dataKey={`bookId`} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="rating" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {books.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}

