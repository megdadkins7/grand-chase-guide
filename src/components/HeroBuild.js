import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

//data
import { heroBuilds } from '../data'

//components
import HeroPic from './HeroPic'
import LimitBreak from './LimitBreak'
import Armor from './Armor'
import Chaser from './Chaser'
import Traits from './Traits'

const StyledHeroBuild = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 30px;
`;

function HeroBuild() {

  const { name } = useParams()
  
  const build = heroBuilds[name];

  return (
    <StyledHeroBuild>
      <HeroPic build={build} />
      <div>
        <LimitBreak build={build} />
        <Armor build={build} />
        <Chaser build={build} />
        <Traits build={build} />
      </div>
    </StyledHeroBuild>
  )
}

export default HeroBuild