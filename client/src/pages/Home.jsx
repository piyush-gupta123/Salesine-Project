import React from 'react'
import styled from "styled-components";
import Navbar from '../Components/Navbar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`



const Home = () => {
  return (
    <Container>
        <Navbar></Navbar>
        
    </Container>
  )
}

export default Home