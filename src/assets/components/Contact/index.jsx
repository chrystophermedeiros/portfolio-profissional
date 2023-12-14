import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import React, { useState, useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

import { Button } from '../Button';
import { Titles } from '../Titles';
import { Container, ContainerItems } from './style';

export function Contact() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7x3o3ir',
        'template_yhl8i7s',
        form.current,
        'rWd3F_fyG4Noze9FY',
      )
      .then((result) => {
        setEmailSent(true);
        setIsError(false);
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
        setIsError(true);
        setEmailSent(false);
      });

    e.target.reset();
  };
  return (
    <Container id="contato">
      <Titles>Contato</Titles>
      <ContainerItems id="contato">
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineMail className="contact_option-icon" />
              <h4>Email</h4>
              <h5> chrystopher312 @gmail.com</h5>
              <a
                href="mailto:chrystopher312@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Enviar mensagem
              </a>
            </article>

            <article className="contact_option">
              <BsWhatsapp className="contact_option-icon" />
              <h4>WhatsApp</h4>
              <h5>+55 (88) 9 9806-1512</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+998061512"
                target="_blank"
                rel="noreferrer"
              >
                Enviar mensagem
              </a>
            </article>
            {/* ... */}
          </div>
          {/* Fim de opção de contato */}
          <form ref={form} onSubmit={sendEmail}>
            {/* ... */}
            <input type="text" name="name" placeholder="Seu Nome" required />

            <input type="email" name="email" placeholder="Seu Email" required />

            <textarea
              name="message"
              rows="6"
              placeholder="Sua Mensagem"
              required
            ></textarea>

            <Button btn1 type="submit" className="btn btn-primary">
              Enviar Mensagem
            </Button>
            {emailSent && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">Enviado com sucesso</Alert>
              </Stack>
            )}
            {isError && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">Erro ao enviar a mensagem</Alert>
              </Stack>
            )}
          </form>
        </div>
      </ContainerItems>
    </Container>
  );
}
