import React from 'react'

//styles
import { StyledRaid } from '../styles/TeamStyle'

function DualRaid({ name, slotOne, slotTwo, slotThree, slotFour, pet, pet2, partySkillOne, partySkillTwo, partySkillThree, fight }) {
  return (
    <StyledRaid style={{background: `url(${fight})`, backgroundPosition: 'center center'}}>
      <div className='Name'>{name}:</div>
      <div>
        <div>
          <img className='Profile'src={slotOne} />
          <img className='Profile'src={slotTwo} />
          <img className='Profile'src={slotThree} />
          <img className='Profile'src={slotFour} />
        </div>
      <div>
        <img className='Pet' src={pet} />
        <img className='Pet' src={pet2} />
        <img className='PartySkill' src={partySkillOne} alt='party skill' />
        <img className='PartySkill' src={partySkillTwo} alt='party skill' />
        <img className='PartySkill' src={partySkillThree} alt='party skill' />
        </div>
      </div>
    </StyledRaid>
  )
}

export default DualRaid