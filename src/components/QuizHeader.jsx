import React from 'react'

export default function QuizHeader({data}) {
  return (
    <>
    <div className="container mx-auto bg-slate-500 text-white rounded-xl shadow border    p-8 m-10 flex justify-center text-xl">
        Quiz time
      </div>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <p>Your Socre: {data.score}</p>
          <p>Responses: {data.responses}</p>
        </div>
      </div>
    </>
  )
}
