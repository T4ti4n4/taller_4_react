import React from 'react';

const ButtonClick = () => {
  const cambioButton= () => {
    alert("¡Botón clickeado!");
  };

  return (
    <button onClick={cambioButton}>
      Haz clic aquí
    </button>
  );
};

export default ButtonClick;
