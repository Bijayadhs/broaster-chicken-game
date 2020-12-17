import React from 'react'

function Piece({ piece, setCookPiece }) {
    const bucket = [];

    return (
        <div className="chicken-piece">
            <div onClick={(piece) => setCookPiece(() => [...bucket, piece])} className="chicken-image">
                <img src={`img/${piece}.jpg`} alt={piece} />
            </div>
            <h4>{piece}</h4>
        </div>
    )
}

export default Piece
