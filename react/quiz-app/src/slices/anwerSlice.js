import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: {
    answers: [],
  },
  reducers: {
    addAnswer: (state, action) => {
      const { questionId, optionId } = action.payload; // {quistionId, optionId}

      const existingElement = state.answers.find((answer) => {
        return answer.questionId === questionId;
      });

      if (existingElement) {
        // update
        state.answers = state.answers.filter((answer) => {
          if (answer.questionId === questionId) {
            answer.optionId = optionId;
          }
          return true;
        });
      } else {
        // add
        state.answers.push({ questionId, optionId });
      }

      console.log(state);
    },
  },
});

export const answerReducer = answerSlice.reducer;

export const { addAnswer } = answerSlice.actions;
