import React from 'react'
import styled from 'styled-components'

import { heroBuilds } from '../data'

const StyledHeroBuild = styled.div`
  .HeroChaser span{
    display: block;
  }
`;

function HeroBuild() {
  return (
    <StyledHeroBuild>
      <div className='HeroName'>
        <span>{heroBuilds.Elesis.name}</span>
      </div>
      <div className='HeroType'>
        <span>{heroBuilds.Elesis.type}</span>
      </div>
      <div className='HeroSet'>
        <span>{heroBuilds.Elesis.set}</span>
      </div>
      <div className='HeroLB'>
        <span>{heroBuilds.Elesis.limitBreak}</span>
      </div>
      <div className='HeroAccessories'>
        <span>{heroBuilds.Elesis.accessories}</span>
      </div>
      <div className='HeroTraits'>
        <span>{heroBuilds.Elesis.traits}</span>
      </div>
      <div className='HeroSockets'>
        <span>{heroBuilds.Elesis.sockets}</span>
      </div>
      <div className='HeroChaser'>
        <span>CL05: {heroBuilds.Elesis.chaser05}</span>
        <span>CL10: {heroBuilds.Elesis.chaser10}</span>
        <span>CL15: {heroBuilds.Elesis.chaser15}</span>
        <span>CL20: {heroBuilds.Elesis.chaser20}</span>
        <span>CL25: {heroBuilds.Elesis.chaser25}</span>
      </div>
    </StyledHeroBuild>
  )
}

export default HeroBuild