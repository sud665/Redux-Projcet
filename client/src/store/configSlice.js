import { createSlice } from "@reduxjs/toolkit";

//* 드래그 시작된 항목 변경

let config = createSlice({
  name: "config",
  initialState: [
    {
      id: 0,
      component: "",
      props: {
        text: "",
        message: "",
      },
    },
  ],
  reducers: {
    setConfig(state, action) {
      let newElement = {
        id: 1,
        component: action.payload,
        props: {
          text: "",
          message: "",
        },
      };
      return [...state, newElement];
    },
  },
});

export let { setConfig } = config.actions;

export default config;
