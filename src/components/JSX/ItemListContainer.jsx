import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id: categoria } = useParams();

  useEffect(() => {
    const obtenerItems = () => {
      fetch('https://pokeapi.co/api/v2/pokemon-species?limit=64') 
        .then(response => response.json())
        .then(data => {
          const promesas = data.results.map(species =>
            fetch(species.url).then(res => res.json())
          );

          Promise.all(promesas).then(resultados => {
            const primerasEvoluciones = resultados.filter(species => species.evolves_from_species === null); 
            const evoluciones = resultados.filter(species => species.evolves_from_species !== null);
          // El JSON de la API contiene un campo "evolves_from_species" que indica si evoluciono de algun pokemon, al ser NULL no evoluciono.
            const resultadosFiltrados = categoria === 'sin-evolucionar' ? primerasEvoluciones : (categoria === 'evolucionado' ? evoluciones : resultados);
            const promesasPokemon = resultadosFiltrados.map(species =>
              fetch(`https://pokeapi.co/api/v2/pokemon/${species.name}`).then(res => res.json()) 
            ); 
            

            Promise.all(promesasPokemon).then(pokemones => {
              setItems(pokemones);
            });
          });
        });
    };

    obtenerItems();
  }, [categoria]);

  return (
    <div className="item-list-container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
