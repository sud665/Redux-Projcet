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
  padding: 10px 10px 10px 10px;
  border-bottom: 1px solid black;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  background: tomato;
  text-align: center;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 2px;
`;
