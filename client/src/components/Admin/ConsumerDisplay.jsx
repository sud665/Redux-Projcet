/* eslint-disable*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setClickElement } from "../../store/clickElementSlice";
import { selectConfig } from "../../store/configSlice";

export default function ConsumerDisplay({ setChoiceID }) {
  const DisplayStructure = useSelector(selectConfig);

  const dispatch = useDispatch();

  //* 선택된 요소의 상태 핸들러 함수
  const handleClickElement = (idx, type) => {
    let choiceID = DisplayStructure.findIndex(
      (el) => el.id === DisplayStructure[idx].id
    );
    setChoiceID(choiceID);
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
                {el.props.text}
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
                {el.props.text}
              </Button>
            );
          case "Image":
            return (
              <Image
                key={idx}
                onClick={() => {
                  handleClickElement(idx, el.component);
                }}
              >
                {el.props.text}
              </Image>
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
  background: white;
  cursor: pointer;
`;

const Paragraph = styled.p`
  margin-top: 10px;
  cursor: pointer;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid black;
`;
