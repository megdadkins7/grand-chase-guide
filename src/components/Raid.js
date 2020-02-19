import React from 'react'
import styled from 'styled-components'

const StyledRaid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 20px;
  color: #ACACAC;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  span {
    margin: 10px;
  }
  .PartySkill {
    margin: 5px;
    height: 50px;
    width: 50px;
    border: 1px solid black;
  }
  .PartySkillThree {
    margin: 5px;
    height: 50px;
    width: 50px;
    border-left: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
  .Pet {
    margin: 5px;
    height: 50px;
    width: 50px;
    border: 1px solid black;
  }
  .Profile {
    height: 75px;
    width: auto;
    margin: 3px;
    border: 1px solid black;
  }
`;

function Raid({ name, slotOne, slotTwo, slotThree, slotFour, pet, partySkillOne, partySkillTwo, partySkillThree }) {
  return (
    <StyledRaid>
      <div>
        <span>{name}:</span>
      </div>
      <div>
      <img className='Profile'src={slotOne} />
      <img className='Profile'src={slotTwo} />
      <img className='Profile'src={slotThree} />
      <img className='Profile'src={slotFour} />
      <img className='Pet' src={pet} />
      <img className='PartySkill' src={partySkillOne} alt='party skill' />
      <img className='PartySkill' src={partySkillTwo} alt='party skill' />
      <img className='PartySkillThree' src={partySkillThree} alt='party skill' />
      </div>
    </StyledRaid>
  )
}

export default Raid