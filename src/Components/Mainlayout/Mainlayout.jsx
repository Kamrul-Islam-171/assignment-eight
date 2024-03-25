
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';

const Mainlayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;