import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  .HeroImage {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  span {
    display: flex;
    justify-content: center;
    padding: 15px;
    color: #4a4a4a;
    text-decoration: none;
  }
  img {
    height: 200px;
    width: auto;
  }
`;

function Hero({ name, pic }) {
  return (
    <StyledHero>
      <div className='HeroImage'>
        <img src={pic} alt='' />
        <span>{name}</span>
      </div>  
    </StyledHero>
  )
}

export default Hero 