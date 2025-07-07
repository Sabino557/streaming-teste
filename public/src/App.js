import React, { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const mockResults = ["The Boys", "Invincible", "Fallout", "Jack Ryan", "Upload"];

  const filteredResults = mockResults.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (title) => {
    if (!watchlist.includes(title)) setWatchlist([...watchlist, title]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>App de Streaming Personalizado</h1>
      <p><strong>Nome:</strong> Gabriel Sabino Marcão</p>
      <p><strong>RU:</strong> 4768774</p>

      <section>
        <h2>1. Busca de Séries</h2>
        <input
          placeholder="Buscar série..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <ul>
          {filteredResults.map((title) => (
            <li key={title}>
              {title}{" "}
              <button onClick={() => handleAdd(title)}>Adicionar à lista</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>2. Lista de Assistir (Watchlist)</h2>
        {watchlist.length === 0 ? (
          <p>Sua lista está vazia.</p>
        ) : (
          <ul>{watchlist.map((t) => <li key={t}>{t}</li>)}</ul>
        )}
      </section>
    </div>
  );
}
