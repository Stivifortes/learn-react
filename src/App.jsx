import React, { useEffect, useState } from 'react'
import quizQuestions from './question'
import QuizFooter from './components/QuizFooter'
import './index.css'


export default function App() {

  const [isQuiting, setIsQuiting] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(false)
  const [count, setCount] = useState({
    startValue: 0,
    endValue: 1,
  })

  const [data, setData] = useState(
    {
      questions: [],
      score: 0,
      responses: 0
  })

  useEffect(()=>{
    alert("Welcome to this Quiz! Lets Play!")
  },[])
  
  useEffect(() => {
    setData(
      {
        ...data,
        questions: quizQuestions.slice(count.startValue, count.endValue)
      })
  }, [count])

  const handleNext = () => {
    if(quizQuestions.length == count.endValue){admilson
      alert("Quiz Finished!")
      setIsQuiting(true)
      return
    }
    setCount({
      ...count,
      startValue: count.startValue < quizQuestions.length - 1 ?
        count.startValue + 1
        : quizQuestions.length - 1,
      endValue: count.endValue == quizQuestions.length ? quizQuestions.length : count.endValue + 1
    })
    setCorrectAnswer(false)
  }

  const handlePrevius = () => {
    setCount({
      ...count,
      startValue: count.startValue == 0 ? 0 : count.startValue - 1,
      endValue: count.endValue <= 1 ? 1 : count.endValue - 1
    })
  }

  const computeAnswer = (item, correct) => {
    if (item == correct) {
      setCorrectAnswer(true)
      setData({ ...data, score: data.score + 1 })
    } else {
      alert("Incorrect")
    }

    setTimeout(() => {
      handleNext()
    }, 2000);
  }

  const handleQuit = () => {
    console.log(isQuiting)
    setIsQuiting(true)
  }

  return (
    <div>
      <div className="container mx-auto bg-slate-500 text-white rounded-xl shadow border    p-8 m-10 flex justify-center text-xl">
        Quiz time
      </div>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <p>Your Socre: {data.score}</p>
          <p>Responses: {data.responses}</p>
        </div>
      </div>
      {
        isQuiting ?
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
          : <div className='container mx-auto bg-slate-500 rounded-xl '>
            {
              data.questions.map(({ question, answers, correct, quetionId }) => {
                return (
                  <div className='container mx-auto m-4 rounded-xl p-4' key={quetionId}>
                    <h2 className='flex justify-center text-2xl my-6 text-white uppercase'>{question}</h2>
                    <div className='flex flex-col'>
                      {
                        answers.map(item => {
                          return (
                            <button
                              onClick={() => computeAnswer(item, correct)}
                              className={`${correctAnswer && item == correct ? 'bg-green-400 m-2 rounded-lg text-white' : 'bg-slate-50 m-2 rounded-lg '}`}
                              key={item}>{item}
                            </button>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
      }
      <QuizFooter handleNext={ handleNext } handlePrevius={ handlePrevius } handleQuit={ handleQuit } />
    </div>
  )
}
