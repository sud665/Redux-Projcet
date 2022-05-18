import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setChoiceIcon } from "../../store/choiceIconSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faParagraph, faSquare } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <Container>
      <DragBox
        draggable={true}
        onDragStart={() => {
          dispatch(setChoiceIcon("Paragraph"));
        }}
        onDragEnd={() => {
          dispatch(setChoiceIcon(""));
        }}
      >
        <Iconbox>
          <FontAwesomeIcon icon={faParagraph} />
        </Iconbox>
        <Textbox>Paragraph</Textbox>
      </DragBox>
      <DragBox
        draggable={true}
        onDragStart={() => {
          dispatch(setChoiceIcon("Button"));
        }}
        onDragEnd={() => {
          dispatch(setChoiceIcon(""));
        }}
      >
        <Iconbox>
          <FontAwesomeIcon icon={faSquare} />
        </Iconbox>
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
  text-align: center;
  align-items: center;
  cursor: grab;
  padding: 10px 0 10px;
  justify-content: center;
  &:hover {
    background-color: rgb(200, 200, 200);
  }
`;

const Iconbox = styled.div`
  width: 50px;
  height: 50px;
  /* border: 2px solid black; */
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

const Textbox = styled.div`
  margin-top: 5px;
  font-weight: 500;
`;
