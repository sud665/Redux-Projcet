import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setChoiceIcon } from "../../store/choiceIconSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  //* 드래그 시작시 선택한 요소 Dragging 변경
  const handleDragStart = (e) => {
    dispatch(setChoiceIcon(e));
  };

  return (
    <Container>
      <DragBox
        draggable={true}
        //드래그
        onDragStart={() => handleDragStart("Paragraph")}
        onDragEnd={() => {
          dispatch(setChoiceIcon(""));
        }}
      >
        <Iconbox></Iconbox>
        <Textbox>Paragraph</Textbox>
      </DragBox>
      <DragBox
        draggable={true}
        onDragStart={() => handleDragStart("Button")}
        onDragEnd={() => {
          dispatch(setChoiceIcon(""));
        }}
      >
        <Iconbox></Iconbox>
        <Textbox>Button</Textbox>
      </DragBox>
    </Container>
  );
}
const Container = styled.div`
  box-sizing: border-box;
  width: 135px;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DragBox = styled.div`
  width: 100%;
  height: 90px;
  /* background: tomato; */
  text-align: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 0 10px;
  justify-content: center;
  &:hover {
    background-color: rgb(200, 200, 200);
  }
`;

const Iconbox = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid black;
  margin: auto;
`;

const Textbox = styled.div`
  margin-top: 5px;
  font-weight: 500;
`;
