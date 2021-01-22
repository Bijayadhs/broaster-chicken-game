import React, { useState, useContext } from 'react'
import CookingBowl from './CookingBowl';
import CookItem from './CookItem';
import Piece from './Piece';
import './style.css';
import { OrderContext } from '../../context/orderContext';


function Cook() {
    const chickenPieces = ['breast', 'ribs', 'wings', 'thigh', 'leg'];
    const [cookPiece, setCookPiece] = useState([]);
    const { selectedOrders } = useContext(OrderContext);
    function handleSelection(p) {
        // console.log(p)
        setCookPiece([...cookPiece, p]);
    }


    console.log(cookPiece)

    return (
        <div className="container">
            <h4 className="new">New Order</h4>

            <div>
                {selectedOrders.map((order) => (
                    <CookItem key={order.id} order={order} />
                ))}
            </div>
            <div className="chicken">{chickenPieces.map(p => (<Piece key={p} piece={p} handleSelection={handleSelection} />))}</div>
            <CookingBowl cookPiece={cookPiece} />




        </div>
    )
}

export default Cook
