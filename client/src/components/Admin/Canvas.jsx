import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ButtonEditor from "./ButtonEditor";
import ParagraphEditor from "./ParagraphEditor";

export default function Canvas() {
  //* 마우스 상태 변경 함수
  const [mousePosition, setMousePostion] = useState({ x: 0, y: 0 });

  //* 선택한 기능 상태 변경
  let choiceIcon = useSelector((state) => state.choiceIcon);
  console.log(choiceIcon);

  //* 마우스 위치 확인
  const setMousePosition = (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = parseInt(e.clientX - rect.left);
    let y = Math.floor(e.clientY - rect.top);
    if (x < 0 || y < 0) {
      x = 0;
      y = 0;
    }
    setMousePostion({ x, y });
  };

  return (
    <>
      <Container>
        <CanvasBox
          onMouseMove={setMousePosition}
          onMouseLeave={setMousePosition}
        >
          <TextBox>
            <Text>
              Mouse:({mousePosition.x}, {mousePosition.y})
            </Text>
            <Text>Dragging:{choiceIcon}</Text>
            <Text>Instances:</Text>
            <Text>Config:{}</Text>
          </TextBox>
        </CanvasBox>
        <EditorBox>
          <ButtonEditor />
          <ParagraphEditor />
        </EditorBox>
      </Container>
    </>
  );
}
const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;: ;
  display: flex;
  flex-direction: column;
`;

const CanvasBox = styled.div`
  height: 75%;
  border-bottom: 1px solid black;
  background: #eee;
`;

const TextBox = styled.div`
  margin-top: 30px;
  margin-left: 10px;
`;

const Text = styled.div`
  margin-bottom: 15px;
`;

const EditorBox = styled.div`
  height: 25%;
  padding: 10px 10px;
`;
