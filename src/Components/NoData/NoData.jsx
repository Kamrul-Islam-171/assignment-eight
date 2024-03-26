
import PropTypes from 'prop-types';

const NoData = ({ msg }) => {
    return (
        <div className='mt-20 flex justify-center items-center'>
            <h1 className="text-7xl">No books to {msg}</h1>
        </div>
    );
};

NoData.propTypes = {
    msg: PropTypes.string
}

export default NoData;