import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <HeaderBox>
        <Button>Save</Button>
        <Button>Undo</Button>
        <Button>Redo</Button>
        <Button>Export</Button>
        <Button>Import</Button>
        <Button>View</Button>
      </HeaderBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Button = styled.div`
  width: 60px;
  height: 30px;
  background: tomato;
  text-align: center;
  color: white;
  font-weight: bold;
  padding-top: 10px;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 2px;
`;
