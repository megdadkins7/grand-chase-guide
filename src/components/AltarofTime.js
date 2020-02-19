import React from 'react'
import styled from 'styled-components'

//data
import { altarOfTime } from '../data'

//components
import Altar from './Altar'

const StyledAltarOfTime = styled.div`
  width: 900px;
  margin-top: 50px;
  text-align: center;
`;

function AltarOfTime() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <StyledAltarOfTime>
        {altarOfTime.map(altar => (
          <Altar {...altar} />
        ))}
      </StyledAltarOfTime>
    </div>  
  )
}

export default AltarOfTime