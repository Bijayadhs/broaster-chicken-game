import React from 'react'

function CookingBowl({ cookPiece }) {
    return (
        <div className="cooking-bowl">
            <div className="cook spicy">5x</div>
            <div className="cook original">10x</div>
            <div className="timer">
                <button className="btn">Cook</button>
                <button className="btn btn-timer">{cookPiece.length} min timer</button>
                <button className="btn btn-timer">10x min timer</button>
            </div>
        </div>
    )
}

export default CookingBowl
