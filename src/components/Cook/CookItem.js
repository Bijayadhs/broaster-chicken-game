import React from 'react';


function CookItem({ order }) {


    return (
        <div className="order-item">
            <h4>1x {order.pack}</h4>
        </div>
    )
}

export default CookItem
