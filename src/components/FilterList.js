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

function FilterList() {
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

/*
{products.filter(
  ({ category }) =>
    displayCategory === category || displayCategory === "all"
  )
  .map(({ category, name }) => (
  <ProductItem
    key={`ProductItems-${name}`}
    category={category}
    name={name}
  />
))}
constructor(props) {
  super(props);
  this.state = {
    displayCategory: "all",
    products: props.products,
    productCategories: props.productCategories
  };
  this.setCategory = this.setCategory.bind(this);
}
setCategory(category) {
  this.setState({
    displayCategory: category
  });
}
*/