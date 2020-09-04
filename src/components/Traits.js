import React from 'react'
import styled from 'styled-components'

const StyledTraits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: inset 0 0 3px 1px #454545;
  .PetWrapper {
    margin: 20px 0 20px 20px;
    text-align: center;
  }
  .Pet {
    margin: 10px;
    height: 80px;
    width: auto;
    border: 1px solid #56de74;
  }
  .PetTitle {
    font-weight: 500;
    color: #acacac;
  }
  .PetName {
    margin-left: 5px;
    color: #acacac;
  }
  .Traits {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin: 20px 20px 20px 0;
    text-align: center;
  }
  .Points {
    color: #acacac;
  }
  .TraitTitle {
    font-weight: 500;
    color: #acacac;
  }
  .TraitName {
    color: #acacac;
  }
  .TraitPic {
    margin: 10px 40px;
    height: 80px;
    width: auto;
    border: 1px solid black;
  }
`

function Traits({ build }) {
  return (
    <StyledTraits>
      <div className="PetWrapper">
        <img className="Pet" src={build.pet} alt="pet" />
        <div>
          <span className="PetTitle">Pet:</span>
          <span className="PetName">{build.petName}</span>
        </div>
      </div>
      <div className="Traits">
        <div>
          <div className="TraitTitle">Traits:</div>
          <div className="Points">4 points</div>
          <div className="Points">in each</div>
        </div>
        <div>
          <img className="TraitPic" src={build.trait1} alt="trait" />
          <div className="TraitName">{build.tn1}</div>
        </div>
        <div>
          <img className="TraitPic" src={build.trait2} alt="trait" />
          <div className="TraitName">{build.tn2}</div>
        </div>
        <div>
          <img className="TraitPic" src={build.trait3} alt="trait" />
          <div className="TraitName">{build.tn3}</div>
        </div>
      </div>
    </StyledTraits>
  )
}

export default Traits
