import React from 'react'
import styled from 'styled-components'

//data
import { dualRaid, dualTeams } from '../data'

//components
import DualRaid from './DualRaid'

const StyledDualRaidList = styled.div`
  max-width: 100%;
  text-align: center;
`;

const StyledRankRaid = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: #ACACAC;
  font-weight: 500;
  font-size: 25px;
`;

function DualRaidList() {
  return (
    <>
      <div style={{marginTop: '40px'}}>
      <StyledRankRaid>{dualRaid}</StyledRankRaid>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <StyledDualRaidList>
          {dualTeams.map(dualRaid => (
            <DualRaid {...dualRaid} />
          ))}
        </StyledDualRaidList>
      </div>
      </div>
    </>
  )
}

export default DualRaidList