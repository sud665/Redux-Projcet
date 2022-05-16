import React from "react";
import styled from "styled-components";
import Consumerview from "../components/Consumer/ConsumerView";

export default function Consumerpage() {
  return (
    <Container>
      <Consumerview></Consumerview>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: tomato;
`;
