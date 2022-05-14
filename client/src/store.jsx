import { configureStore, createSlice } from "@reduxjs/toolkit";
import choiceIcon from "./store/choiceIconSlice";

//*선택된 요소
// let choiceIcon = createSlice({
//   name: "choiceIcon",
//   initialState: "",
//   reducers: {
//     setChoiceIcon(state, action) {
//       return action.payload;
//     },
//   },
// });

//* 변경함수 추출


//* config 요소
let config = createSlice({
  name: "config",
  initialState: {
    id: "0129",
    component: "선택한 아이콘",
    props: {
      text: "버튼텍스트",
      message: "알람메시지",
    },
  },
});

// 상태 등록
export default configureStore({
  reducer: {
    choiceIcon: choiceIcon.reducer,
    config: config.reducer,
  },
});
