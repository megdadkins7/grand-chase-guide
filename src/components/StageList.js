import React from 'react'
import styled from 'styled-components'

import Stage from './Stage'
import FilterList from './FilterList'

import { grandChaseData } from '../data'

const StyledStageList = styled.div`
  display: flex;
`;

function StageList() {
  return (
    <StyledStageList>
      <div className='FilterList'>
        <FilterList />
      </div>
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