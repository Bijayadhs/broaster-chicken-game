import React, { useState, useEffect } from 'react'

function CookingBowl({ cookPiece }) {
    const [spicyBucketSelected, setSpicyBucketSelected] = useState(true);
    const [isCooking, setIsCooking] = useState(false);
    const [timer, setTimer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    let spicyPiece, originalPiece = [];

    if (spicyBucketSelected) {
        spicyPiece = cookPiece;
        originalPiece = [];
    } else {
        originalPiece = cookPiece;
        spicyPiece = [];
    }
    function onCooking() {
        setIsCooking(true);
    }
    function runTimer(e) {
        setTimer(e.target.value)
        setTimeout(() => {
            setIsCooking(false);
            setShowResult(true);
        }, 2000);
    }
    // useEffect(() => {
    //     return emptyBucket();

    // }, [runTimer])

    // function emptyBucket() {
    //     console.log('Empty');
    // }

    return (
        <div className="cooking-bowl">
            <div onClick={() => setSpicyBucketSelected(true)} className={"cook " + (spicyBucketSelected ? "spicy" : null)}>
                <div className="cook-item">

                    {isCooking ? <h4 className={"cooking " + (spicyBucketSelected ? "cooking-spicy" : null)}>{spicyBucketSelected ? "Cooking..." : null}</h4> : spicyPiece.map(p => (<h4 key={p}>{p}</h4>))}
                </div>
                <div className="runTime spicy">{timer ? `${timer} mins` : "spicy"}</div>
            </div>
            <div onClick={() => setSpicyBucketSelected(false)} className={"cook " + (spicyBucketSelected ? null : "original")}>
                <div className="cook-item">

                    {isCooking ? <h4 className={"cooking " + (spicyBucketSelected ? null : "cooking-original")}>{spicyBucketSelected ? null : "Cooking..."}</h4> : originalPiece.map(p => (<h4 key={p}>{p}</h4>))}
                </div>
                <div className="runTime original">{timer ? `${timer} mins` : "original"}</div>
            </div>
            <div className="timer">
                <button onClick={onCooking} className="btn">Cook</button>
                <button value='5' onClick={runTimer} className="btn btn-timer">5 minute passby</button>
                <button value='10' onClick={runTimer} className="btn btn-timer">10 minute passby</button>
            </div>
            <div className={showResult ? "show" : "hide"}>
                <h2>Your Score : 100</h2>

            </div>
        </div>
    )
}

export default CookingBowl
