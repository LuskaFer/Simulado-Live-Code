import { React, useState, useEffect } from "react";
import "./styles.css";

/* Oque deve ser feito:
Passe dados reais dessa API url:""
Substitua os dados estáticos de exemplo consumindo a API.
Pode usar axios
15 min ( apartir da etapa 3)
*/

export default function App() {
  const [user, setUser] = useState([]);

  // Hook useEffect: usado para executar efeitos colaterais (side effects) no React,
  // como chamadas de API, manipulação de eventos ou interações com o DOM.
  // O segundo argumento "[]" significa que o efeito só será executado UMA vez
  // após a montagem inicial do componente (comportamento similar ao componentDidMount).
  useEffect(() => {
    // Declaramos uma função assíncrona (async) para podermos usar "await"
    // dentro dela, deixando o código mais legível que promessas encadeadas (.then()).
    const loadApi = async () => {
      try {
        // Faz a requisição HTTP para a API Random User
        // "await" pausa a execução dessa função até a resposta ser recebida.
        const res = await fetch("https://randomuser.me/api/?results=500");

        // Converte a resposta da API para JSON.
        // "await" é usado de novo, porque o método .json() também retorna uma Promise.
        const data = await res.json();

        // Atualiza o estado "user" com os dados retornados pela API.
        // Aqui, "data.results" contém o array de usuários vindos da API.
        setUser(data.results);
      } catch (err) {
        // Caso aconteça algum erro na requisição ou conversão de dados,
        // ele será capturado aqui no bloco "catch" e exibido no console.
        console.error("Erro na API:", err);
      }
    };

    // Chamamos a função loadApi para executar a requisição.
    loadApi();

    // Array de dependências vazio []: garante que o useEffect seja executado apenas
    // uma vez quando o componente for montado.
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
          {user.map((item, index) => {
            return (
              // Card com grid de 2 colunas: avatar (64px) + info (1fr)
              <article key={index} className="card">
                {/* Coluna 1: avatar */}
                <div className="avatar">
                  <img src={item.picture.large} alt={item.name.first} />
                </div>

                {/* Coluna 2: nome + badges (rua/cidade) */}
                <div className="info">
                  {/* Nome */}
                  <div className="name">
                    {item.name.first} {item.name.last}
                  </div>

                  {/* Badges */}
                  <div className="badge-row">
                    <span className="badge">
                      🏢 {item.location.street.name}
                    </span>
                    <span className="badge">📍 {item.location.city}</span>
                  </div>
                </div>

                {/* E-mail FORA da .info para pegar as 2 colunas */}
                <div className="email">
                  <strong>E-mail:</strong>
                  <br />
                  {item.email}
                </div>
              </article>
            );
          })}
        </section>

        {/* Paginação opcional — deixe vazio por enquanto
        <nav id="pagination" className="pagination" aria-label="Paginação" /> */}
      </main>
    </>
  );
}
