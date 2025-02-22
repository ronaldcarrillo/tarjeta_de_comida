import { useState } from 'react';
import './plato.css';
const Plato = ({ img, titulo, ingrediente1, ingrediente2, ingrediente3 }) => {
  const [contador, setContador] = useState(0);
  return (
    <div className="tarjeta">
      <div className="foto">
        <img src={`/imagenes/${img}`} alt="" />
      </div>
      <h2>{titulo}</h2>
      <ul>
        <li>{ingrediente1}</li>
        <li>{ingrediente2}</li>
        <li>{ingrediente3}</li>
      </ul>
      <button onClick={() => setContador(contador + 1)}>Llevar {contador}</button>
    </div>
  );
};
export default Plato;
