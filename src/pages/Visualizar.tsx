import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Cliente from '../interface/Cliente';


function Visualizar() {
  const [cliente, setCliente] = useState<Cliente>({
    id: '',
    name: '',
    numbers: '',
    cpf: '',
    date_born: '',
    email: ''
  });

  const { id } = useParams<{ id: string }>();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3001/data/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((cliente: Cliente) => {
        console.log(cliente);
        setCliente(cliente);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  return (
    <div className="ajust">
      <table className="table visualizar">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr className="invisivel">
            <th key={cliente.id} scope="row">
              Nome:{" "}
            </th>
            <td>{cliente.id}</td>
          </tr>
          <tr>
            <th scope="row">Nome: </th>
            <td>{cliente.name}</td>
          </tr>
          <tr>
            <th scope="row">Telefone: </th>
            <td>{cliente.numbers}</td>
          </tr>
          <tr>
            <th scope="row">CPF: </th>
            <td>{cliente.cpf}</td>
          </tr>
          <tr>
            <th scope="row">Data Nascimento: </th>
            <td>{cliente.date_born}</td>
          </tr>
          <tr>
            <th scope="row">E-mail: </th>
            <td>{cliente.email}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>
              <Link to={"/consulta"}>Voltar</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Visualizar;
