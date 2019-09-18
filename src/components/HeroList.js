import React from 'react'
import styled from 'styled-components'

import Hero from './Hero'

const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  .HeroContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

const heroes = [
  {name: "Elesis", type: "assault", pic: "https://vignette.wikia.nocookie.net/grandchase/images/5/5f/Grand_Chase_for_kakao_Elesis_03.png/revision/latest?cb=20190907013422"},
  {name: "Lire", type: "ranger", pic: "https://vignette.wikia.nocookie.net/grandchase/images/6/64/Grand_Chase_for_kakao_Lire_Eryuell_03.png/revision/latest?cb=20190902125444"},
  {name: "Arme", type: "mage", pic: "https://vignette.wikia.nocookie.net/grandchase/images/9/9b/Grand_Chase_for_kakao_Arme_03.png/revision/latest?cb=20190914124519"},
  {name: "Lass", type: "assault", pic: "https://vignette.wikia.nocookie.net/grandchase/images/3/3b/Grand_Chase_for_kakao_Lass_03.png/revision/latest?cb=20190319062942"},
  {name: "Ryan", type: "tank", pic: "https://vignette.wikia.nocookie.net/grandchase/images/a/ac/Grand_Chase_for_kakao_Ryan_03.png/revision/latest?cb=20181211081423"},
  {name: "Ronan", type: "tank", pic: "https://vignette.wikia.nocookie.net/grandchase/images/b/b6/Grand_Chase_for_kakao_Ronan_03.png/revision/latest?cb=20190914143527"},
  {name: "Amy", type: "healer", pic: "https://vignette.wikia.nocookie.net/grandchase/images/a/a6/Grand_Chase_for_kakao_Amy_03.png/revision/latest?cb=20181106062520"},
  {name: "Jin", type: "tank", pic: "https://vignette.wikia.nocookie.net/grandchase/images/f/f2/Grand_Chase_for_kakao_Jin_03.png/revision/latest?cb=20190718025204"},
  {name: "Sieghart", type: "assault", pic: "https://vignette.wikia.nocookie.net/grandchase/images/3/3e/Grand_Chase_for_kakao_Sieghart_03.png/revision/latest?cb=20190319063051"},
  {name: "Mari", type: "mage", pic: "https://vignette.wikia.nocookie.net/grandchase/images/a/a1/Grand_Chase_for_kakao_Mari_03.png/revision/latest?cb=20190914144435"},
  {name: "Dio", type: "assault", pic: "https://vignette.wikia.nocookie.net/grandchase/images/c/cb/Grand_Chase_for_kakao_Dio_03.png/revision/latest?cb=20190718025258"},
  {name: "Zero", type: "tank", pic: "https://vignette.wikia.nocookie.net/grandchase/images/9/98/Grand_Chase_for_kakao_Zero_03.png/revision/latest?cb=20190718025348"},
  {name: "Ley", type: "mage", pic: "https://vignette.wikia.nocookie.net/grandchase/images/4/4a/Grand_Chase_for_kakao_Ley_03.png/revision/latest?cb=20190409071206"},
  {name: "Rufus", type: "ranger", pic: "https://vignette.wikia.nocookie.net/grandchase/images/9/90/Grand_Chase_for_kakao_Rufus_03.png/revision/latest?cb=20181211081231"},
  {name: "Rin", type: "healer", pic: "https://vignette.wikia.nocookie.net/grandchase/images/0/00/Grand_Chase_for_kakao_Rin_03.png/revision/latest?cb=20190115024445"},
  {name: "Asin", type: "tank", pic: "https://vignette.wikia.nocookie.net/grandchase/images/2/27/Grand_Chase_for_kakao_Asin_03.png/revision/latest?cb=20190813110551"},
  {name: "Lime", type: "healer", pic: "https://vignette.wikia.nocookie.net/grandchase/images/9/94/Grand_Chase_for_kakao_Lime_03.png/revision/latest?cb=20190806100745"},
  {name: "Edel", type: "assault", pic: "https://vignette.wikia.nocookie.net/grandchase/images/e/ee/Grand_Chase_for_kakao_Edel_03.png/revision/latest?cb=20190718025428"},
  {name: "Veigas", type: "mage", pic: "https://vignette.wikia.nocookie.net/grandchase/images/e/e9/Grand_Chase_for_kakao_Veigas_03.png/revision/latest?cb=20190707043615"},
  {name: "Serdin", type: "healer", pic: "https://vignette.wikia.nocookie.net/grandchase/images/f/f0/Grand_Chase_for_kakao_Scarde_03.png/revision/latest?cb=20190416040937"},
  {name: "Kanavan", type: "assault", pic: "https://vignette.wikia.nocookie.net/grandchase/images/3/3c/Grand_Chase_for_kakao_Esnar_03.png/revision/latest?cb=20190521121207"},
  {name: "Werner", type: "ranger", pic: "https://vignette.wikia.nocookie.net/grandchase/images/4/48/Grand_Chase_for_kakao_Werner_03.png/revision/latest?cb=20190718025510"},
  {name: "Grandiel", type: "healer", pic: "https://vignette.wikia.nocookie.net/grandchase/images/a/a8/Grand_Chase_for_kakao_Kassias_Grandiel_03.png/revision/latest?cb=20190718042310"},
  {name: "Nelia", type: "mage", pic: "https://vignette.wikia.nocookie.net/grandchase/images/e/ed/Grand_Chase_for_kakao_Nellia_03.png/revision/latest?cb=20190910164429"},
  {name: "Dark Gaian", type: "mage", pic: "https://vignette.wikia.nocookie.net/grandchase/images/0/0f/Grand_Chase_for_kakao_Dark_Gaian_02.png/revision/latest?cb=20190823115505"},
  {name: "Arsad", type: "tank", pic: "https://vignette.wikia.nocookie.net/grandchase/images/a/aa/Grand_Chase_for_kakao_Arsad_02.png/revision/latest?cb=20190823104047"}
]

function HeroList() {
  return (
    <StyledHeroList>
      <div className='HeroContainer'>
        {heroes.map((hero, i) => (
          <Hero key={`${heroes.name}${i}`} {...hero} />
        ))}
      </div>
    </StyledHeroList>
  )
}

export default HeroList;