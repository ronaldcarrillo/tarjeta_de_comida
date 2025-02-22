import './app.css';
import Plato from './Plato';

const App = () => {
  return (
    <div className="contenedor">
      <Plato
        titulo="Filete de Burro"
        ingrediente1="Carne de burro"
        ingrediente2="Tomate"
        ingrediente3="Cebolla"
        img="plato1.jpg"
      />
      <Plato
        titulo="Ensalada de Gusano"
        ingrediente1="Gusanos finos"
        ingrediente2="Tomate"
        ingrediente3="Espagueti"
        img="plato2.jpg"
      />
      <Plato
        titulo="Panqueque"
        ingrediente1="Harina de trigo"
        ingrediente2="Azucar"
        ingrediente3="Sal"
        img="plato3.jpg"
      />
    </div>
  );
};
export default App;
