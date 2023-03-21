import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Cadastrar.module.css';

function Cadastro() {
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    name: "",
    numbers: "",
    data_born: "",
    cpf: "",
    email: "",
  });

  const valorInput = (e: { target: { name: any; value: any; }; }) =>
    setCliente({ ...cliente, [e.target.name]: e.target.value });

  function Cadastro2(cliente: any): void {
    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...cliente
      }),
      redirect: "follow"
    };
  
    try {
      fetch("http://localhost:3001/data/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          navigate("/consulta");
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className={styles.container}>
      <h2>Cadastro de clientes</h2>
      <form>
        <div className={styles.form_control}>
          <label>Nome</label>
          <input
            onChange={valorInput}
            type="text"
            name="name"
            id="name"
            placeholder="Digite um nome"
          />
        </div>
        <div className={styles.form_control}>
          <label>Telefone</label>
          <input
            onChange={valorInput}
            type="text"
            name="numbers"
            id="numbers"
            placeholder="Digite um telefone"
          />
        </div>
        <div className={styles.form_control}>
          <label>CPF</label>
          <input
            onChange={valorInput}
            type="string"
            name="cpf"
            id="cpf"
            placeholder="Digite um cpf"
          />
        </div>
        <div className={styles.form_control}>
          <label>Data Nascimento</label>
          <input
            onChange={valorInput}
            type="date"
            name="date_born"
            id="date_born"
            placeholder="Digite um Data Nascimento"
          />
        </div>
        <div className={styles.form_control}>
          <label>E-mail</label>
          <input
            onChange={valorInput}
            type="email"
            name="email"
            id="email"
            placeholder="Digite um e-mail"
          />
        </div>
        <button
          id="btn-cadastrar"
          className="btn btn-success"
          type="button"
          onClick={() => Cadastro2(cliente)}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
