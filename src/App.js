import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

/* Oque deve ser feito:
Passe dados reais dessa API url:""
Substitua os dados estáticos de exemplo consumindo a API.
Pode usar axios
15 min ( apartir da etapa 3)
*/

export default function App() { 
  const [users, setUsers] = useState(null); // Estado que gerencia os usuários 
  const [error, setError] = useState(false); // Estado que gerencia os erros

  useEffect(() => { // Hook que roda uma ou mais funções quando ocorre algo no ciclo de vida do componente
    async function fetchUsers() { // async e await são formas de lindar com código assíncrono, ou seja, coisas que demoram pra acontecer
      try { // Inicia uma forma de tratamento de erros, se der algum erro, ele não quebra o programa, mas passa o erro para o bloco catch
        const response = await axios.get( // Cria a função response pra receber o GET da api
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data); // Coloca o que pegou do response(axios GET) e armazena no estado Users
      } catch (err) { // Se houver erro...
        setError(err.message); // Armazena a mensagem de erro no estado Error
      }
    }
    fetchUsers(); // Executa a função
  }, []); // useEffect sem dependências

   if (error) return <p>Erro: {error}</p>; //Se Error for true, exibe o err.message em Error

  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>Catálogo de Usuários</h1>
          <p className="subtitle">
            Estrutura pronta. Depois, substitua o conteúdo de <code>#grid</code>{" "}
            com dados da API.
          </p>
        </div>
      </header>

      <main className="container">
        {/* Grade onde você vai mapear os usuários futuramente */}
        <section id="grid" className="grid" aria-label="Lista de usuários">
          {/* CARD ESTÁTICO DE EXEMPLO */}
          {!users ? (
            <p>Carregando...</p>
          ) : (
            users.map(user => (
              <article className="card" key={user.id}> {/* A exibição dos dados utiliza a váriavel "user", resultado do map do estado Users, e anexa os atributos relacionados ao json */}
                <div className="avatar">{user.username.split(' ').map(n => n[0]).join('')}</div>
                <div className="info">
                  <div className="name">
                    {user.name} <span className="meta">{user.username}</span>
                  </div>
                  <div className="meta">{user.email}</div>
                  <div className="badge-row">
                    <span className="badge">🏢 {user.company.name}</span>
                    <span className="badge">📍 {user.address.city}</span>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>

        {/* Paginação opcional — deixe vazio por enquanto */}
        <nav id="pagination" className="pagination" aria-label="Paginação" />
      </main>
    </>
  );
}
