import * as Style from './styled';

import Header from "../../components/Header";
import Form from "../../components/Form";

export default function SectionOne() {
  return (
    <>
      <Style.$imgBackground>
        <Header />
        <Form />
     </Style.$imgBackground>
    </>

  );
}