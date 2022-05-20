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
          case "Image":
            return (
              <ImageBox
                key={idx}
                onClick={() => {
                  alert("관리자만 변경 가능합니다.");
                }}
              >
                <Img src={el.props.Blob} alt="이미지를 입력해주세요" />
              </ImageBox>
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

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
