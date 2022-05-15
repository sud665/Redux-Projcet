import { createSlice } from "@reduxjs/toolkit";

//* 드래그 시작된 항목 변경

let config = createSlice({
  name: "config",
  initialState: [],
  reducers: {
    addConfig(state, action) {
      let newElement = {
        id: Date.now(),
        component: action.payload,
        props: {
          text: "",
          message: "",
        },
      };
      return [...state, newElement];
    },
    editConfig(state, action) {
      let choiceID = state.findIndex((el) => el.id === action.payload);
      state[choiceID].props.text = "이거선택했어";
    },
  },
});

export let { addConfig, editConfig } = config.actions;

export default config;
