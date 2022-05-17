/* eslint-disable*/
import { createSlice } from "@reduxjs/toolkit";


//* 드래그 시작된 항목 변경
let config = createSlice({
  name: "config",
  initialState: [],
  reducers: {
    addConfig(state, action) {
      if (action.payload === "Button") {
        let newElement = {
          id: Date.now(),
          component: action.payload,
          props: {
            text: "Button",
            message: "",
          },
        };
        return [...state, newElement];
      }
      if (action.payload === "Paragraph") {
        let newElement = {
          id: Date.now(),
          component: action.payload,
          props: {
            text: "Paragraph",
          },
        };
        return [...state, newElement];
      }
    },
    editParagraphConfig(state, action) {
      state[action.payload.id].props.text = action.payload.target;
    },
    editButtonConfig(state, action) {
      state[action.payload.id].props.text = action.payload.target;
    },
    editButtonMSGConfig(state, action) {
      state[action.payload.id].props.message = action.payload.target;
    },
    addImportConfig(state, action) {
      return [...action.payload];
    },
  },
});

export let {
  addConfig,
  editParagraphConfig,
  editButtonConfig,
  editButtonMSGConfig,
  addImportConfig,
} = config.actions;

//* undo 기능 시작
export default config;
