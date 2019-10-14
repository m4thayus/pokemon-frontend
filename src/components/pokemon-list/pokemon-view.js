import React from "react"

function PokemonView(props){
    let { pokemon } = props
    return (
       <li>{pokemon.date}</li> 
    )
}

export default PokemonView