import { createSlice } from "@reduxjs/toolkit";

//* 드래그 시작된 항목 변경
let configSlice = createSlice({
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
      if (action.payload === "Image") {
        let newElement = {
          id: Date.now(),
          component: action.payload,
          props: {
            Blob: "",
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
    editImageConfig(state, action) {
      state[action.payload.id].props.Blob = action.payload.target;
    },
    addImportConfig(state, action) {
      return [...action.payload];
    },
  },
});

export const {
  addConfig,
  editParagraphConfig,
  editButtonConfig,
  editButtonMSGConfig,
  addImportConfig,
  editImageConfig,
} = configSlice.actions;

export const selectConfig = (state) => state.config.present;
export const pastConfig = (state) => state.config.past;
export const futureConfig = (state) => state.config.future;

export default configSlice.reducer;
