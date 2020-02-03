import React, {useState} from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// components
import StageList from './components/StageList'
import HeroList from './components/HeroList'
import HeroBuild from './components/HeroBuild'

//data
import { grandChaseData } from './data';

//styles
import GlobalStyles from './styles/GlobalStyles'

const StyledNav = styled.div`
  .Nav {
    font-size: 1.7rem;
    margin: 3px;
    padding-right: 7px;
    color: #232323;
  }
  margin-bottom: 10px;
`

function App() {
  const [activeFilters, setActiveFilters] = useState({
    evos: [],
    boss: [],
    sUnit: [],
    mats: [],
  })

  const handleOnFiltersChange = partialFilters => {
    setActiveFilters(state => ({
      ...state,
      ...partialFilters
    }));
  };
  return (
    <Router>
      <GlobalStyles />
      <StyledNav>
        <nav>
          <Link className='Nav' to='/'>Home</Link>
          <Link className='Nav' to='/stages'>Boss Stages</Link>
        </nav>
      </StyledNav>
      <Switch>
        <Route path="/hero/:name" children={<HeroBuild />} />
        <Route path="/stages" children={<StageList data={grandChaseData} filters={activeFilters} onFiltersChange={handleOnFiltersChange} />} />
        <Route path="/" children={<HeroList />} />
      </Switch>
    </Router>
  );
}

export default App;