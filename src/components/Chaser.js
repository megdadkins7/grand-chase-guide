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
  .ChaserWrapper {
    display: grid;
    grid-template-columns: 1fr;
  }
  .Title {
    margin-top: 10px;
    color: #ACACAC;
  }
  .ChaserImage {
    margin: 15px 20px;
    height: 60px;
    width: auto;
    border: 1px solid black;
  }
`;

function Chaser({ build }) {
  return (
    <StyledChaser>
      <div className='ChaserWrapper'>
        <div className='Title'>CL 05:</div>
        <img className='ChaserImage' src={build.chaser05} alt='chaser-skill' />
      </div>
      <div className='ChaserWrapper'>
        <div className='Title'>CL 10:</div>
        <img className='ChaserImage' src={build.chaser10} alt='chaser-skill' />
      </div>
      <div className='ChaserWrapper'>
        <div className='Title'>CL 15:</div>
        <img className='ChaserImage' src={build.chaser15} alt='chaser-skill' />
      </div>
      <div className='ChaserWrapper'>
        <div className='Title'>CL 20:</div>
        <img className='ChaserImage' src={build.chaser20} alt='chaser-skill' />
      </div>
      <div className='ChaserWrapper'>
        <div className='Title'>CL 25:</div>
        <img className='ChaserImage' src={build.chaser25} alt='chaser-skill' />
      </div>
    </StyledChaser>
  )
}

export default Chaser