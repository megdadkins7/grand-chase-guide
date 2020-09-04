import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

const StyledHeroImage = styled.div`
  display: flex;
  justify-content: center;
  .Hero {
    margin: 30px 20px 0 20px;
    height: 420px;
    width: auto;
  }
  @media (max-width: 550px) {
    .Hero {
      height: 380px;
    }
  }
`

function HeroImage({ build }) {
  return (
    <StyledHeroImage>
      <LazyLoadImage
        className="Hero"
        src={build.pic}
        alt="Hero"
        effect="opacity"
      />
    </StyledHeroImage>
  )
}

export default HeroImage
