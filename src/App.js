import React from 'react';

import StageList from './components/StageList'
import HeroList from './components/HeroList'
import HeroBuild from './components/HeroBuild'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <StageList />
      <HeroList />
      <HeroBuild />
    </>
  );
}

export default App;