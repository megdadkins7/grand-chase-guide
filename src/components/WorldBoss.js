import React from 'react'
import styled from 'styled-components'

//data
import { worldBossTeams } from '../data'

//components
import Team from './Team'

const StyledWorldBoss = styled.div`
  width: 900px;
  margin-top: 100px;
  text-align: center;
`;

function WorldBoss() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <StyledWorldBoss>
        {worldBossTeams.map(team => (
          <Team {...team} />
        ))}
      </StyledWorldBoss>
    </div>
  )
}

export default WorldBoss

//box-shadow: 0 0 3px 1px #30D2FF;