import React from 'react'

//data
import { currentRaid, raidTeam } from '../data'

//components
import Raid from './Raid'

//styles
import { StyledRaidList, StyledCurrentRaid, StyledContainer } from '../styles/TeamStyle'

function RaidList() {
  return (
    <>
      <div style={{marginTop: '20px'}}>
      <StyledCurrentRaid>{currentRaid}</StyledCurrentRaid>
      <StyledContainer>
        <StyledRaidList>
          {raidTeam.map((raid, i) => (
            <Raid key={`${raid}${i}`} {...raid} />
          ))}
        </StyledRaidList>
      </StyledContainer>
      </div>
    </>
  )
}

export default RaidList