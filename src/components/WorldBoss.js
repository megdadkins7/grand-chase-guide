import React from 'react'
import styled from 'styled-components'

//data
import { worldBossTeams } from '../data'

//components
import Team from './Team'

const StyledWorldBoss = styled.div``;

function WorldBoss() {
  return (
    <StyledWorldBoss>
      {worldBossTeams.map(team => (
        <Team {...team} />
      ))}
    </StyledWorldBoss>
  )
}

export default WorldBoss