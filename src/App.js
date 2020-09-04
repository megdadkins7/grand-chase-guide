import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components
import StageList from './components/StageList'
import HeroList from './components/HeroList'
import HeroBuild from './components/HeroBuild'
import NameList from './components/NameList'
import WorldBoss from './components/WorldBoss'
import RaidList from './components/RaidList'
import DualRaidList from './components/DualRaidList'
import DChasmList from './components/DChasmList'

//styles
import GlobalStyles from './styles/GlobalStyles'
import AltarOfTime from './components/AltarofTime'

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 0 5px 5px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  .Nav {
    margin: 0 5px;
    padding-right: 10px;
    background-color: transparent;
    color: #acacac;
    font-weight: 500;
    font-size: 1.7rem;
    border-right: 1px solid black;
  }
  .Nav:hover {
    color: #fff;
  }
  @media (max-width: 414px) {
    margin-bottom: 0;
  }
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  margin-top: 20px;
  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div className="Content">
        <StyledNav>
          <nav>
            <Link className="Nav" to="/">
              Home
            </Link>
            <Link className="Nav" to="/hero/elesis">
              Hero Build
            </Link>
            <Link className="Nav" to="/stages">
              Boss Stages
            </Link>
            <Link className="Nav" to="/worldboss">
              World Boss
            </Link>
            <Link className="Nav" to="/aot">
              AOT Teams
            </Link>
            <Link className="Nav" to="/epilogue">
              Epilogue Teams
            </Link>
            <Link className="Nav" to="/dimensionalchasm">
              D. Chasm Teams
            </Link>
            <Link className="Nav" to="/dualraid">
              Dual Raid Teams
            </Link>
          </nav>
        </StyledNav>
        <Switch>
          <Route
            path="/hero/:name"
            children={
              <StyledGrid>
                <NameList />
                <HeroBuild />
              </StyledGrid>
            }
          />
          <Route path="/stages" children={<StageList />} />
          <Route path="/worldboss" children={<WorldBoss />} />
          <Route path="/aot" children={<AltarOfTime />} />
          <Route path="/epilogue" children={<RaidList />} />
          <Route path="/dimensionalchasm" children={<DChasmList />} />
          <Route path="/dualraid" children={<DualRaidList />} />
          <Route path="/" children={<HeroList />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
