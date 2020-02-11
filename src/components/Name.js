import React from 'react'
import styled from 'styled-components'

const StyledName = styled.div`
  width: 100px;
  border-radius: 10px;
  margin: 7px;
  padding: 5px;
  text-align: center;
  span {
    color: #FFF;
    text-transform: uppercase;
  }
`;

function Name({ name, heroColor }) {
  const backColor = {
    background: `linear-gradient(90deg, rgba(33,33,33,1) 0%, ${heroColor} 50%, rgba(33,33,1) 100%)`
  }
  return (
    <div>
      <StyledName style={backColor}>
          <span>{name}</span>
      </StyledName>
    </div>  
  )
}

export default Name
