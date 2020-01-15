import React from 'react'
import styled from 'styled-components'

const StyledMatFilter = styled.div`
  .Block {
    display: block;
    padding: 3px;
  }
  .Info {
    margin: 5px;
    color: #7D7D7D;
  }
`;

function matFilter({ material }) {
  return (
    <StyledMatFilter>
      <div className='Block'>
        <input type='checkbox' />
        <label className='Info'>{material.mat}</label>
      </div>
    </StyledMatFilter>
  )
}

export default matFilter