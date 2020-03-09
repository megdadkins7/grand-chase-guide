import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//data
import { heroes } from '../data'

//components
import Name from './Name'

const StyledNameList = styled.div`
  margin-top: 10px;
  direction: rtl;
  overflow: auto;
  height: 672px;
  width: 200px;
  .HeroContainer {
    direction: ltr;
  }
`;

function NameList() {
    return (
      <StyledNameList>
        <div className='HeroContainer'>
          {heroes.map(hero => (
            <Link key={hero.id} to={`/hero/${hero.id}`}>
              <Name {...hero} />
            </Link>
          ))}
        </div>
      </StyledNameList>
    )
  }
  
  export default NameList