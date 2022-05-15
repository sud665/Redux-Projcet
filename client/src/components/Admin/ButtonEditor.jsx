import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function ButtonEditor() {
  const editorElment = useSelector((state) => state.config);

  console.log("이거 맞안?", editorElment);

  return (
    <>
      <Title>Button Text</Title>
      <Input type="text" />
      <Title>Alert Text</Title>
      <Input></Input>
    </>
  );
}
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

const Input = styled.input`
  margin-top: 3px;
  width: 200px;
  height: 20px;
`;
