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
          <img className='Stars' src={oneStars} />
          <img className='Stars' src={twoStars} />
          <img className='Stars' src={threeStars} />
          <img className='Stars' src={fourStars} />
        </div>
        <img className='Profile'src={slotOne} />
        <img className='Profile'src={slotTwo} />
        <img className='Profile'src={slotThree} />
        <img className='Profile'src={slotFour} />
        <img className='Pet' src={pet} />
        <img className='PartySkill' src={partySkillOne} alt='party skill' />
        <img className='PartySkill' src={partySkillTwo} alt='party skill' />
        <img className='PartySkill' src={partySkillThree} alt='party skill' />
      </div>
    </StyledTeam>
  )
}

export default Team