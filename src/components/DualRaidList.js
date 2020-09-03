import React from 'react'

//data
import { dualTeams } from '../data'

//components
import DualRaid from './DualRaid'

//styles
import { StyledRaidList } from '../styles/TeamStyle'

function DualRaidList() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      <StyledRaidList>
        {dualTeams.map((dualRaid, i) => (
          <DualRaid key={`${dualRaid}${i}`} {...dualRaid} />
        ))}
      </StyledRaidList>
    </div>
  )
}

export default DualRaidList
