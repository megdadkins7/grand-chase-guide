import React from 'react'
import styled from 'styled-components'

const StyledStage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 5px;
  padding: 5px;
  .StageNumber {
    padding: 10px;
  }
  .BossType {
    padding: 5px;
  }
  .MaterialFarm {
    padding: 5px;
  }
  .EvoFarm {
    padding: 5px;
  }
  .SUnitFarm {
    padding: 5px;
  }
  .Title {
    font-weight: 500;
  }
  .Info {
    color: #7D7D7D;
  }
`;

function Stage({ stage }) {
  return (
    <StyledStage>
      <div className='StageNumber'>
        <span className='Title'>Stage: </span><span className='Info'>{stage.stage}</span>
      </div>
      <div className='BossType'>
        <span className='Title'>Boss: </span><span className='Info'>{stage.boss}</span>
      </div>
      <div className='MaterialFarm'>
        <span className='Title'>Material: </span><span className='Info'>{stage.mats}</span>
      </div>
      <div className='EvoFarm'>
        <span className='Title'>Evo Stones: </span><span className='Info'>{stage.evos}</span>
      </div>
      <div className='SUnitFarm'>
        <span className='Title'>S Units: </span><span className='Info'>{stage.SUnit}</span>
      </div>
    </StyledStage>
  )
}

export default Stage