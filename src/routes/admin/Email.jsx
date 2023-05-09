import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
export const Email = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  useEffect(() => {
    const getEmail = localStorage.getItem("email");
    if (getEmail) {
      setEmail(getEmail);
    }
    const getCode = localStorage.getItem("code");
    if (getCode) {
      setCode(getCode);
    }

    const getClientEmail = localStorage.getItem("clientEmail");
    if (getClientEmail) {
      setClientEmail(getClientEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("code", code);
    localStorage.setItem("clientEmail", clientEmail);
  }, [email, clientEmail, code]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tlclszm",
        "template_vud6j0p",
        form.current,
        "9Es0kUSqg2Dv28YFx"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Correcto",
            text: "El correo fué enviado correctamente",
            icon: "success",
            heightAuto: false,
          });
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: "El correo no fué enviado correctamente",
            icon: "error",
            heightAuto: false,
          });
        }
      );
  };

  return (
    <div className="content_formulario-email">
      <form ref={form} onSubmit={sendEmail}>
        <div className="content_titulo">
          <h2>Enviar correos</h2>
        </div>
        <fieldset>
          <div className="content_input">
            <label>Ingresa tu correo</label>
            <input
              type="text"
              name="admin_email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="content_input">
            <label>Ingresa el código aquí!</label>
            <input
              type="text"
              name="user_code"
              onChange={(e) => setCode(e.target.value)}
              value={code}
            />
          </div>
          <div className="content_input">
            <label>Correo del cliente</label>
            <input
              type="email"
              name="user_email"
              onChange={(e) => setClientEmail(e.target.value)}
              value={clientEmail}
            />
          </div>
        </fieldset>
        <div className="content_boton">
          <button>Enviar correo</button>
        </div>
      </form>
    </div>
  );
};
