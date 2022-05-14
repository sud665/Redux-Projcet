import { createSlice } from "@reduxjs/toolkit";

//* 드래그 시작

let choiceIcon = createSlice({
  name: "choiceIcon",
  initialState: "",
  reducers: {
    setChoiceIcon(state, action) {
      return action.payload;
    },
  },
});

export let { setChoiceIcon } = choiceIcon.actions;

export default choiceIcon;
