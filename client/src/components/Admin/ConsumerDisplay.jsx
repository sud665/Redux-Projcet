/* eslint-disable*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { editConfig } from "../../store/configSlice";
import { setClickElement } from "../../store/clickElementSlice";

export default function ConsumerDisplay() {
  const DisplayStructure = useSelector((state) => state.config);

  const dispatch = useDispatch();

  //* 선택된 요소의 상태 핸들러 함수
  const handleClickElement = (idx, type) => {
    dispatch(editConfig(DisplayStructure[idx].id));
    dispatch(setClickElement(type));
  };

  return (
    <Container>
      {DisplayStructure.map((el, idx) => {
        switch (el.component) {
          case "Paragraph":
            return (
              <Paragraph
                key={idx}
                onClick={() => {
                  handleClickElement(idx, el.component);
                }}
              >
                {el.component}
              </Paragraph>
            );
          case "Button":
            return (
              <Button
                key={idx}
                onClick={() => {
                  handleClickElement(idx, el.component);
                }}
              >
                {el.component}
              </Button>
            );
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
  margin-top: 10px;
  type: button;
  background: white;
  cursor: pointer;
`;

const Paragraph = styled.p`
  margin-top: 10px;
  cursor: pointer;
`;
