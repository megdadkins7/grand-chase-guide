import React from 'react';
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

//styles
import GlobalStyles from './styles/GlobalStyles'

const StyledNav = styled.div`
  .Nav {
    font-size: 1.7rem;
    margin: 0 0 0 5px;
    padding-right: 7px;
    color: #232323;
    background-color: transparent;
  }
  margin-top: 5px;
  margin-bottom: 10px;
`

function App() {
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
        <Route path="/stages" children={<StageList />} />
        <Route path="/" children={<HeroList />} />
      </Switch>
    </Router>
  );
}

export default App;