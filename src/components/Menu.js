import React from "react";

export default function Menu({ onSelect }) {
  return (
    <section className="app" aria-label="Menu de temas">
      <header>
        <h2 tabIndex="0">Escolha um tema</h2>
        <p className="lead" style={{marginBottom:12}}>Toque numa opção para saber mais.</p>
      </header>

      <div className="actions" role="navigation" aria-label="Opções do menu">
        <button className="btn" onClick={() => onSelect("direitos")} aria-label="Seus direitos como pessoa com deficiência">
          Seus direitos como PCD
        </button>

        <button className="btn" onClick={() => onSelect("justica")} aria-label="Justiça gratuita">
          Justiça gratuita
        </button>

        <button className="btn" onClick={() => onSelect("discriminacao")} aria-label="O que fazer em caso de discriminação">
          O que fazer em caso de discriminação
        </button>
      </div>
    </section>
  );
}
