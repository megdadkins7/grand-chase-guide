import React from 'react'

//styles
import { StyledRaid } from '../styles/TeamStyle'

function Raid({ name, slotOne, slotTwo, slotThree, slotFour, pet, partySkillOne, partySkillTwo, partySkillThree }) {
  return (
    <StyledRaid>
      <div className='Name'>{name}:</div>
      <div>
        <div className='Heroes'>
          <img className='Profile'src={slotOne} />
          <img className='Profile'src={slotTwo} />
          <img className='Profile'src={slotThree} />
          <img className='Profile'src={slotFour} />
        </div>
        <div className='Other'>
          <img className='Pet' src={pet} />
          <img className='PartySkill' src={partySkillOne} alt='party skill' />
          <img className='PartySkill' src={partySkillTwo} alt='party skill' />
          <img className='PartySkill' src={partySkillThree} alt='party skill' />
        </div>
      </div>
    </StyledRaid>
  )
}

export default Raid