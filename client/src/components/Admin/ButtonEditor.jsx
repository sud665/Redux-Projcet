import React from "react";
import styled from "styled-components";

export default function ButtonEditor() {
  return (
    <>
      <Title>Button Text</Title>
      <Input></Input>
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
