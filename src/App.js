import React from 'react';

import StageList from './components/StageList'
import HeroList from './components/HeroList'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <StageList />
      <HeroList />
    </>
  );
}

export default App;