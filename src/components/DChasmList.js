import React from 'react'

//data
import { dualRaid, dChasm } from '../data'

//components
import DChasm from './DChasm'

//styles
import { StyledRaidList } from '../styles/TeamStyle'
import { StyledCurrentRaid } from '../styles/TeamStyle'

function DualRaidList() {
  return (
    <>
      <StyledCurrentRaid>{dualRaid}</StyledCurrentRaid>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <StyledRaidList>
          {dChasm.map((dChasm, i) => (
            <DChasm key={`${dChasm}${i}`} {...dChasm} />
          ))}
        </StyledRaidList>
      </div>
    </>
  )
}

export default DualRaidList