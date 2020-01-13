import React from 'react'
import styled from 'styled-components'

import { filterData } from '../data'

const StyledFilter = styled.div`
  margin: 10px;
  padding: 5px;
  .EvoFilters {
    padding: 10px;
  }
  .BossFilters {
    padding: 10px;
  }
  .SFilters {
    padding: 10px;
  }
  .MatFilters {
    padding: 10px;
  }
  .Title {
    font-weight: 500;
  }
  .Info {
    margin: 5px;
    color: #7D7D7D;
  }
  .Block {
    display: block;
    padding: 3px;
  }
`;

function Filter() {
  return (
    <StyledFilter>
      <div className='EvoFilters'>
        <div className='Title'>Evos: </div>
        <div className='FilterData'>
          <div className='Block'>
            <input type='checkbox' id='assault' name='assault' />
            <label className='Info' for='assault'>Assault</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='tank' name='tank' />
            <label className='Info' for='tank'>Tank</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='ranger' name='ranger' />
            <label className='Info' for='ranger'>Ranger</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='mage' name='mage' />
            <label className='Info' for='mage'>Mage</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='healer' name='healer' />
            <label className='Info' for='healer'>Healer</label>
          </div>
        </div>
      </div>
      <div className='BossFilters'>
        <div className='Title'>Boss: </div>
        <div className='FilterData'>
          <div className='Block'>
            <input type='checkbox' id='assault' name='assault' />
            <label className='Info' for='assault'>Assault</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='tank' name='tank' />
            <label className='Info' for='tank'>Tank</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='ranger' name='ranger' />
            <label className='Info' for='ranger'>Ranger</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='mage' name='mage' />
            <label className='Info' for='mage'>Mage</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='healer' name='healer' />
            <label className='Info' for='healer'>Healer</label>
          </div>
        </div>
      </div>
      <div className='SFilters'>
        <div className='Title'>S Unit: </div>
        <div className='FilterData'>
          <div className='Block'>
            <input type='checkbox' id='assault' name='assault' />
            <label className='Info' for='assault'>Assault</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='tank' name='tank' />
            <label className='Info' for='tank'>Tank</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='ranger' name='ranger' />
            <label className='Info' for='ranger'>Ranger</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='mage' name='mage' />
            <label className='Info' for='mage'>Mage</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='healer' name='healer' />
            <label className='Info' for='healer'>Healer</label>
          </div>
        </div>
      </div>     
      <div className='MatFilters'>
        <div className='Title'>Mats: </div>
        <div className='FilterData'>
          <div className='Block'>
            <input type='checkbox' id='BOV' name='BOV' />
            <label className='Info' for='BOV'>BOV</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='enchants' name='enchants' />
            <label className='Info' for='enchants'>enchants</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='runes' name='runes' />
            <label className='Info' for='runes'>runes</label>
          </div>
          <div className='Block'>
            <input type='checkbox' id='AOT' name='AOT' />
            <label className='Info' for='AOT'>AOT</label>
          </div>
        </div>
      </div>   
    </StyledFilter>
  )
}

export default Filter