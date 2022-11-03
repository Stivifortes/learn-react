import React from 'react'

export default function QuizFooter(props) {

  const { handleNext, handlePrevius, handleQuit } = props

  return (
    <div className='flex justify-around'>
      <button onClick={handlePrevius} className='bg-slate-400 px-6 rounded-2xl text-white'>Previus</button>
      <button onClick={handleNext} className='bg-green-500 px-6 rounded-2xl text-white'>Next</button>
      <button onClick={handleQuit} className='bg-red-500 px-6 rounded-2xl text-white'>Quit</button>
    </div>
  )
}
