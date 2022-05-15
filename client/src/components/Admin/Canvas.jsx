import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ButtonEditor from "./ButtonEditor";
import ParagraphEditor from "./ParagraphEditor";
import ConsumerDisplay from "./ConsumerDisplay";
import { setConfig } from "../../store/configSlice";

export default function Canvas() {
  //* 마우스 상태 변경 함수
  const [mousePosition, setMousePostion] = useState({ x: 0, y: 0 });

  //* 선택한 기능 상태 변경
  const choiceElement = useSelector((state) => state);

  const dispatch = useDispatch();

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

  //* 드롭다운시 요소 선택
  const handleDropDown = (e) => {
    e.preventDefault();
    handleChangeElement();
  };

  //* 드롭다운후 캔버스에 요소 추가
  const handleChangeElement = () => {
    dispatch(setConfig(choiceElement.choiceIcon));
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
          <ConsumerDisplay />
        </DisplayBox>
        <TextBox>
          <Text>
            Mouse:({mousePosition.x}, {mousePosition.y})
          </Text>
          <Text>Dragging: {choiceElement.choiceIcon}</Text>
          <Text>Instances: {}</Text>
          <Text>Config:{}</Text>
        </TextBox>
      </CanvasBox>
      <EditorBox>
        <ButtonEditor />
        <ParagraphEditor />
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
  z-index: 999;
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
  z-index: 1;
  align-items: center;
  margin-top: 20px;
`;
