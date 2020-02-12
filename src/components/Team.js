import React from 'react'
import styled from 'styled-components'

const StyledTeam = styled.div`
  color: #ACACAC;
  text-transform: capitalize;
  margin: 10px;
`;

function Team({ slotOne, slotTwo, slotThree, slotFour, pet, partySkillOne, partySkillTwo, partySkillThree }) {
  return (
    <StyledTeam>
      <div>{slotOne}</div>
      <div>{slotTwo}</div>
      <div>{slotThree}</div>
      <div>{slotFour}</div>
      <div>{pet}</div>
      <div>{partySkillOne}</div>
      <div>{partySkillTwo}</div>
      <div>{partySkillThree}</div>
    </StyledTeam>
  )
}

export default Team