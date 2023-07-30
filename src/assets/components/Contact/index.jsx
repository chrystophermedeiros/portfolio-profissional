import { useState } from 'react';
import {Container} from "./style"
import { Titles } from '../Titles';
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Container id='contato' className="container">
      <Titles >Contato</Titles>

      <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5> chrystopher312
              @gmail.com</h5>
            <a href="mailto:chrystopher312@gmail.com" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>

        

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (88) 9 9806-1512</h5>
            <a href="https://api.whatsapp.com/send?phone=+998061512" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>

      {/* <form className="form" onSubmit={() => {}}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form> */}

    </Container>
  );
}
