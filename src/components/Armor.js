import React from 'react'
import styled from 'styled-components'

const StyledArmor = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  .Armor {
    font-weight: 500;
    color: #ACACAC;
  }
  .AccessoryWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  .Accessories {
    height: 60px;
    width: auto;
    border: 1px solid black;
  }
  .AccessoryName {
    color: #ACACAC;
    margin: 3px;
  }
  .EnchantsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .Circle1 {
    display: inline-block;
    background: #AFA6D0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .Circle2 {
    display: inline-block;
    background: #C13071;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .Circle3 {
    display: inline-block;
    background: #57A1E9;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid black;
  }
  .Sockets {
    margin: 10px;
    color: #ACACAC;
  }
`;

function Armor({ build }) {
  const setColor = build.setColor;
  
  const buildShadow = {
    boxShadow: `inset 0 0 3px 1px ${setColor}`,
    background: `linear-gradient(180deg, ${setColor} 0%, rgba(0,0,0,0) 23%)`
  }
  return (
    <StyledArmor style={buildShadow}>
      <span className='Armor'>{build.set}</span>
      <div className='AccessoryWrapper'>
        <div>
          <img className='Accessories' src={build.ring} />
          <div className='AccessoryName'>{build.ringName}</div>
        </div>
        <div>
          <img className='Accessories' src={build.necklace} />
          <div className='AccessoryName'>{build.necklaceName}</div>
        </div>
        <div>
          <img className='Accessories' src={build.earrings} />
          <div className='AccessoryName'>{build.earringsName}</div>
        </div>
        <div>
          <img className='Accessories' src={build.artifact} />
          <div className='AccessoryName'>{build.artifactName}</div>
        </div>
      </div>
      <div className='EnchantsWrapper'>
        <div>
          <div className='Circle1'></div>
          <span className='Sockets'>{build.socket1}</span>
        </div>
        <div>
          <div className='Circle2'></div>
          <span className='Sockets'>{build.socket2}</span>
        </div>
        <div>
          <div className='Circle3'></div>
          <span className='Sockets'>{build.socket3}</span>
        </div>
      </div>
    </StyledArmor>
  )
}

export default Armor