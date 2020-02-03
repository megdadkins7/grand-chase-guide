import React from 'react'
import styled from 'styled-components'

//components
import Stage from './Stage'
import FilterList from './FilterList'

const StyledStageList = styled.div`
  display: flex;
`;

function StageList({data, filters, onFiltersChange}) {
  const filteredData = data.filter(stage => {
    if (filters.evos.length > 0) {
      return filters.evos.includes(stage.evos)
    }
    return stage
  })
  return (
    <StyledStageList>
      <div className='FilterList'>
        <FilterList data={data} filters={filters} onFiltersChange={onFiltersChange} />
      </div>
      <ul>
        { 
          filteredData.map((stage, i) => (
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