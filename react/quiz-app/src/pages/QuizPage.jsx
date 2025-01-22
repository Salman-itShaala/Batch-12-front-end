import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { quizId } = useParams();

  const quizData = useSelector((state) => state.quiz);

  const [quiz] = quizData.quizes.filter((quiz) => quiz.quizId === quizId);

  return (
    <div>
      <p className="text-4xl">{quiz.category}</p>
    </div>
  );
};

export default QuizPage;
