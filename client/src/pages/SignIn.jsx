import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

const Container = styled.div`
  display: flex;
  margin-top: 5%;
  margin-left: 10%;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 30px;
  padding: 50px 70px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: black;
  margin-bottom: 30px;
`;

const Input = styled.input`
  border: 0.5px solid gray;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  margin: 5px 0px;
  width: 100%;
  color: black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 12px 20px;
  font-weight: 400;
  background-color: skyblue;
  color: black;
  cursor: pointer;
`;


const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios
        .post(
          "http://localhost:5000/auth/login",
          {
            name: name,
            password: password,
          },
        )
        .catch((err) => console.log(err));
      console.log(res);
      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginFailure());
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <SubTitle>To Contine WeMeet</SubTitle>
        <Input
          placeholder="UserName"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
