import React from 'react'
import styled from 'styled-components'

import { heroBuilds } from '../data'

const StyledHeroBuild = styled.div`
  .Title {
    font-weight: 500;
  }
  .Info {
    color: #7D7D7D;
    padding-left: 5px;
  }
`;

function HeroBuild() {
  return (
    <StyledHeroBuild>
      <div className='HeroName'>
        <span className='Title'>Hero:</span><span className='Info'>{heroBuilds.Elesis.name}</span>
      </div>
      <div className='HeroType'>
        <span className='Title'>Class:</span><span className='Info'>{heroBuilds.Elesis.type}</span>
      </div>
      <div className='HeroSet'>
        <span className='Title'>Armor:</span><span className='Info'>{heroBuilds.Elesis.set}</span>
      </div>
      <div className='HeroLB'>
        <span className='Title'>Limit Break:</span><span className='Info'>{heroBuilds.Elesis.limitBreak}</span>
      </div>
      <div className='HeroAccessories'>
        <span className='Title'>Accessories:</span><span className='Info'>{heroBuilds.Elesis.accessories}</span>
      </div>
      <div className='HeroTraits'>
        <span className='Title'>Traits:</span><span className='Info'>{heroBuilds.Elesis.traits}</span>
      </div>
      <div className='HeroSockets'>
        <span className='Title'>Enchants:</span><span className='Info'>{heroBuilds.Elesis.sockets}</span>
      </div>
      <div className='HeroChaser'>
        <div><span className='Title'>CL05:</span><span className='Info'>{heroBuilds.Elesis.chaser05}</span></div>
        <div><span className='Title'>CL10:</span><span className='Info'>{heroBuilds.Elesis.chaser10}</span></div>
        <div><span className='Title'>CL15:</span><span className='Info'>{heroBuilds.Elesis.chaser15}</span></div>
        <div><span className='Title'>CL20:</span><span className='Info'>{heroBuilds.Elesis.chaser20}</span></div>
        <div><span className='Title'>CL25:</span><span className='Info'>{heroBuilds.Elesis.chaser25}</span></div>
      </div>
    </StyledHeroBuild>
  )
}

export default HeroBuild