import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// data
import { heroIds } from './data';

// components
import StageList from './components/StageList'
import HeroList from './components/HeroList'
import HeroBuild from './components/HeroBuild'

//styles
import GlobalStyles from './styles/GlobalStyles'


const StyledNav = styled.div`
  .Nav {
    font-size: 1.7rem;
    margin: 3px;
    padding-right: 7px;
  }
  margin-bottom: 10px;
`

function App() {
  return (
    <Router>
      <GlobalStyles />
      <StyledNav>
        <nav>
          <Link className='Nav' to='/'>Home</Link>
          <Link className='Nav' to='/stages'>Stages</Link>
        </nav>
      </StyledNav>
      <Switch>
        <Route path="/hero/:name" children={<HeroBuild />} />
        <Route path="/stages" children={<StageList/>} />
        <Route path="/" children={<HeroList />} />
      </Switch>
    </Router>
  );
}

export default App;