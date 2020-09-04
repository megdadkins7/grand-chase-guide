import React from 'react'
import styled from 'styled-components'

const StyledChaser = styled.div`
  text-align: center;
  margin: 10px;
  padding: 10px;
  box-shadow: inset 0 0 3px 1px #454545;
  .ChaserHeader {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    color: #acacac;
    margin: 10px;
  }
  .ChaserWrapper {
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .ChaserImage {
    margin: 15px 20px;
    height: 60px;
    width: auto;
    border: 1px solid black;
    margin: 10px 40px 0 40px;
  }
`

function Chaser({ build }) {
  return (
    <StyledChaser>
      <div className="ChaserHeader">Chaser Skills</div>
      <div className="ChaserWrapper">
        <img className="ChaserImage" src={build.chaser05} alt="" />
        <img className="ChaserImage" src={build.chaser10} alt="" />
        <img className="ChaserImage" src={build.chaser15} alt="" />
        <img className="ChaserImage" src={build.chaser20} alt="" />
        <img className="ChaserImage" src={build.chaser25} alt="" />
      </div>
    </StyledChaser>
  )
}

export default Chaser
