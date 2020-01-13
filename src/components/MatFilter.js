import React from 'react'
import styled from 'styled-components'

const StyledMatFilter = styled.div`
  .Info {
    margin: 5px;
    color: #7D7D7D;
  }
  .Block {
    display: block;
    padding: 3px;
  }
`;

function matFilter({ material }) {
  return (
    <StyledMatFilter>
      <div className='MatFilters'>
        <div className='FilterData'>
          <div className='Block'>
            <input type='checkbox' />
            <label className='Info'>{material.mat}</label>
          </div>
        </div>
      </div>
    </StyledMatFilter>
  )
}

export default matFilter