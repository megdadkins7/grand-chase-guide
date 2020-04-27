import styled from 'styled-components'

export const StyledTeam = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 30px;
  box-shadow: inset 0 0 3px 1px #454545;
  color: #E6E6E6;
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
    border: 1px solid #56DE74;
  }
  .Profile {
    height: 75px;
    width: auto;
    margin: 3px;
    border: 1px solid #61FFE7;
  }
  .StyledStars {
    display: flex;
  }
  .Stars {
    width: 80px;
    height: auto;
  }
  @media (max-width: 414px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 5px; 
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
    color: #E6E6E6;
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
    border: 1px solid #56DE74;
  }
  .Profile {
    height: 75px;
    width: auto;
    margin: 10px 3px 3px 3px;
    border: 1px solid #61FFE7;
  }
  .StyledStars {
    display: flex;
    margin: 5px 1px 0 1px;
  }
  .Stars {
    width: 80px;
    height: auto;
    padding: 1px;
  }
  @media (max-width: 414px) {
    padding: 0;
  }
`;

export const StyledRaidList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  display: grid;
    @media (max-width: 414px) {
    grid-template-columns: 1fr;
    padding: 0; 
  }
  @media (max-width: 823px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0; 
  }
`;

export const StyledCurrentRaid = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
  color: #E6E6E6;
  font-weight: 500;
  font-size: 25px;
`;

export const StyledContainer = styled.div`
  display: flex; 
  justify-content: center;
`