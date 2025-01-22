import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";

const QuizPage = () => {
  const { quizId } = useParams();

  const quizData = useSelector((state) => state.quiz);

  const [quiz] = quizData.quizes.filter((quiz) => quiz.quizId === quizId);

  return (
    <div>
      <p className="text-4xl text-center font-semibold pt-8">{quiz.title}</p>
      <p className="text-center pb-8">{quiz.description}</p>
      <Divider />
      <div className="p-8 px-36 flex flex-col gap-8">
        {quiz.questions.map((question, index) => {
          return (
            <div className="flex gap-4">
              <span>Q. {index + 1}</span>
              <QuestionCard question={question} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function QuestionCard({ question }) {
  console.log(question);
  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option) => {
        return (
          <div className="flex gap-4">
            <input
              type="radio"
              name={question.questionId}
              id={question.question}
              value={option.answer}
            />
            <label htmlFor={question.question}>{option.answer}</label>
          </div>
        );
      })}
    </div>
  );
}

export default QuizPage;
