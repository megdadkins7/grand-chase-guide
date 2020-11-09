import React, { useState } from 'react'
import styled from 'styled-components'

//data
import { grandChaseData } from '../data'

//components
import Stage from './Stage'
import FilterList from './FilterList'

const StyledStageList = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  margin: 20px 10px;
  @media (max-width: 1050px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 5px;
  }
`

function StageList() {
  const [activeFilters, setActiveFilters] = useState({
    evos: [],
    boss: [],
    sUnit: [],
    mats: [],
  })

  const handleOnFiltersChange = partialFilters => {
    setActiveFilters(state => ({
      ...state,
      ...partialFilters,
    }))
  }

  return (
    <StyledStageList>
      <div className="FilterList">
        <FilterList onFiltersChange={handleOnFiltersChange} />
      </div>
      <div
        className="StageList"
        style={{ boxShadow: 'inset 0 0 3px 1px #454545' }}
      >
        <Stage data={grandChaseData} filters={activeFilters} />
      </div>
    </StyledStageList>
  )
}

export default StageList
