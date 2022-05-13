import React from "react";
import styled from "styled-components";

export default function Sidebar() {
  return (
    <Container>
      <DragBox>
        <Iconbox></Iconbox>
        <Textbox>Paragraph</Textbox>
      </DragBox>
      <DragBox>
        <Iconbox></Iconbox>
        <Textbox>Button</Textbox>
      </DragBox>
    </Container>
  );
}
const Container = styled.div`
  width: 135px;
  height: 100vh;
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
