import React from "react";
import "./styles.css";

/* Oque deve ser feito:
Passe dados reais dessa API url:""
Substitua os dados estáticos de exemplo consumindo a API.
Pode usar axios
15 min ( apartir da etapa 3)
*/

export default function App() {
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
          <article className="card">
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
          </article>
        </section>

        {/* Paginação opcional — deixe vazio por enquanto */}
        <nav id="pagination" className="pagination" aria-label="Paginação" />
      </main>
    </>
  );
}
