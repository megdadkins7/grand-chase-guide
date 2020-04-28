import React from 'react'
import styled from 'styled-components'

//assets
import diamond from '../assets/diamond/diamond.png'

const StyledName = styled.div`
  width: 120px;
  font-size: 14px;
  border-radius: 10px;
  margin: 7px 0 7px 7px;
  padding: 5px;
  span {
    margin: 10px;
    color: #E8E8E8;
    text-transform: uppercase;
    font-weight: 500;
  }
  img {
    height: 10px;
    width: 10px;
  }
`;

const StyledProfile = styled.div`{
  .Profile {
    height: auto;
    width: 40px;
    margin: 7px 7px 7px 0;
  }
}`

const StyledListName = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid rgb(18,18,18);
  span:hover {
    color: #fff;
  }
`;

function Name({ name, profilePic }) {
  const backColor = {
    background: `linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(0,0,0,0) 100%)`,
    padding: `15px`
  }
  return (
    <StyledListName>
      <StyledName style={backColor}>
        <img src={diamond} alt='diamond' />
        <span>{name}</span>
      </StyledName>
      <StyledProfile>
        <img className='Profile' src={profilePic} alt='profile' />
      </StyledProfile>
    </StyledListName>  
  )
}

export default Name
