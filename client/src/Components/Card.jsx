import React from 'react'
import styled from 'styled-components'
import VideocamIcon from '@mui/icons-material/Videocam';

const Container = styled.div`
    display: flex;
`

const Wrapper = styled.div`
    padding: 10px 10px;
    margin-left: 20%;
`

const Card = () => {
  return (
    <Container>
        <Wrapper>
            <VideocamIcon style={{color: 'blue', border:"1px solid lightgray", padding: "10px" }}/>
            CARD
        </Wrapper>
    </Container>
  )
}

export default Card