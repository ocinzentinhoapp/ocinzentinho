import React, { useEffect, useRef, useState } from "react";

export default function Conteudo({ item, onBack, speak, stopSpeak, increaseFont, decreaseFont }) {
  const titleRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }

    function handleEnd() {
      setIsSpeaking(false);
    }
    window.speechSynthesis.onend = handleEnd;
    window.speechSynthesis.oncancel = handleEnd;

    return () => {
      window.speechSynthesis.onend = null;
      window.speechSynthesis.oncancel = null;
    };
  }, [item]);

  const onSpeak = () => {
    setIsSpeaking(true);
    speak(item.texto);
  };

  const onStop = () => {
    setIsSpeaking(false);
    stopSpeak();
  };

  return (
    <article className="app card" aria-labelledby="titulo-conteudo" role="article">
      <h2 id="titulo-conteudo" tabIndex="-1" ref={titleRef}>{item.titulo}</h2>
      <p>{item.texto}</p>

      <div className="controls" style={{marginTop:12}}>
        <button className="btn" onClick={onSpeak} aria-pressed={isSpeaking} aria-label="Ouvir o texto">🔊 Ouvir</button>
        <button className="btn" onClick={onStop} aria-label="Parar leitura">◼ Parar</button>
        <button className="btn" onClick={increaseFont} aria-label="Aumentar fonte">A+</button>
        <button className="btn" onClick={decreaseFont} aria-label="Diminuir fonte">A-</button>
        <button className="btn" onClick={onBack} aria-label="Voltar ao menu">↩ Voltar</button>
      </div>
    </article>
  );
}
