import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styles from './Cadastrar.module.css';

function Editar() {
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    name: '',
    numbers: '',
    date_born: '',
    cpf: '',
    email: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`api/schedule/${id}`)
      .then((response) => response.json())
      .then((data) => setCliente(data))
      .catch((error) => console.log('error', error));
  }, [id]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    };
    fetch(`http://localhost:3001/data/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        navigate('/consulta');
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className={styles.container}>
      <h2>Editar de cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite um nome"
            value={cliente.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="numbers">Telefone</label>
          <input
            type="text"
            name="numbers"
            id="numbers"
            placeholder="Digite um telefone"
            value={cliente.numbers}
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="cpf">CPF</label>
          <input
            type="number"
            name="cpf"
            id="cpf"
            placeholder="Digite um CPF"
            value={cliente.cpf}
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="data_born">Data de nascimento</label>
          <input
            type="date"
            name="data_born"
            id="data_born"
            placeholder="Digite uma data de nascimento"
            value={cliente.date_born}
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite um e-mail"
            value={cliente.email}
            onChange={handleChange}
          />
        </div>
        <Link className="btn btn-outline-primary" to={"/consulta"}>
          Voltar
        </Link>{" "}
        <button
          id="btn-att-cadastro"
          className="btn btn-success"
          type="button"
          onClick={Editar}>
          Salvar
        </button>
      </form>
    </div>
  );
}
export default Editar;
