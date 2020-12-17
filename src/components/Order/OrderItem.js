import React, { useContext } from 'react';
import { OrderContext } from '../../context/orderContext';



function OrderItem({ order }) {
    const { toggleSelection } = useContext(OrderContext);

    // const toggleSelect = useContext(ToggleContext)
    const handleChange = (e) => {
        console.log(e.target.checked);
        let checked = e.target.checked;
        toggleSelection(checked);
    }

    return (
        <div className="order-item">
            <h4>1x {order.pack}</h4>
            <input type='checkbox' checked={order.selected} onChange={handleChange}></input>
        </div>
    )
}

export default OrderItem
