import React from 'react'

//styles
import { StyledRaid } from '../styles/TeamStyle'

function DualRaid({ name, slotOne, slotTwo, slotThree, slotFour, pet, partySkillOne, partySkillTwo, partySkillThree, specialHero }) {
  return (
    <StyledRaid>
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
          <img className='PartySkill' src={partySkillOne} alt='party skill' />
          <img className='PartySkill' src={partySkillTwo} alt='party skill' />
          <img className='PartySkill' src={partySkillThree} alt='party skill' />
        </div>
        <div>
          <span style={{color: '#ACACAC'}}>{specialHero}</span>
        </div>
      </div>
    </StyledRaid>
  )
}

export default DualRaid