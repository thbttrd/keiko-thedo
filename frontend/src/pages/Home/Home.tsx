import React from "react"
import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

function fetchPokemons() {
  return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
    response.json(),
  )
}

export const Home = () => {
  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])

  React.useEffect(() => {
    fetchPokemons().then(pokemonData => {
      updatePokemonList(pokemonData)
    })
  }, [])

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <div className={styles.pokegrid}>
        {pokemonList.map(pokemon => {
          return (
            <Pokemon
              name={pokemon.name}
              id={pokemon.id}
              key={pokemon.id}
              weight={pokemon.weight}
              height={pokemon.height}
            />
          )
        })}
      </div>
    </div>
  )
}
