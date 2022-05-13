import React from "react";
import styled from "styled-components";
import ButtonEditor from "./ButtonEditor";
import ParagraphEditor from "./ParagraphEditor";

export default function Canvas() {
  return (
    <>
      <Container>
        <CanvasBox>
          <TextBox>
            <Text>Mouse:(160,11)</Text>
            <Text>Dragging:</Text>
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
  width: 100%;
  height: 100vh;
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
