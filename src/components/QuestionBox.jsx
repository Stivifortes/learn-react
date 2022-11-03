import React, { useState } from 'react'

export default function QuestionBox(props) {
  const {question, options, selected} = props.data
  const [answer, setAnswer] = useState(options)

  return (
    <div>
      <div>{question}</div>
      {
        answer.map((text, index) => {
          <button
          key={index}
          onClick={()=> {
            selected(text)
          }}>
            {text}
          </button>
        })
      }
    </div>
  )
}
