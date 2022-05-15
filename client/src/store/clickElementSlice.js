import { createSlice } from "@reduxjs/toolkit";

//* 드래그 시작된 항목 변경

let clickElement = createSlice({
  name: "clickElement",
  initialState: "",
  reducers: {
    setClickElement(state, action) {
      return action.payload;
    },
  },
});

export let { setClickElement } = clickElement.actions;

export default clickElement;
