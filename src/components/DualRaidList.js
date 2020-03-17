import React from 'react'

//data
import { dualRaid, dualTeams } from '../data'

//components
import DualRaid from './DualRaid'

//styles
import { StyledRaidList } from '../styles/TeamStyle'
import { StyledCurrentRaid } from '../styles/TeamStyle'

function DualRaidList() {
  return (
    <>
      <StyledCurrentRaid>{dualRaid}</StyledCurrentRaid>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <StyledRaidList>
          {dualTeams.map((dualRaid, i) => (
            <DualRaid key={`${dualRaid}${i}`} {...dualRaid} />
          ))}
        </StyledRaidList>
      </div>
    </>
  )
}

export default DualRaidList