export default function QuestionBox({ data, computeAnswer, correctAnswer }) {
  return (
    <div className="container mx-auto bg-slate-500 rounded-xl ">
      {data.questions.map(({ question, answers, correct, quetionId }) => {
        return (
          <div className="container mx-auto m-4 rounded-xl p-4" key={quetionId}>
            <h2 className="flex justify-center text-2xl my-6 text-white uppercase">
              {question}
            </h2>
            <div className="flex flex-col">
              {answers.map((item, index) => {
                return (
                  <button
                    onClick={() => computeAnswer(item, correct, index)}
                    className={`${
                      correctAnswer && item == correct
                        ? "bg-green-400 m-2 rounded-lg text-white"
                        : "bg-slate-50 m-2 rounded-lg "
                    }`}
                    key={item}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
