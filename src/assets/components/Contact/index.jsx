import { Container, ContainerItems } from "./style";
import { Titles } from "../Titles";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useState, useRef } from "react";
import { Button } from "../Button";

import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_s6kopor",
      "template_yhl8i7s",
      form.current,
      "dHGKmR6mVFE-BTtqm"
    );
    e.target.reset();
  };

  return (
    <Container>
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
          </div>
          {/*Fim de opção de contato*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Seu Nome" required />

            <input type="email" name="email" placeholder="Seu Email" required />

            <textarea
              name="message"
              rows="7"
              placeholder="Sua Mensagem"
              required
            ></textarea>

            <Button btn1 type="submit" className="btn btn-primary">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </ContainerItems>
    </Container>
  );
}
