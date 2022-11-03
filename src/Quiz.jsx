import { useEffect, useState } from 'react'
import QuestionBox from './components/QuestionBox'
import Result from './components/ResultBox'
import questionsData from './question'

function Quiz() {
  const [state, setState] = useState(
    {
      questionBank: [],
      score: 0,
      responses: 0
    }
  )

  const getQuestions = () => {
    setState({...state, questionBank: questionsData})
  }

  const playAgain = () => {
    getQuestions()
    setState({...state, score: 0, responses: 0})
  }

  const computeAnswer = (answer, correctAnswer) => {
    if(answer == correctAnswer){
      setState({...state, score: state.score + 1})
    }
    setState({...state, responses: state.responses < 5 ? state.responses + 1 : 5
    })
  }

  useEffect(() => {
    getQuestions()
  }, [])
  
  return (
    <div>
      <div style={{padding: '80px', fontSize: '40px'}}>QuizOn</div>
      {
        state.questionBank && 
        state.questionBank.map(questionItem => {
          return (
            <div>
            <div style={{padding: '20px'}}>{questionItem.question}</div>
            {
              questionItem.answers.map((text, index) => 
                (
                  <button
                  key={index}
                  onClick={()=> {
                    console.log('click')
                  }}>
                    {text}
                  </button>
                ))
            }
            </div>
          )
        })
      }
      {
        state.responses === 5 ? (<Result score={state.score} playAgain={playAgain}/>) : null
      }
    </div>
  )
}

export default Quiz
