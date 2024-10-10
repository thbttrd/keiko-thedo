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
  const [filterValue, setFilterValue] = React.useState("")
  const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])

  React.useEffect(() => {
    fetchPokemons().then(pokemonData => {
      updatePokemonList(pokemonData)
    })
  }, [])

  function filterPokemonsByName(pokemons: PokemonInfo[], name: string): PokemonInfo[] {
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <label htmlFor="pokemonFilter"> Choisis ton pokemon</label>
      <input
        id="pokemonFilter"
        className={styles.input}
        onChange={onInputChange}
        placeholder="Id du Pokemon"
        value={filterValue}
      />
      {filterPokemonsByName(pokemonList, filterValue).map(pokemon => {
        return <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
      })}
    </div>
  )
}
