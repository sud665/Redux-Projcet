import { configureStore } from "@reduxjs/toolkit";
import choiceIcon from "./store/choiceIconSlice";
import config from "./store/configSlice";
import clickElementSlice from "./store/clickElementSlice";
import undoable from "redux-undo";

//* 상태 등록
export default configureStore({
  reducer: {
    choiceIcon: choiceIcon.reducer,
    config: undoable(config),
    clickElementSlice: clickElementSlice.reducer,
  },
});
