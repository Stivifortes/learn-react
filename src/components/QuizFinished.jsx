import React from 'react'

export default function QuizFinished({data, setIsQuiting}) {
  return (
    <div className='container mx-auto m-4 rounded-xl p-4 bg-slate-500 text-white align-middle'>
      <div>
        <h1 className='text-center my-4'>Quiz Finished!</h1>
        <div className='flex justify-center my-6'>
        Your Socre: {data.score}
        </div>
        <div className='flex justify-center my-3'>
          <button className='bg-green-500 px-4 m-2 rounded-xl' onClick={() => setIsQuiting(false)}>Play Again</button>
        </div>
      </div>
    </div>
  )
}
