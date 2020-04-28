import React from 'react'
import styled from 'styled-components'

//data
import { worldBossTeams } from '../data'

//components
import Team from './Team'

//styles
import { StyledContainer } from '../styles/TeamStyle'

const StyledWorldBoss = styled.div`
  margin-top: 60px;
  width: 900px;
  text-align: center;
`;

function WorldBoss() {
  return (
    <StyledContainer>
      <StyledWorldBoss>
        {worldBossTeams.map((team, i) => (
          <Team key={`${team}${i}`} {...team} />
        ))}
      </StyledWorldBoss>
    </StyledContainer>
  )
}

export default WorldBoss

//box-shadow: 0 0 3px 1px #30D2FF;