import React, {useState} from 'react'
import styled from 'styled-components'

//data
import { grandChaseData } from '../data'

//components
import Stage from './Stage'
import FilterList from './FilterList'

const StyledStageList = styled.div`
  display: flex;
`;

function StageList() {
  const [activeFilters, setActiveFilters] = useState({
    evos: [],
    boss: [],
    sUnit: [],
    mats: []
  })

  const handleOnFiltersChange = partialFilters => {
    setActiveFilters(state => ({
      ...state,
      ...partialFilters
    }));
  };

  return (
    <StyledStageList>
      <div className='FilterList'>
        <FilterList onFiltersChange={handleOnFiltersChange} />
      </div>
      <div className='StageList'>
        <Stage data={grandChaseData} filters={activeFilters} />
      </div>
    </StyledStageList>
  )
}

export default StageList