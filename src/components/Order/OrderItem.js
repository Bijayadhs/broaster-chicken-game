import React, { useContext } from 'react';
import { ToggleContext } from '../../context/orderContext';


function OrderItem({ order }) {
    const toggleSelect = useContext(ToggleContext)
    // const handleChange = (e) => {
    //     let checked = e.target.checked;
    //     return order.selected = checked;
    // }

    return (
        <div className="order-item">
            <h4>1x {order.pack}</h4>
            <input type='checkbox' onChange={toggleSelect}></input>
        </div>
    )
}

export default OrderItem
