import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

//data
import { heroBuilds } from '../data'

const StyledHeroBuild = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .HeroPic {
    margin: 50px 10px 10px 120px;
  }
  .Hero {
    z-index: 1;
    height: 400px;
    width: auto;
  }
  .HeroInfo {
    display: flex;
    justify-content: flex-start;
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
  }
  .Circle1 {
    background: #AFA6D0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .Circle2 {
    background: #C13071;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .Circle3 {
    background: #57A1E9;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

function HeroBuild() {

  const { name } = useParams()
  
  const build = heroBuilds[name];

  const heroColor = build.color;
  
  const setColor = build.setColor;
  
  const boxShadowStyle = {
    boxShadow: `inset 0 0 3px 1px ${heroColor}`,
    textAlign: 'center',
    padding: '  20px',
    margin: '40px'
  }

  const buildShadow = {
    boxShadow: `inset 0 0 3px 1px ${setColor}`
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
        <div className='LimitBreakWrapper'>
          <div>
            <img src={build.limitBreak1} />
            <span>{build.lb1}</span>
          </div>
          <span>&rarr;</span>
          <div>
          <img src={build.limitBreak2} />
          <span>{build.lb2}</span>
          </div>
        </div>
        <div className='BuildWrapper' style={buildShadow}>
          <div className='ArmorWrapper'>
            <span>{build.set}</span>
          </div>
          <div className='AccessoryWrapper'>
            <img src={build.ring} />
            <span>{build.ringName}</span>
            <img src={build.necklace} />
            <span>{build.necklaceName}</span>
            <img src={build.earrings} />
            <span>{build.earringsName}</span>
          </div>
          <div className='EnchantsWrapper'>
            <div className='Circle1'></div>
            <span>{build.socket1}</span>
            <div className='Circle2'></div>
            <span>{build.socket2}</span>
            <div className='Circle3'></div>
            <span>{build.socket3}</span>
          </div>
        </div>
        <div className='ChaserWrapper'>
          <div><span className='Title'>Chaser Level 05:</span><span className='Info'>{build.chaser05}</span></div>
          <div><span className='Title'>Chaser Level 10:</span><span className='Info'>{build.chaser10}</span></div>
          <div><span className='Title'>Chaser Level 15:</span><span className='Info'>{build.chaser15}</span></div>
          <div><span className='Title'>Chaser Level 20:</span><img src={build.chaser20} /></div>
          <div><span className='Title'>Chaser Level 25:</span><span className='Info'>{build.chaser25}</span></div>
        </div>
      </div>
      <div className='TraitsWrapper'>
        <div>
          <img src={build.pet} />
          <span>{build.petName}</span>
        </div>
        <div>
          <span>{build.traits}</span>
          <img src={build.trait1} />
          <span>{build.tn1}</span>
          <img src={build.trait2} />
          <span>{build.tn2}</span>
          <img src={build.trait3} />
          <span>{build.tn3}</span>
        </div>
      </div>  
    </StyledHeroBuild>
  )
}

export default HeroBuild

/*
<div className='HeroSet'>
  <span className='Title'>Armor:</span><span className='Info'>{build.set}</span>
  <div className='ArmorWrapper'>
    <img className='BuildPics' src={build.setPic} alt='armorSet' />
    <img className='BuildPics' src={build.setPicB} alt='' />
  </div>
</div>
<div className='HeroAccessories'>
  <span className='Title'>Accessories:</span><span className='Info'>{build.accessories}</span>
  <div className='AccessoryWrapper'>
    <img className='AccessoryPics' src={build.ring} alt='ring' />
    <img className='AccessoryPics' src={build.necklace} alt='necklace' />
    <img className='AccessoryPics' src={build.earrings} alt='earrings' />
  </div>
</div>
<div className='PetWrapper'>
  <span className='Title'>Pet:</span>
  <span className='Info'>{build.petName}</span>
  <div>
    <img className='PetPic' src={build.pet} alt='' />
  </div>
</div>
<div className='HeroChaser'>
  <div><span className='Title'>Chaser Level 05:</span><span className='Info'>{build.chaser05}</span></div>
  <div><span className='Title'>Chaser Level 10:</span><span className='Info'>{build.chaser10}</span></div>
  <div><span className='Title'>Chaser Level 15:</span><span className='Info'>{build.chaser15}</span></div>
  <div><span className='Title'>Chaser Level 20:</span><span className='Info'>{build.chaser20}</span></div>
  <div><span className='Title'>Chaser Level 25:</span><span className='Info'>{build.chaser25}</span></div>
</div>
<div className='HeroLB'>
  <span className='Title'>Limit Break:</span><span className='Info'>{build.limitBreak}</span>
</div>
<div className='HeroTraits'>
  <span className='Title'>Traits:</span><span className='Info'>{build.traits}</span>
</div>
<div className='HeroSockets'>
  <span className='Title'>Enchants:</span><span className='Info'>{build.sockets}</span>
</div>


.Title {
  color: #ACACAC;
  font-weight: 500;
}
.Info {
  color: #7D7D7D;
  padding-left: 5px;
  text-transform: capitalize;
}
.BuildPics {
  height: 50px;
  margin: 10px
}
.PetPic {
  height: 50px;
  margin: 10px;
}
.AccessoryPics {
  height: 50px;
  margin: 10px;
}
*/