import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

import TelaInicial from "./components/TelaInicial";
import Menu from "./components/Menu";
import Conteudo from "./components/Conteudo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VLibras from "./components/VLibras";

import conteudos from "./data/conteudos";

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "pt-BR";
  u.rate = 1;
  window.speechSynthesis.speak(u);
}

function stopSpeak() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function App() {
  const [view, setView] = useState("home"); 
  const [selectedKey, setSelectedKey] = useState(null);
  const [fontSize, setFontSize] = useState(18);
  const [highContrast, setHighContrast] = useState(false);
  const [announcer, setAnnouncer] = useState("");

  useEffect(() => {
    document.documentElement.style.setProperty("--font-size-base", `${fontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) document.documentElement.classList.add("high-contrast");
    else document.documentElement.classList.remove("high-contrast");
  }, [highContrast]);

  useEffect(() => {
    if (announcer) {
      const el = document.getElementById("announcer");
      if (el) el.textContent = announcer;
      const t = setTimeout(() => {
        if (el) el.textContent = "";
        setAnnouncer("");
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [announcer]);

  const openMenu = () => {
    setView("menu");
    setAnnouncer("Menu aberto");
  };
  const openContent = (key) => {
    setSelectedKey(key);
    setView("content");
    setAnnouncer(conteudos[key].titulo);
  };
  const goHome = () => {
    setView("home");
    setSelectedKey(null);
    setAnnouncer("Tela inicial");
  };

  const increaseFont = () => setFontSize((s) => Math.min(28, s + 2));
  const decreaseFont = () => setFontSize((s) => Math.max(14, s - 2));
  const toggleContrast = () => setHighContrast((h) => !h);

  const speakWrapper = (text) => {
    setAnnouncer("Lendo conteúdo");
    speak(text);
  };
  const stopWrapper = () => {
    stopSpeak();
    setAnnouncer("Leitura finalizada");
  };

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark", "theme-contrast");
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div className="app-container">
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <div id="announcer" aria-live="polite" className="sr-only"></div>

      <Navbar
        setTheme={setTheme}
        toggleContrast={toggleContrast}
        increaseFont={increaseFont}
        decreaseFont={decreaseFont}
      />

      <main id="main" style={{ flex: 1 }}>
        {view === "home" && <TelaInicial onStart={openMenu} />}

        {view === "menu" && (
          <div
            className="app"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "70vh",
              textAlign: "center",
            }}
          >
            <Menu onSelect={openContent} />
            <div style={{ marginTop: 20 }}>
              <button className="btn" onClick={goHome}>
                Voltar
              </button>
            </div>
          </div>
        )}

        {view === "content" && selectedKey && (
          <div className="app" style={{ minHeight: "70vh" }}>
            <Conteudo
              item={conteudos[selectedKey]}
              onBack={() => setView("menu")}
              speak={speakWrapper}
              stopSpeak={stopWrapper}
              increaseFont={increaseFont}
              decreaseFont={decreaseFont}
            />
          </div>
        )}
      </main>


      <Footer />
    </div>
  );
}

export default App;
