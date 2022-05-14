import { configureStore } from "@reduxjs/toolkit";
import choiceIcon from "./store/choiceIconSlice";
import config from "./store/configSlice";

//* 상태 등록
export default configureStore({
  reducer: {
    choiceIcon: choiceIcon.reducer,
    config: config.reducer,
  },
});
