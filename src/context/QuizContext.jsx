import { useState } from "react";
import { createContext } from "react";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [value, setValue] = useState("foo");
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
export default QuizProvider;
