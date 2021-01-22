import React from 'react'

function Piece({ piece, handleSelection }) {

    return (
        <div className="chicken-piece">
            <div onClick={() => handleSelection(piece)} className="chicken-image">
                <img src={`img/${piece}.jpg`} alt={piece} />
            </div>
            <h4>{piece}</h4>
        </div>
    )
}

export default Piece
