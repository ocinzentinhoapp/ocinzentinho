import React, { useEffect, useState } from "react";
import logoParaTemaClaro from "../assets/modobranco.png"; 
import logoParaTemaEscuro from "../assets/modopreto.png"; 

export default function Navbar({ setTheme, toggleContrast, increaseFont, decreaseFont }) {
  const [currentTheme, setCurrentTheme] = useState("light"); 

  useEffect(() => {
    if (!document.body.classList.contains("theme-dark") && !document.body.classList.contains("theme-contrast")) {
      document.body.classList.add("theme-light");
    }

    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("theme-dark") || document.body.classList.contains("theme-contrast")) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        borderBottom: "3px solid var(--accent)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
      aria-label="Barra de navegação principal"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={currentTheme === "light" ? logoParaTemaClaro : logoParaTemaEscuro}
          alt="Logo do Cinzentinho App"
          style={{ height: "48px", width: "auto" }}
        />
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button className="btn" onClick={() => setTheme("light")} aria-label="Modo claro">Claro</button>
        <button className="btn" onClick={() => setTheme("dark")} aria-label="Modo escuro">Escuro</button>
        <button className="btn" onClick={() => setTheme("contrast")} aria-label="Modo alto contraste">Contraste -</button>
        <button className="btn" onClick={toggleContrast} aria-label="Alternar alto contraste alternativo">Contraste +</button>
        <button className="btn" onClick={increaseFont} aria-label="Aumentar fonte">Texto+</button>
        <button className="btn" onClick={decreaseFont} aria-label="Diminuir fonte">Texto-</button>
      </div>
    </nav>
  );
}
