import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 500px;
  color: white;
  position: sticky;
  margin-top: 5%;
  margin-left: 40%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 30px;
  gap: 20px;
  padding: 50px 70px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: skyblue;
  padding: 15px 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  margin: 20px 0px;
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <ButtonDiv>
          <Button>New Meeting</Button>
          <Button>Join Meeting</Button>
        </ButtonDiv>
      </Wrapper>
    </Container>
  );
};

export default Home;
