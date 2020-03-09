import React from 'react'

//styles
import { StyledRaid } from '../styles/TeamStyle'

function DualRaid({ name, slotOne, slotTwo, slotThree, slotFour, pet, pet2, partySkillOne, partySkillTwo, partySkillThree, oneStars, twoStars, threeStars, fourStars }) {
  return (
    <StyledRaid>
      <div className='Name'>{name}:</div>
      <div>
        <div className='StyledStars'>
          <img className='Stars' src={oneStars} alt='stars' />
          <img className='Stars' src={twoStars} alt='stars' />
          <img className='Stars' src={threeStars} alt='stars' />
          <img className='Stars' src={fourStars} alt='stars' />
        </div>
        <div>
          <img className='Profile'src={slotOne} alt='hero' />
          <img className='Profile'src={slotTwo} alt='hero' />
          <img className='Profile'src={slotThree} alt='hero' />
          <img className='Profile'src={slotFour} alt='hero' />
        </div>
      <div>
        <img className='Pet' src={pet} alt='pet' />
        <img className='Pet' src={pet2} alt='pet' />
        <img className='PartySkill' src={partySkillOne} alt='party skill' />
        <img className='PartySkill' src={partySkillTwo} alt='party skill' />
        <img className='PartySkill' src={partySkillThree} alt='party skill' />
        </div>
      </div>
    </StyledRaid>
  )
}

export default DualRaid