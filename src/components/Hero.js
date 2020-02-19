import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  margin: 2px;
  .HeroImageWrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .HeroImage {
    position: relative;
    width: 75px;
    height: 310px;
    overflow: hidden;
  }
  span {
    display: flex;
    justify-content: center;
    color: #4a4a4a;
    text-decoration: none;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 75px;
    height: 310px;
    filter: grayscale(1);
  }
  img:hover {
    filter: unset;
  }
`;

function Hero({ pic, heroColor }) {
  
  const backgroundStyle = {
    backgroundColor: `${heroColor}`
  }

  return (
    <StyledHero>
      <div className='HeroImageWrapper'>
        <div className='HeroImage' style={backgroundStyle}>
          <img src={pic} alt='hero' />
        </div>
      </div>  
    </StyledHero>
  )
}

export default Hero 