import "./FormCadastro.css";
import { useState } from "react";
import imagem from "/imagem__tela__login.png";

const FormCadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleClickValidateFormulario(event) {
    event.preventDefault();

    if (nome === "" || email === "" || pass === "") {
      alert("Preencha todos os campos [nome, email, senha]");
      return;
    } else {
      alert(
        "Preenchido com sucesso! Mas a funcionalidade está sendo implementada!"
      );
    }
  }

  return (
    <div className="container-form">
      <div className="container__form--image">
        <img
          src={imagem}
          alt="Imagem lateral ao formulário - um usuário acessando computador e celular"
        />
      </div>

      <form action="" onSubmit={handleClickValidateFormulario}>
        <div className="container__form--fields">
          <h3 className="title__section">Cadastro de usuário</h3>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="nome">Email</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="pass">Senha</label>
          <input
            type="password"
            name="pass"
            placeholder="Digite sua senha"
            onChange={(e) => setPass(e.target.value)}
          />

          <button
            type="submit"
            onClick={handleClickValidateFormulario}
            className="btn-form"
          >
            Cadastre-se
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormCadastro;
