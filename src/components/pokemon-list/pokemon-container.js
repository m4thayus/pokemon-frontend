import React, { useState, useEffect } from "react"
import PokemonView from "./pokemon-view"

function PokemonContainer(props){
    const [pokemons, setPokemons] = useState([])

    useEffect(function getPokemons() {
        fetch('http://localhost:5000/Pokemons')
            .then(response => response.json())
            .then(obj => {
                setPokemons(obj)
            });
    }, [])

    return (
        <React.Fragment>
            {pokemons.map(pokemon => <PokemonView key={pokemon.id} pokemon={pokemon} />)}
        </React.Fragment>
    )
}

export default PokemonContainer