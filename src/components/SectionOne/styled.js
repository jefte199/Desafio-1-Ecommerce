import styled from 'styled-components';
import imgBackground from '../../img/bg.jpg';

export const $imgBackground = styled.section`
  background-image: url(${imgBackground});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`;
