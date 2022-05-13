import React from "react";
import styled from "styled-components";
import Header from "../components/Admin/Header";
import Sidebar from "../components/Admin/Sidebar";
import Canvas from "../components/Admin/Canvas";

export default function Adminpage() {
  return (
    <Container>
      <Header />
      <MiddleBox>
        <Sidebar />
        <Canvas />
      </MiddleBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const MiddleBox = styled.div`
  display: float;
`;
