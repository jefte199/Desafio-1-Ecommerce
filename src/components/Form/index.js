import * as Style from './styled';

export default function SectionOne() {
  return (
    <Style.Container>
      <Style.Title>Todos os dias uma oferta de pulseira diferente</Style.Title>
      <Style.Input className="userInput" placeholder="email" />
      <Style.Button href="" type="button" primary>receber ofertas</Style.Button>
    </ Style.Container>
  );
}