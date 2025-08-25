import { React, useState, UseEffect, useEffect } from "react";
import "./styles.css";

/* Oque deve ser feito:
Passe dados reais dessa API url:""
Substitua os dados estáticos de exemplo consumindo a API.
Pode usar axios
15 min ( apartir da etapa 3)
*/

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    function loadApi() {
      // fiz uma func para carregar a URL
      let url = "https://jsonplaceholder.typicode.com/users"; // passei a url para uma variavel
      fetch(url) //requisição aqui abaixo dele é uma promisse ( como try\catch)
        .then((r) => r.json()) //caso de sucesso / r é representado por resultado com função anonima / / transforma o r em um json
        .then((json) => {
          // jogo pra dentro de um array
          console.log(json);
          setUser(json);
        });
    }

    loadApi();
  }, []);

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
          {/* <article className="card">
            <div className="avatar">JD</div>
            <div className="info">
              <div className="name">
                John Doe <span className="meta">@johndoe</span>
              </div>
              <div className="meta">john.doe@acme.com</div>
              <div className="badge-row">
                <span className="badge">🏢 ACME Corp</span>
                <span className="badge">📍 Springfield</span>
              </div>
            </div>
          </article> */}
          {user.map((item) => {
            return (
              <article key={item.id} className="card">
                <div className="avatar">JD</div>
                <div className="info">
                  <div className="name">
                    <span className="name">{item.name}</span>
                    <br />
                    <span className="meta">@ {item.username}</span>
                  </div>
                  <div className="meta">E-mail: {item.email}</div>
                  <div className="badge-row">
                    <span className="badge">🏢 {item.address.street}</span>
                    <span className="badge">📍 {item.address.city}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Paginação opcional — deixe vazio por enquanto */}
        <nav id="pagination" className="pagination" aria-label="Paginação" />
      </main>
    </>
  );
}
