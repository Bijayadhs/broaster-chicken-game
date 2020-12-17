import React from 'react'

function CookItem({ order, selected }) {

    return (
        <div className="order-item">
            <h4>1x {order.pack}</h4>
            <input type='checkbox' checked={selected}></input>
        </div>
    )
}

export default CookItem
