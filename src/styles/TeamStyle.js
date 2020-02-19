import styled from 'styled-components'

export const StyledTeam = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 30px;
  box-shadow: inset 0 0 3px 1px #454545;
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

export const StyledRaid = styled.div`
  margin: 5px;
  padding: 20px;
  box-shadow: inset 0 0 3px 1px #454545;
  .Name {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    color: #ACACAC;
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
    margin: 10px 3px 3px 3px;
    border: 1px solid black;
  }
`;

export const StyledRaidList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`;

export const StyledCurrentRaid = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
  color: #ACACAC;
  font-weight: 500;
  font-size: 25px;
`;