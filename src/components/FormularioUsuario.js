import React, { useState } from "react";

function FormularioUsuario() {
  const [nombre, setNombre] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    alert(`Nombre completo: ${nombre}`);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
      </div>
      <br />
      <button type="submit">Ver nombre en pantalla</button>
    </form>
  );
}

export default FormularioUsuario;
