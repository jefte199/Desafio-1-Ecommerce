import * as Style from './styled';

export default function Header() {
  return (
    <>
      <Style.SectionHeader>
        <Style.Title>
          en.cantando_ <br />
          <Style.MsgHead>🦋 Acessórios artesanais 🦋</Style.MsgHead>
        </Style.Title>
      </Style.SectionHeader>

      <Style.SectionBody>
        <Style.Button as="a" href="https://www.instagram.com/">LOL</Style.Button>
      </Style.SectionBody>
    </>
  );
}