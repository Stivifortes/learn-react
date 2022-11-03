import React from "react";
import Quiz from "./Quiz";
import QuizProvider, { QuizContext } from "./context/QuizContext";

export default function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}
