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
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  background: linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(255,255,255,0) 100%);
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
  grid-template-columns: 1fr 6fr
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
        <Route path="/hero/:name" children={<StyledGrid><NameList /><HeroBuild /></StyledGrid>} />
        <Route path="/stages" children={<StageList />} />
        <Route path="/" children={<HeroList />} />
      </Switch>
    </Router>
  );
}

export default App;