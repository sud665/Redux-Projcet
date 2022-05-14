import { createSlice } from "@reduxjs/toolkit";

//* 드래그 시작된 항목 변경

let config = createSlice({
  name: "config",
  initialState: [
    {
      id: 0,
      component: "",
      props: {
        text: "버튼텍스트",
        message: "알람메시지",
      },
    },
  ],
  reducers: {
    setConfig(state, action) {},
  },
});

export let { setConfig } = config.actions;

export default config;
