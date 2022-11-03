import React, { useEffect, useState } from "react";
import quizQuestions from "./question";
import QuizFooter from "./components/QuizFooter";
import "./index.css";
import QuizFinished from "./components/QuizFinished";
import QuestionBox from "./components/QuestionBox";
import QuizHeader from "./components/QuizHeader";
import { useContext } from "react";
import { QuizContext } from "./context/QuizContext";

export default function Quiz() {
  const dat = useContext(QuizContext);

  console.log(dat);
  const [isQuiting, setIsQuiting] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [count, setCount] = useState({
    startValue: 0,
    endValue: 1,
  });

  const [data, setData] = useState({
    questions: [],
    score: 0,
    responses: 0,
  });

  useEffect(() => {
    alert("Welcome to this Quiz! Lets Play!");
  }, []);

  useEffect(() => {
    setData({
      ...data,
      questions: quizQuestions.slice(count.startValue, count.endValue),
    });
  }, [count]);

  const handleNext = () => {
    if (quizQuestions.length == count.endValue) {
      admilson;
      alert("Quiz Finished!");
      setIsQuiting(true);
      return;
    }
    setCount({
      ...count,
      startValue:
        count.startValue < quizQuestions.length - 1
          ? count.startValue + 1
          : quizQuestions.length - 1,
      endValue:
        count.endValue == quizQuestions.length
          ? quizQuestions.length
          : count.endValue + 1,
    });
    setCorrectAnswer(false);
  };

  const handlePrevius = () => {
    setCount({
      ...count,
      startValue: count.startValue == 0 ? 0 : count.startValue - 1,
      endValue: count.endValue <= 1 ? 1 : count.endValue - 1,
    });
  };

  const computeAnswer = (item, correct, index) => {
    if (item == correct) {
      setCorrectAnswer(true);
      setData({ ...data, score: data.score + 1 });
    } else {
      alert("Incorrect");
    }

    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const handleQuit = () => {
    console.log(isQuiting);
    setIsQuiting(true);
  };

  return (
    <QuizContext.Consumer>
      {({ value }) => (
        <>
          {console.log(value)}
          <QuizHeader data={data} />
          {isQuiting ? (
            <QuizFinished data={data} setIsQuiting={setIsQuiting} />
          ) : (
            <QuestionBox
              data={data}
              computeAnswer={computeAnswer}
              correctAnswer={correctAnswer}
            />
          )}
          <QuizFooter
            handleNext={handleNext}
            handlePrevius={handlePrevius}
            handleQuit={handleQuit}
          />
        </>
      )}
    </QuizContext.Consumer>
  );
}
