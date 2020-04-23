import React from 'react'
import styled from 'styled-components'

  const StyledStage = styled.div`
  .Wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1.5fr 1fr 1fr;
    margin: 3px;
    padding: 3px;
  }
  .StageNumber {
    padding: 10px;
  }
  .BossType {
    padding: 5px;
  }
  .MaterialFarm {
    padding: 5px;
  }
  .EvoFarm {
    padding: 5px;
  }
  .SUnitFarm {
    padding: 5px;
  }
  .Title {
    color: #ACACAC;
    font-weight: 500;
    text-transform: capitalize;
  }
  .Info {
    color: #7D7D7D;
    text-transform: capitalize;
  }
`;

function Stage({ data, filters }) {

  const getActiveFilterCount = filters => {
    return Object.keys(filters).reduce((total, filterKey) => {
      return filters[filterKey].length > 0 ? total + 1 : total;
    }, 0);
  }

  const getFilteredList = (list, filters) => {
    const activeFilterCount = getActiveFilterCount(filters);

    if(activeFilterCount === 0) {
      return data
    }
    return list.filter(stage => {
      const matchCount = Object.keys(filters).reduce((total, filterKey) => {
        const haveMatch = 
        filters[filterKey].some(r => stage[filterKey] === null ? false : stage[filterKey].includes(r));
        if(haveMatch) {
          return total + 1
        } else {
          return total
        }
      }, 0);
      return matchCount === activeFilterCount
    });
  };

  const visibleStages = getFilteredList(data, filters)
  
  return (
    <StyledStage>
      <ul className='Stages'>
        {
          visibleStages.map(stage => (
            <div key={stage.stage} className='Wrapper'>
              <div className='StageNumber'>
                <span className='Title'>Stage: </span><span className='Info'>{stage.stage}</span>
              </div>
              <div className='BossType'>
                <span className='Title'>Boss: </span><span className='Info'>{stage.boss}</span>
              </div>
              <div className='MaterialFarm'>
                <span className='Title'>Material: </span><span className='Info'>{stage.mats.join(", ")}</span>
              </div>
              <div className='EvoFarm'>
                <span className='Title'>Evo Stones: </span><span className='Info'>{stage.evos}</span>
              </div>
              <div className='SUnitFarm'>
                <span className='Title'>S Units: </span><span className='Info'>{stage.sUnit}</span>
              </div>
            </div>
          ))
        }
      </ul>
    </StyledStage>
  )
}

export default Stage