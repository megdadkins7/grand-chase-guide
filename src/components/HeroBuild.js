import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

//data
import { heroBuilds } from '../data'

const StyledHeroBuild = styled.div`
  margin: 10px;
  .Title {
    font-weight: 500;
  }
  .Info {
    color: #7D7D7D;
    padding-left: 5px;
  }
  img {
    margin: 10px;
    height: 400px;
    width: auto;
  }
`;

function HeroBuild() {
  // get the name from the URL (e.g. /home/lire -> lire)
  const { name } = useParams()
  
  // get the build from data
  const build = heroBuilds[name];

  return (
    <StyledHeroBuild>
      <div className='HeroPic'>
        <img src={build.pic} alt='' />
      </div>
      <div className='HeroName'>
        <span className='Title'>Hero:</span><span className='Info'>{build.name}</span>
      </div>
      <div className='HeroType'>
        <span className='Title'>Class:</span><span className='Info'>{build.type}</span>
      </div>
      <div className='HeroSet'>
        <span className='Title'>Armor:</span><span className='Info'>{build.set}</span>
      </div>
      <div className='HeroLB'>
        <span className='Title'>Limit Break:</span><span className='Info'>{build.limitBreak}</span>
      </div>
      <div className='HeroAccessories'>
        <span className='Title'>Accessories:</span><span className='Info'>{build.accessories}</span>
      </div>
      <div className='HeroTraits'>
        <span className='Title'>Traits:</span><span className='Info'>{build.traits}</span>
      </div>
      <div className='HeroSockets'>
        <span className='Title'>Enchants:</span><span className='Info'>{build.sockets}</span>
      </div>
      <div className='HeroChaser'>
        <div><span className='Title'>Chaser Level 05:</span><span className='Info'>{build.chaser05}</span></div>
        <div><span className='Title'>Chaser Level 10:</span><span className='Info'>{build.chaser10}</span></div>
        <div><span className='Title'>Chaser Level 15:</span><span className='Info'>{build.chaser15}</span></div>
        <div><span className='Title'>Chaser Level 20:</span><span className='Info'>{build.chaser20}</span></div>
        <div><span className='Title'>Chaser Level 25:</span><span className='Info'>{build.chaser25}</span></div>
      </div>
    </StyledHeroBuild>
  )
}

export default HeroBuild