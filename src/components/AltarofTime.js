import React from 'react'
import styled from 'styled-components'

//data
import { altarOfTime } from '../data'

//components
import Altar from './Altar'

//styles
import { StyledContainer } from '../styles/TeamStyle'

const StyledAltarOfTime = styled.div`
  width: 900px;
  margin: 10px 0;
  text-align: center;
`;

function AltarOfTime() {
  return (
    <StyledContainer>
      <StyledAltarOfTime>
        {altarOfTime.map((altar, i) => (
          <Altar key={`${altar}${i}`} {...altar} />
        ))}
      </StyledAltarOfTime>
    </StyledContainer>  
  )
}

export default AltarOfTime