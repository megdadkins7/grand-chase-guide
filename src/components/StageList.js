import React from 'react'
import styled from 'styled-components'

import Stage from './Stage'

import { grandChaseData } from '../data'

const StyledStageList = styled.div``;

function StageList() {
  return (
    <StyledStageList>
      <ul>
        { 
          grandChaseData.map((stage, i) => (
              <Stage
                stage={stage}
                key={`${stage.stage}${i}`}
              />
            )
          ) 
        }
      </ul>
    </StyledStageList>
  )
}

export default StageList