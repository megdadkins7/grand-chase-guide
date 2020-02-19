import React from 'react'
import styled from 'styled-components'

const StyledHeroPic = styled.div`
  margin: 10px;
  .Hero {
    margin: 20px 20px 0 20px;
    height: 450px;
    width: auto;
  }
  .HeroInfo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .RankPic {
    height: 70px;
    margin: 30px 5px;
  }
  .TypePic {
    height: 50px;
    margin: 30px 5px;
  }
  .Name {
    margin: 30px 5px; 
    text-transform: uppercase;
    color: #e8e8e8
    font-weight: 500;
    font-size: 25px;
  }
`

function HeroPic({ build }) {
  const heroColor = build.color;
  const boxShadowStyle = {
    boxShadow: `inset 0 0 3px 1px ${heroColor}`,
  }
  return (
    <StyledHeroPic style={boxShadowStyle}>
      <img className='Hero' src={build.pic} alt='' />
      <div className='HeroInfo'>
        <img className='RankPic' src={build.rank} alt='SR' />
        <img className='TypePic' src={build.classPic} alt='class' />
        <span className='Name'>{build.name}</span>
      </div>
    </StyledHeroPic> 
  )
}

export default HeroPic