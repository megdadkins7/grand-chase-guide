import React from 'react'
import styled from 'styled-components'

//data
import { classData, matData } from '../data'

//components
import Filter from './Filter'
import MatFilter from './MatFilter'

const StyledFilterList = styled.div`
  .Title {
    margin: 30px 0px 0px 30px;
    font-weight: 500;
  }
`;

function FilterList({ data, filters, onFiltersChange }) {

  return (
    <StyledFilterList>
      <div className='Title'>Evos:</div>
      <ul>
        { 
          classData.map((type, i) => (
              <Filter
                type={type}
                key={`${type.type}${i}`}
              />
            )
          ) 
        }
      </ul>
      <div className='Title'>Boss:</div>
      <ul>
        { 
          classData.map((type, i) => (
              <Filter
                type={type}
                key={`${type.type}${i}`}
              />
            )
          ) 
        }
      </ul>
      <div className='Title'>S Unit:</div>
      <ul>
        { 
          classData.map((type, i) => (
              <Filter
                type={type}
                key={`${type.type}${i}`}
              />
            )
          ) 
        }
      </ul>
      <div className='Title'>Material:</div>
      <ul>
        { 
          matData.map((material, i) => (
              <MatFilter
                material={material}
                key={`${material.mat}${i}`}
              />
            )
          ) 
        }
      </ul>
    </StyledFilterList>
  )
}

export default FilterList