import { useState } from 'react';
import * as Style from './styled';

export default function SectionOne() {

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  function addEmail() {
    if (email !== ""){
      localStorage.setItem('email', email);
      setEmail("");  
      setError(false);
      setMsg("Email Cadastrado");
    }else {
      setEmail("");  
      setError(true);
      setMsg("Digite um email");
    }

  }

  return (
    <Style.Container>
      <Style.Title>Todos os dias uma oferta de pulseira diferente</Style.Title>
      <Style.Input id="inputEmail" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <Style.Button type="button" onClick={() => addEmail()} >receber ofertas</Style.Button>
      <p>
        {
          error ?
            <Style.Err>{msg}</Style.Err>
            :
            <Style.Success>{msg}</Style.Success>
        }
      </p>
    </ Style.Container>
  );
}