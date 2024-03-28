import { Link } from "react-router-dom";


const ErrorComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[500px] space-y-5">
            <h1 className="text-7xl font-bold">404 Not Found</h1>
            <p className="text-2xl font-semibold">You have come to wrong place</p>
            <Link to={'/'} className="bg-lime-500 px-8 py-3 rounded-xl text-white text-2xl">Go Back</Link>
        </div>
    );
};

export default ErrorComponent;