import { configureStore } from "@reduxjs/toolkit";
import choiceIcon from "./store/choiceIconSlice";
import config from "./store/configSlice";
import clickElementSlice from "./store/clickElementSlice";

//* 상태 등록
export default configureStore({
  reducer: {
    choiceIcon: choiceIcon.reducer,
    config: config.reducer,
    clickElementSlice: clickElementSlice.reducer,
  },
});
