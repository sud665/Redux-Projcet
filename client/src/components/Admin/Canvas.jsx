import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ButtonEditor from "./ButtonEditor";
import ParagraphEditor from "./ParagraphEditor";
import ConsumerDisplay from "./ConsumerDisplay";
import { addConfig, selectConfig } from "../../store/configSlice";

export default function Canvas() {
  const dispatch = useDispatch();

  //* 마우스 상태 변경 함수
  const [mousePosition, setMousePostion] = useState({ x: 0, y: 0 });

  //* 선택한 요소의 아이디 값 상태끌어올리기
  const [choiceID, setChoiceID] = useState(null);

  //* 스토어에서 전역상태 값 가져오기
  const choiceElement = useSelector((state) => state);

  const canvasElement = useSelector(selectConfig);

  //* 마우스 위치 확인
  const setMousePosition = (e) => {
    let pointer = e.target.getBoundingClientRect();
    let x = parseInt(e.clientX - pointer.left);
    let y = parseInt(e.clientY - pointer.top);
    if (x <= 0 || y <= 0) {
      x = 0;
      y = 0;
    }
    setMousePostion({ x, y });
  };

  //* 드롭다운시 요소 핸들러 함수
  const handleDropDown = (e) => {
    e.preventDefault();
    handleChangeElement();
  };

  //* 드롭다운후 캔버스에 요소 추가
  const handleChangeElement = () => {
    dispatch(addConfig(choiceElement.choiceIcon));
  };

  return (
    <Container>
      <CanvasBox
        onMouseMove={setMousePosition}
        onMouseLeave={setMousePosition}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={handleDropDown}
      >
        <DisplayBox>
          <ConsumerDisplay setChoiceID={setChoiceID} />
        </DisplayBox>
        <TextBox>
          <Text>
            Mouse:({mousePosition.x}, {mousePosition.y})
          </Text>
          <Text>Dragging: {choiceElement.choiceIcon}</Text>
          <Text>Instances: {canvasElement.length}</Text>
          <Text>Config: {JSON.stringify(canvasElement[choiceID])}</Text>
        </TextBox>
      </CanvasBox>
      <EditorBox>
        {choiceElement.clickElementSlice === "Button" && (
          <ButtonEditor choiceID={choiceID} />
        )}
        {choiceElement.clickElementSlice === "Paragraph" && (
          <ParagraphEditor choiceID={choiceID} />
        )}
      </EditorBox>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CanvasBox = styled.div`
  height: 75%;
  border-bottom: 1px solid black;
  background: #eee;
  position: relative;
`;

const TextBox = styled.div`
  position: absolute;
  margin-top: 30px;
  margin-left: 10px;
  z-index: 1;
`;

const Text = styled.div`
  margin-bottom: 15px;
`;

const EditorBox = styled.div`
  height: 25%;
  padding: 10px 10px;
`;

const DisplayBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  align-items: center;
  margin-top: 20px;
`;
