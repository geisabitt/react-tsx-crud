import { useEffect, useState } from 'react';

import Cliente from '../interface/Cliente';

function ConsultaSaperx() {
  const [data, setData] = useState<Cliente[]>([]);
  const [error, setError] = useState<string | null>(null); //alteração aqui

  useEffect(() => {
    async function fetchData() { //alteração aqui
      try {
        const response = await fetch("http://teste-frontend.saperx.com.br/api/schedule");
        if (!response.ok) {
          throw new Error('Não foi possível obter os dados da API');
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) { //alteração aqui
        console.log('error');
      }
    }
    fetchData(); //alteração aqui
  }, []);

  function removePessoa(id: string){
    console.log(id)
  }

  if (error) {
    return <div>Erro ao carregar os dados: {error}</div>; //alteração aqui
  }

  return (
    <div>
      <h1>Dados da API:</h1>
      {data.length ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>Email: {item.email}</p>
              <p>CPF: {item.cpf}</p>
              <p>Data de Nascimento: {item.date_born}</p>
              {Array.isArray(item.numbers) && item.numbers.length ? (
                <div>
                  <h3>Números:</h3>
                  <ul>
                    {item.numbers.map(number => (
                      <li key={number.id}>{number.number}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>Nenhum número encontrado.</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div>Carregando dados...</div>
      )}
    </div>
  );
}

export default ConsultaSaperx;
