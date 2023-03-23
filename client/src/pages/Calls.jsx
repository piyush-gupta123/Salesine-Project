import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`

const Heading = styled.h1`
  margin-top: 60px;
  margin-left: 20%;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;

`
const Calls = () => {
  return (
  <Container>
    <Wrapper>
      <Heading>All Calls</Heading>
      <Card/>
    </Wrapper>
  </Container>
)};

export default Calls;
