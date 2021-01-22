import React from 'react';
import broaster from '../img/broaster.svg';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="container">
            <div className="main">
                <img className="broaster" src={broaster} alt='Broaster' />
                <p>Much imitated, never duplicated, there is only one Genuine Broaster Chicken.</p>
                <Link to='/order' className="btn btn-order">Start Taking Order</Link>
            </div>
        </div>
    )
}

export default Home
