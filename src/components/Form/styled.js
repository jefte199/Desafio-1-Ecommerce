import styled from 'styled-components';

const itemColor = "#FFC745";
const backgroundColor = "#007A78";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 1em;
  border: 2px solid ${itemColor};
  border-radius: 3px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  fonty-famyle: sans-serif;
  color: #ddd;
`;

export const Button = styled.a`
  text-decoration: none;  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: ${backgroundColor};
  color: ${itemColor};
`;



