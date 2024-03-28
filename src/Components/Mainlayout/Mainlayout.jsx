
import { Outlet, useNavigation } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';


const Mainlayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavBar></NavBar>
            {

                navigation.state === 'loading' ? <p className='text-7xl text-center mt-20'>Loading...</p> : <Outlet></Outlet>
            }
        </div>
    );
};

export default Mainlayout;