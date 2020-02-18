import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

//data
import { heroBuilds } from '../data'

const StyledHeroBuild = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .Hero {
    margin: 10px 10px 0 10px;
    z-index: 1;
    height: 400px;
    width: auto;
  }
  .HeroInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 10px;
  }
  .RankPic {
    height: 70px;
    z-index: 1;
  }
  .TypePic {
    z-index: 1;
    height: 50px;
    margin: 15px 10px 10px 10px;
  }
  .Name {
    z-index: 1;
    margin: 20px 10px 10px 10px;
    text-transform: uppercase;
    color: #e8e8e8
    font-weight: 500;
    font-size: 25px;
  }
  .LimitBreakWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    box-shadow: inset 0 0 3px 1px #61FEE6;
  }
  .LBTitle {
    margin: 10px;
  }
  .LimitBreakTitle {
    display: block;
    font-weight: 500;
    color: #ACACAC;
  }
  .LBSkill {
    margin: 10px;
    height: 80px;
    width: auto;
    border: 1px solid black;
  }
  .LBName {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 500;
    color: #ACACAC;
  }
  .Arrow {
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 30px;
    color: #ACACAC;
  }
  .AccessoryWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
  .Accessories {
    margin: 10px;
    height: 50px;
    width: auto;
    border: 1px solid black;
  }
  .AccessoryName {
    margin: 10px;
  }
  .EnchantsWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
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
    padding: 5px;
  }
  .ChaserWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px 50px;
    box-shadow: inset 0 0 3px 1px #AE27CF;
  }
  .ChaserTitle {
    text-align: center;
    margin: 10px;
    font-weight: 500;
    color: #ACACAC;
  }
  .Title {
    color: #ACACAC;
  }
  .ChaserImage {
    margin: 5px;
    height: 60px;
    width: auto;
    border: 1px solid black;
  }
  .TraitsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .PetWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  .Pet {
    height: 80px;
    width: auto;
    margin: 10px;
    border: 1px solid black;
  }
  .PetName {
    margin: 5px;
    font-weight: 500;
    color: #ACACAC;
  }
  .Traits {
    text-align: center;
  }
  .Points {
    color: #ACACAC;
    margin-bottom: 10px;
  }
  .TraitTitle {
    margin: 5px;
    font-weight: 500;
    color: #ACACAC;
  }
  .TraitName {
    color: #ACACAC;
    margin: 5px;
  }
  .TraitPic {
    height: 80px;
    width: auto;
    margin: 10px;
    border: 1px solid black;
  }
`;

function HeroBuild() {

  const { name } = useParams()
  
  const build = heroBuilds[name];

  const heroColor = build.color;
  
  const setColor = build.setColor;
  
  const boxShadowStyle = {
    boxShadow: `inset 0 0 3px 1px ${heroColor}`,
    margin: '40px'
  }

  const buildShadow = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    textAlign: 'center',
    boxShadow: `inset 0 0 3px 1px ${setColor}`,
    color: '#ACACAC'
  }

  return (
    <StyledHeroBuild>
      <div className='HeroPic' style={boxShadowStyle}>
        <img className='Hero' src={build.pic} alt='' />
        <div className='HeroInfo'>
          <img className='RankPic' src={build.rank} alt='SR' />
          <img className='TypePic' src={build.classPic} alt='class' />
          <span className='Name'>{build.name}</span>
        </div>
      </div>
      <div className='HeroBuildWrapper'>
        <div className='ChaserTitle'>Limit Break:</div>
        <div className='LimitBreakWrapper'>
          <div>
            <img className='LBSkill' src={build.limitBreak1} />
            <span className='LBName'>{build.lb1}</span>
          </div>
          <span className='Arrow'>&rarr;</span>
          <div>
          <img className='LBSkill' src={build.limitBreak2} />
          <span className='LBName'>{build.lb2}</span>
          </div>
        </div>
        <div className='ChaserTitle'>Hero Build:</div>
        <div className='BuildWrapper' style={buildShadow}>
          <span>{build.set}</span>
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
        </div>
        <div className='ChaserTitle'>Chaser:</div>
        <div className='ChaserWrapper'>
          <div><span className='Title'>CL 05:</span><img className='ChaserImage' src={build.chaser20} /></div>
          <div><span className='Title'>CL 10:</span><img className='ChaserImage' src={build.chaser20} /></div>
          <div><span className='Title'>CL 15:</span><img className='ChaserImage' src={build.chaser20} /></div>
          <div><span className='Title'>CL 20:</span><img className='ChaserImage' src={build.chaser20} /></div>
          <div><span className='Title'>CL 25:</span><img className='ChaserImage' src={build.chaser20} /></div>
        </div>
      </div>
      <div className='TraitsWrapper' style={boxShadowStyle}>
        <div className='PetWrapper'>
          <div>
            <span className='PetName'>Pet:</span>
            <span className='PetName'>{build.petName}</span>
          </div>
          <img className='Pet' src={build.pet} />
        </div>
        <div className='Traits'>
          <div className='TraitTitle'>Traits:</div>
          <div className='Points'>{build.traits}</div>
          <img className='TraitPic' src={build.trait1} />
          <div className='TraitName'>{build.tn1}</div>
          <img className='TraitPic' src={build.trait2} />
          <div className='TraitName'>{build.tn2}</div>
          <img className='TraitPic' src={build.trait3} />
          <div className='TraitName'>{build.tn3}</div>
        </div>
      </div> 
    </StyledHeroBuild>
  )
}

export default HeroBuild