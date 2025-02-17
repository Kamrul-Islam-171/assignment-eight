import { useNavigate } from 'react-router-dom';
import bannar_img from '../../../public/thedatingplaybookformen.svg'


const Bannar = () => {
    const navigate = useNavigate()
    const handleGotoList = () => {
        navigate('/listedbooks');
    }
    return (
        <div className="mt-10 bg-gray-100 rounded-2xl  flex lg:flex-row flex-col gap-5 lg:px-9 py-14 items-center">
            <div className='lg:w-[60%] space-y-10 lg:ml-20 ml-10'>
                <h1 className='lg:text-6xl text-3xl font-bold playfair-display'><span className='leading-snug'>Books to freshen up your bookshelf</span></h1>
                <button onClick={handleGotoList} className=' btn px-5 bg-[#23BE0A] text-xl font-bold text-white'>View The List</button>
            </div>
            <div className='lg:w-[38%] flex justify-center items-center'>
                <img src={bannar_img} className='w-full h-full' alt="" />
            </div>
        </div>
    );
};

export default Bannar;