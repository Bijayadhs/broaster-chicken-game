import React, { useContext } from 'react';
import { OrderContext } from '../../context/orderContext';


function CookItem({ order }) {
    const { toggleSelection } = useContext(OrderContext)


    return (
        <div className="order-item">
            <h4>1x {order.pack}</h4>
            <input type='checkbox' checked={order.selected} onChange={toggleSelection}></input>
        </div>
    )
}

export default CookItem
