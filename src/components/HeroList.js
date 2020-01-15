import React from 'react'
import styled from 'styled-components'

import { heroes } from '../data'

import Hero from './Hero'

const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  .HeroContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

function HeroList() {
  return (
    <StyledHeroList>
      <div className='HeroContainer'>
        {heroes.map((hero, i) => (
          <Hero key={`${heroes.name}${i}`} {...hero} />
        ))}
      </div>
    </StyledHeroList>
  )
}

export default HeroList