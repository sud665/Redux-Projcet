import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Mainpage() {
  let navigate = useNavigate();

  return (
    <Container>
      <TitleBox>
        <Title>Welcome to Fasdeil</Title>
      </TitleBox>
      <ChoiceBox>
        <ChoiceAdminPage
          onClick={() => {
            navigate("/admin");
          }}
        >
          <p>Admin</p>
        </ChoiceAdminPage>
        <ChoiceConsumerPage
          onClick={() => {
            navigate("/consumer");
          }}
        >
          <p>Consumer</p>
        </ChoiceConsumerPage>
      </ChoiceBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  margin-top: 80px;
`;

const Title = styled.h1``;

const ChoiceBox = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChoiceAdminPage = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid red;
  text-align: center;
  font-weight: 500;
  background: none;
  border: 1px solid tomato;
  color: tomato;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  &:hover {
    color: white;
    background: tomato;
    transition: 0.3s;
  }
`;

const ChoiceConsumerPage = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid red;
  text-align: center;
  font-weight: 500;
  background: none;
  border: 1px solid #189cc4;
  color: #189cc4;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  &:hover {
    color: white;
    background: #189cc4;
    transition: 0.3s;
  }
`;
