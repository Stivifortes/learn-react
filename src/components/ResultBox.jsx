import React from 'react'

export default function Result({score, playAgain}) {
  return (
    <div>
      <div> Your score is {score} || 5 correct answer !!!/</div>
      <button onClick={playAgain}>Play Again</button>
    </div>
  )
}
