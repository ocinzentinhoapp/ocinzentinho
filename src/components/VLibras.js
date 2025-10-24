import React, { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    if (document.getElementById("vlibras-script")) return;

    const script = document.createElement("script");
    script.id = "vlibras-script";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;

    script.onload = () => {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div
      vw="true"
      className="enabled"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <div vw-access-button className="active"></div>
      <div vw-plugin-wrapper>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
