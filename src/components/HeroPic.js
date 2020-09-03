import React from 'react'
import styled from 'styled-components'

import HeroImage from './HeroImage'

const StyledHeroPic = styled.div`
  margin: 10px;
  .HeroInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .RankPic {
    height: 70px;
    margin: 10px 5px;
  }
  .TypePic {
    height: 50px;
    margin: 10px 5px;
  }
  .Name {
    margin: 10px 5px;
    text-transform: uppercase;
    color: #e8e8e8;
    font-weight: 500;
    font-size: 25px;
  }
  .Fluffy {
    margin: 10px 5px;
    height: 100px;
    width: auto;
  }
  @media (max-width: 550px) {
    .HeroInfo {
      margin-top: 25px;
    }
    .RankPic {
      margin: 5px 2.5px;
    }
    .TypePic {
      margin: 5px 2.5px;
    }
    .Name {
      margin: 5px 2.5px;
    }
    .Fluffy {
      margin: 5px 2.5px;
    }
  }
`

function HeroPic({ build }) {
  const heroColor = build.color
  const boxShadowStyle = {
    boxShadow: `inset 0 0 3px 1px ${heroColor}`,
  }
  return (
    <StyledHeroPic style={boxShadowStyle}>
      <HeroImage build={build} />
      <div className="HeroInfo">
        <img className="RankPic" src={build.rank} alt="SR" />
        <img className="TypePic" src={build.classPic} alt="class" />
        <span className="Name">{build.name}</span>
        <img className="Fluffy" src={build.fluffy} alt="" />
      </div>
    </StyledHeroPic>
  )
}

export default HeroPic
