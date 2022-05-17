/* eslint-disable*/
import React from "react";
import styled from "styled-components";


export default function ConsumerView() {
  //* 로컬스토리지에서 데이터 가져오기
  const consumerElement = JSON.parse(localStorage.getItem("data"));

  //* 알림메시지 핸들러 함수

  return (
    <Container>
      {consumerElement.map((el, idx) => {
        switch (el.component) {
          case "Paragraph":
            return (
              <Paragraph
                key={idx}
                onClick={() => {
                  alert("관리자만 변경 가능합니다.");
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
                  alert(el.props.message);
                }}
              >
                {el.props.text}
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
  cursor: not-allowed;
`;
