import React from "react";

export default function ControlsAcessibilidade({ highContrast, toggleContrast, resetPreferences }) {
  return (
    <div style={{display:"flex", justifyContent:"center", gap:8, marginBottom:12}}>
      <button className="btn" onClick={toggleContrast} aria-pressed={highContrast}>
        {highContrast ? "Modo contraste normal" : "Modo alto contraste"}
      </button>

      <button className="btn" onClick={resetPreferences} aria-label="Redefinir preferências">
        Redefinir preferências
      </button>
    </div>
  );
}
