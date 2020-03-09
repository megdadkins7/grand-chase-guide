import React from 'react'

//data
import { currentRaid, raidTeam } from '../data'

//components
import Raid from './Raid'

//styles
import { StyledRaidList } from '../styles/TeamStyle'
import { StyledCurrentRaid } from '../styles/TeamStyle'

function RaidList() {
  return (
    <>
      <div style={{marginTop: '20px'}}>
      <StyledCurrentRaid>{currentRaid}</StyledCurrentRaid>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <StyledRaidList>
          {raidTeam.map((raid, i) => (
            <Raid key={`${raid}${i}`} {...raid} />
          ))}
        </StyledRaidList>
      </div>
      </div>
    </>
  )
}

export default RaidList