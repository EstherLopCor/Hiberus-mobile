import Personaje from "./Personaje";
import { useEffect, useState } from "react";

function List() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setcargando] = useState([true]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/user");
      const { results } = await data.json();
      setPersonajes(results);
      setcargando(false);
    }
    fetchData();
  }, [personajes.length]);
  return (
    <div>
      <h2>Personajes</h2>
      <div className="row">
        {cargando ? (
          <div>Cargando...</div>
        ) : (
          personajes.map((personaje) => (
            <Personaje
              key={personaje.id}
              name={personaje.name}
              origin={personaje.origin}
              image={personaje.image}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default List;
