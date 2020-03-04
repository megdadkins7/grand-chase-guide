import React from 'react'

//styles
import { StyledTeam } from '../styles/TeamStyle'

function Team({ name, slotOne, slotTwo, slotThree, slotFour, pet, partySkillOne, partySkillTwo, partySkillThree, oneStars, twoStars, threeStars, fourStars }) {
  return (
    <StyledTeam>
      <div>
        <span>{name}:</span>
      </div>
      <div>
        <div style={{display: 'flex', justifyContent: 'flex-start', margin: '0 0 3px 23px'}}>
          <img className='Stars' src={oneStars} alt='stars' />
          <img className='Stars' src={twoStars} alt='stars' />
          <img className='Stars' src={threeStars} alt='stars' />
          <img className='Stars' src={fourStars} alt='stars' />
        </div>
        <img className='Profile'src={slotOne} alt='hero' />
        <img className='Profile'src={slotTwo} alt='hero' />
        <img className='Profile'src={slotThree} alt='hero' />
        <img className='Profile'src={slotFour} alt='hero' />
        <img className='Pet' src={pet} alt='pet' />
        <img className='PartySkill' src={partySkillOne} alt='party skill' />
        <img className='PartySkill' src={partySkillTwo} alt='party skill' />
        <img className='PartySkill' src={partySkillThree} alt='party skill' />
      </div>
    </StyledTeam>
  )
}

export default Team