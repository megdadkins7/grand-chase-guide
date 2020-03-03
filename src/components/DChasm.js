import React from 'react'

//styles
import { StyledRaid } from '../styles/TeamStyle'

function DualRaid({ name, slotOne, slotTwo, slotThree, slotFour, pet, partySkillOne, partySkillTwo, partySkillThree, specialHero, oneStars, twoStars, threeStars, fourStars }) {
  return (
    <StyledRaid>
      <div className='Name'>{name}:</div>
      <div>
        <div className='StyledStars'>
          <img className='Stars' src={oneStars} />
          <img className='Stars' src={twoStars} />
          <img className='Stars' src={threeStars} />
          <img className='Stars' src={fourStars} />
        </div>
        <div>
          <img className='Profile'src={slotOne} />
          <img className='Profile'src={slotTwo} />
          <img className='Profile'src={slotThree} />
          <img className='Profile'src={slotFour} />
        </div>
        <div>
          <img className='Pet' src={pet} />
          <img className='PartySkill' src={partySkillOne} alt='party skill' />
          <img className='PartySkill' src={partySkillTwo} alt='party skill' />
          <img className='PartySkill' src={partySkillThree} alt='party skill' />
        </div>
        <div>
          <span style={{color: '#E6E6E6'}}>{specialHero}</span>
        </div>
      </div>
    </StyledRaid>
  )
}

export default DualRaid