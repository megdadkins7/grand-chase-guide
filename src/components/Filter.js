import React from 'react'
import styled from 'styled-components'

const StyledFilter = styled.div`
  .Block {
    display: block;
    padding: 3px;
  }  
  .Info {
    margin: 5px;
    color: #7D7D7D;
  }
`;

function Filter({ type }) {
  return (
    <StyledFilter>
      <div className='Block'>
        <input type='checkbox' />
        <label className='Info'>{type.type}</label>
      </div>
    </StyledFilter>
  )
}

export default Filter