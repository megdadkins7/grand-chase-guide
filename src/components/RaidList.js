import React from 'react'
import styled from 'styled-components'

//data
import { currentRaid, raidTeam } from '../data'

//components
import Raid from './Raid'

const StyledRaidList = styled.div`
  max-width: 100%;
  text-align: center;
`;

const StyledCurrentRaid = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: #ACACAC;
  font-weight: 500;
  font-size: 25px;
`;

function RaidList() {
  return (
    <>
      <div style={{marginTop: '40px'}}>
      <StyledCurrentRaid>{currentRaid}</StyledCurrentRaid>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <StyledRaidList>
          {raidTeam.map(raid => (
            <Raid {...raid} />
          ))}
        </StyledRaidList>
      </div>
      </div>
    </>
  )
}

export default RaidList