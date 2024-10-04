import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React from "react"

const pokemonList = [
  {
    name: "Carapuce",
    id: 7,
  },
  {
    name: "Carabaffe",
    id: 8,
  },
  {
    name: "Tortank",
    id: 9,
  },
]

export const Home = () => {
  const [filterValue, setFilterValue] = React.useState("")

  function filterPokemonsByName(pokemons: Pokemon[], name: string): Pokemon[] {
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  interface Pokemon {
    name: string
    id: number
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
