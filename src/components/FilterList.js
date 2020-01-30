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

//use filter on list of grandChaseData.boss or .mats or .evos or .sUnit and show only what is checked === true

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
const toggleToDo = toDoId => {
  const newToDos = toDos.map(toDo => {
    if (toDo.id !== toDoId) return toDo;
    return {
      ...toDo,
      done: !toDo.done,
    };
  });
  setToDos(newToDos);
};

<Checkbox
  id={toDo.id}
  isOn={toDo.done}
  handleToggle={() => toggleToDo(toDo.id)}
/>

<input
  type="checkbox"
  style={{ backgroundColor: isOn && '#51E3A4' }}
  checked={isOn}
  onChange={handleToggle}
  className="ToDoComplete"
/>
*/