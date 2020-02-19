import React from 'react'
import styled from 'styled-components'

const StyledTraits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  box-shadow: inset 0 0 3px 1px #454545;
  .PetWrapper {
    text-align: center;
  }
  .Pet {
    margin: 10px;
    height: 80px;
    width: auto;
    border: 1px solid black;
  }
  .PetTitle {
    font-weight: 500;
    color: #ACACAC;
  }
  .PetName {
    margin-left: 5px;
    color: #ACACAC;
  }
  .Traits {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin: 20px;
    text-align: center;
  }
  .Points {
    color: #ACACAC;
  }
  .TraitTitle {
    font-weight: 500;
    color: #ACACAC;
  }
  .TraitName {
    color: #ACACAC;
  }
  .TraitPic {
    margin: 10px;
    height: 80px;
    width: auto;
    border: 1px solid black;
  }
`;

function Traits({ build }) {
  return (
    <StyledTraits>
      <div className='PetWrapper'>
        <div>
          <span className='PetTitle'>Pet:</span>
          <span className='PetName'>{build.petName}</span>
        </div>
        <img className='Pet' src={build.pet} />
      </div>
      <div className='Traits'>
        <div>
          <div className='TraitTitle'>Traits:</div>
          <div className='Points'>4 points</div>
          <div className='Points'>in each</div>
        </div>
        <div>
          <img className='TraitPic' src={build.trait1} />
          <div className='TraitName'>{build.tn1}</div>
        </div>
        <div>
          <img className='TraitPic' src={build.trait2} />
          <div className='TraitName'>{build.tn2}</div>
        </div>
        <div>
          <img className='TraitPic' src={build.trait3} />
          <div className='TraitName'>{build.tn3}</div>
        </div>
      </div>
    </StyledTraits>
  )
}

export default Traits