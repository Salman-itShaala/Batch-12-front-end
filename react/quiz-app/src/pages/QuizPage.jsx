import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";

const QuizPage = () => {
  const { quizId } = useParams();

  const quizData = useSelector((state) => state.quiz);

  const [quiz] = quizData.quizes.filter((quiz) => quiz.quizId === quizId);

  const [answers, setAnswers] = useState([]); // [{questionId , answerId}]

  function handleSubmit() {
    let marks = 0;

    let finalArray = [];

    for (let i = 0; i < answers.length; i++) {
      // answers[i].questionId --> questionId
      const newArray = quiz.questions.filter((q) => {
        if (
          q.questionId === answers[i].questionId &&
          q.correctAnswer === answers[i].optionId
        ) {
          marks++;
          return true;
        }
      });

      finalArray = [...finalArray, ...newArray];
    }

    // marks = updated marks
    console.log(marks, finalArray);
  }

  return (
    <div>
      <p className="text-4xl text-center font-semibold pt-8">{quiz.title}</p>
      <p className="text-center pb-8">{quiz.description}</p>
      <Divider />
      <div className="p-8 px-36 flex flex-col gap-8">
        {quiz.questions.map((question, index) => {
          return (
            <div className="flex gap-4" key={question.questionId}>
              <span>Q. {index + 1}</span>
              <QuestionCard question={question} setAnswers={setAnswers} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center py-8">
        <Button
          variant="outlined"
          color="success"
          className="w-36"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

function QuestionCard({ question, setAnswers }) {
  function handleOptionChange(e) {
    setAnswers((prev) => {
      // questionId, optionId

      const existingElement = prev.find((answer) => {
        return answer.questionId === question.questionId;
      });

      if (existingElement) {
        // update
        const newArray = prev.filter((answer) => {
          if (answer.questionId === question.questionId) {
            answer.optionId = e.target.value;
          }

          return true;
        });

        return newArray;
      } else {
        // directly add
        return [
          ...prev,
          {
            questionId: question.questionId,
            optionId: e.target.value,
          },
        ];
      }
    });
  }

  return (
    <div>
      <p>{question.question}</p>
      {question.options.map((option) => {
        return (
          <div className="flex gap-4" key={option.optionId}>
            <input
              type="radio"
              name={question.questionId}
              id={question.question}
              value={option.optionId}
              onChange={(e) => handleOptionChange(e)}
            />
            <label htmlFor={question.question}>{option.answer}</label>
          </div>
        );
      })}
    </div>
  );
}

export default QuizPage;
