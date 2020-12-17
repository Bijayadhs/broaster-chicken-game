import React, { useContext } from 'react'
import './style.css';
import OrderItem from './OrderItem';
import { Link } from 'react-router-dom';
import { OrderContext } from '../../context/orderContext';

function Order() {
    const orders = useContext(OrderContext);

    return (
        <div className="container">
            <h1>Orders</h1>
            {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
            ))}

            <Link to='/cook' className="btn btn-cook">Choose Chicken Pieces</Link>


        </div>
    )
}

export default Order
