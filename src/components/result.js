import React from "react";

const Result = ({score,playAgain})=>{
    return(

    <div className="score-board">
        <div className="score"> Your score : {score} / 5 correct answers :)</div>
        <button className = "playBtn" onClick={playAgain}>Play Again</button>
        {/* Hello */}
    </div>
    )
}
export default Result;