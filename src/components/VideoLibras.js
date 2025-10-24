import React from "react";

export default function VideoLibras() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "240px",
        height: "auto",
        zIndex: 9999,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        backgroundColor: "#000"
      }}
    >
      <video
        src="/videos/libras-intro.mp4"
        controls
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto", display: "block" }}
        aria-label="Vídeo em Libras explicando o conteúdo da página"
      ></video>
    </div>
  );
}
