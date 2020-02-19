import React from 'react'
import styled from 'styled-components'

const StyledChaser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px;
  box-shadow: inset 0 0 3px 1px #454545;
  .Title {
    margin: 10px;
    color: #ACACAC;
  }
  .ChaserImage {
    height: 60px;
    width: auto;
    border: 1px solid black;
  }
`;

function Chaser({ build }) {
  return (
    <StyledChaser>
        <div className='Title'>CL 05:</div>
        <img className='ChaserImage' src={build.chaser20} />
        <div className='Title'>CL 10:</div>
        <img className='ChaserImage' src={build.chaser20} />
        <div className='Title'>CL 15:</div>
        <img className='ChaserImage' src={build.chaser20} />
        <div className='Title'>CL 20:</div>
        <img className='ChaserImage' src={build.chaser20} />
        <div className='Title'>CL 25:</div>
        <img className='ChaserImage' src={build.chaser20} />
    </StyledChaser>
  )
}

export default Chaser