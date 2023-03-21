import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Cliente from '../interface/Cliente';

function Consulta() {
  const [data, setData] = useState<Cliente[]>([]);

  useEffect(() => {
    fetch("api/schedule", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function removePessoa() {
    console.log("Clicou em remover");
  }

  return (
    <div className="ajust">
      <div className="mensagem"></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td scope="col">Nome</td>
            <td scope="col">Telefone</td>
            <td scope="col">Data de Nascimento</td>
            <td scope="col">CPF</td>
            <td scope="col">Email</td>
            <td scope="col">Ações</td>
          </tr>
        </thead>
        <tbody>
          {data.map((cliente) => {
            return (
              <tr key={cliente.id}>
                <td>{cliente.name}</td>
                <td>{cliente.numbers}</td>
                <td>{cliente.date_born}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>
                  <Link
                    className="ver btn btn-outline-primary"
                    to={"/visualizar/" + cliente.id}>
                    Ver
                  </Link>{" "}
                  <Link
                    className="editar btn btn-outline-primary"
                    to={"/editar/" + cliente.id}>
                    Editar
                  </Link>{" "}
                  <button
                    className="deletar btn btn-outline-danger"
                    onClick={() => {
                      removePessoa();
                    }}>
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pessoa"></div>
    </div>
  );
}

export default Consulta;
