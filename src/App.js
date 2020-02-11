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
import NameList from './components/NameList'

//styles
import GlobalStyles from './styles/GlobalStyles'

const StyledNav = styled.div`
  margin: 10px;
  .Nav {
    margin: 0 0 0 5px;
    padding-right: 7px;
    background-color: transparent;
    color: #ACACAC;
    font-weight: 500;
    font-size: 1.7rem;
  }
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr
`;

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
        <Route path="/" children={<StyledGrid><NameList /><HeroList /></StyledGrid>} />
      </Switch>
    </Router>
  );
}

export default App;