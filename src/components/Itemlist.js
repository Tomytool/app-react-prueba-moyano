import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Items from './Items';



const Itemlist = ({ itemcompra }) => {

// inicio de la utiliozacion de la Api
  
const[allPokemons, setAllPokemons] = useState([])
const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

const getAllPokemons = async () => {
 const res = await fetch(loadMore)
 const data = await res.json()
console.log(data);
 setLoadMore(data.next)

 function createPokemonObject(results)  {
   results.forEach( async pokemon => {
     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
     const data =  await res.json()
     setAllPokemons( currentList => [...currentList, data])
     await allPokemons.sort((a, b) => a.id - b.id)
   })
 }
 createPokemonObject(data.results)
}

useEffect(() => {
getAllPokemons()
}, [])

// fin de la utilizacion de la Api



  const [agregarCarro, setagregarCarro] = useState(0);

  const incrementar = () => {
    setagregarCarro(agregarCarro + 1);
  };
  const decrementar = () => {
    setagregarCarro(agregarCarro - 1);
  };

  //   inicio de los estilos
  const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  return (
    <div>
      <p>{agregarCarro}</p>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={decrementar}>decrementar</button>
      <button onClick={() => itemcompra(agregarCarro)}>
        Agregar al carrito
      </button>
      <CardList>
        {allPokemons.map((pokemonStats, index) => (
          <Items
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
          />
        ))}
      </CardList>
    </div>
  );
};

export default Itemlist;
