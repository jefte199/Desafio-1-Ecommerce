import styled from 'styled-components';
//import ImgBackground from '../img/pulseiraBg.png';

const itemColor = "#7EA1C4";
const backgroundColor = "#051122";

export const SectionHeader = styled.section`
  margin-button: 200px;
  padding: 1em;
  background-color: ${backgroundColor};
`;

export const SectionBody = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #ccc;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  fonty-famyle: sans-serif;
  color: ${itemColor};
`;

export const subTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  fonty-famyle: sans-serif;
  color: #333;
`;

export const MsgHead = styled.span`
  display: block;
  font-size: 1rem;
  color: ${itemColor};
  font-weigth: 600;
`;

export const Input = styled.input`
  boerder: 1px solid #ddd;
  heigth: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    autline: nome;
    box-shadow: nome;
  }
`;

export const Button = styled.button`
  display: inline-block;
  color: ${itemColor};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: ${backgroundColor};
  border: 2px solid ${backgroundColor};
  border-radius: 3px;
  display: block;
`;
