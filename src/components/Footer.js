import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "12px",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        textAlign: "center",
        fontSize: "14px",
        borderTop: "2px solid var(--accent)",
        zIndex: 999
      }}
      aria-label="Rodapé"
    >
      <p style={{ margin: "4px 0" }}>
        “Se é acessível para que tem deficiência, é acessível para todos.”
      </p>
      <p style={{ margin: 0 }}>
        O CINZENTINHO © 2025 todos os direitos reservados
      </p>
    </footer>
  );
}
