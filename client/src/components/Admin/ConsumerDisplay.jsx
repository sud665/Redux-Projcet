import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function ConsumerDisplay() {
  const DisplayStructure = useSelector((state) => state.config);

  return (
    <Container>
      {DisplayStructure.map((el, idx) => {
        switch (el.component) {
          case "Paragraph":
            return <p key={idx}>{el.component}</p>;
          case "Button":
            return <Button key={idx}>{el.component}</Button>;
        }
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  type: button;
  background: white;
`;
