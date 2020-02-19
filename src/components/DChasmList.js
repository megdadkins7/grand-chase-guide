import React from 'react'
import styled from 'styled-components'

//data
import { dualRaid, dChasm } from '../data'

//components
import DChasm from './DChasm'

const StyledDChasmList = styled.div`
  max-width: 100%;
  text-align: center;
`;

const StyledRankDChasm = styled.div`
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
      <StyledRankDChasm>{dualRaid}</StyledRankDChasm>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <StyledDChasmList>
          {dChasm.map(dChasm => (
            <DChasm {...dChasm} />
          ))}
        </StyledDChasmList>
      </div>
      </div>
    </>
  )
}

export default DualRaidList