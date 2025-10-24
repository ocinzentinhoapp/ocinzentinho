import React from "react";
import VideoLibras from "./VideoLibras";


export default function TelaInicial({ onStart }) {
  return (
    <main 
      id="main" 
      className="app"
      style={{
        minHeight: "calc(100vh - 160px)", 
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
      }}
      aria-label="Tela inicial"
    >
      <h2 tabIndex="0"> Bem-vindo(a) ao Cinzentinho App</h2>
      <p style={{maxWidth:"600px", marginBottom:"20px"}}>
        Uma plataforma acessível feita para todas as pessoas.  
        Aqui você encontra informações sobre direitos, justiça gratuita e como agir em situações de discriminação.
      </p>

     <VideoLibras 
  src="/libras-inicial.mp4" 
  descricao="Introdução em LIBRAS"
/>

      <button 
        className="btn" 
        onClick={onStart} 
        aria-label="Ir para o menu principal"
        style={{fontSize:"20px", padding:"18px 24px"}}
      >
        Começar
      </button>
    </main>
  );
}
