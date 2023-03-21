import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  align-items: left;
  background-color: #0047ab;
  height: 65px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-left: 1%;
  margin-right: 1%;
  cursor: pointer;
  &:hover: {
    background-color: light-gray;
  }
`;

const Search = styled.div`
  width: 15%;
  padding: 5px;
  position: absolute;
  left: 60%;
  right: 15%;
  margin: auto;
  display: flex;
  aign-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  color: white;
  align-items: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-left: 55%;
`;
const Button = styled.button`
  display: flex;
  align-items: flex-end;
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Home</Heading>
        <Heading>Calls</Heading>
        <Heading>Deals</Heading>
        <Heading>Teams</Heading>
        <Heading>Activity</Heading>
        <Heading>Library</Heading>
        <Search>
          <Input placeholder="Search" />
        </Search>
        <ButtonDiv>
          <Button>Sign Up</Button>
          <Button>Login</Button>
        </ButtonDiv>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
