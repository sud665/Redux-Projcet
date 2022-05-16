import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function ConsumerView() {
  const consumerElement = useSelector((state) => state.config);

  return <Container></Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: tomato;
`;
