import styled from 'styled-components';

const itemColor = "#FFC745";
const backgroundColor = "#007A78";

export const SectionHeader = styled.section`
  text-align: center;
  font-size: 50px;
  fonty-famyle: sans-serif;
  color: ${itemColor};
  background-color: ${backgroundColor};
  `;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  fonty-famyle: sans-serif;
  color: ${itemColor};
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
  heigth: 1.5rem;
  border: 1px solid ${backgroundColor};
  background: #000;
  color: ${itemColor};
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    autline: nome;
    box-shadow: nome;
  }
  `;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

