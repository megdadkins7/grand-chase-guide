import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

//data
import { heroBuilds } from '../data'

const StyledHeroBuild = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  .HeroPic {
    margin: 10px;
  }
  .HeroBuildWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justif-content: center;
    margin: 10px;
    padding: 20px;
  }
  .Title {
    color: #ACACAC;
    font-weight: 500;
  }
  .Info {
    color: #7D7D7D;
    padding-left: 5px;
    text-transform: capitalize;
  }
  img {
    margin: 10px;
    height: 400px;
    width: auto;
  }
  .BuildPics {
    height: 50px;
  }
  .RankPic {
    height: 70px;
    z-index: 1;
  }
  .TypePic {
    height: 50px;
    z-index: 1;
  }
  .Name {
    z-index: 1;
    text-transform: uppercase;
    color: #e8e8e8
    font-weight: 500;
    font-size: 25px;
  }
  .HeroInfo {
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    align-items: center;
  }
  .PetPic {
    height: 50px;
    margin-left: 50px;
  }
`;

function HeroBuild() {

  const { name } = useParams()
  
  const build = heroBuilds[name];

  const heroColor = build.color;
  
  const boxShadowStyle = {
    boxShadow: `inset 0 0 3px 1px ${heroColor}`,
  }

  return (
    <StyledHeroBuild>
      <div className='HeroPic'>
        <img src={build.pic} alt='' />
        <div className='HeroInfo'>
          <img className='RankPic' src={build.rank} alt='SR' />
          <img className='TypePic' src={build.classPic} alt='class' />
          <span className='Name'>{build.name}</span>
        </div>
      </div>
      <div className='HeroBuildWrapper' style={boxShadowStyle}>
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
            <img className='BuildPics' src={build.ring} alt='ring' />
            <img className='BuildPics' src={build.necklace} alt='necklace' />
            <img className='BuildPics' src={build.earrings} alt='earrings' />
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
      </div>
    </StyledHeroBuild>
  )
}

export default HeroBuild