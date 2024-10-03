import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"

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

const pokemonElt = pokemonList.map(pokemon => {
  return <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
})

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      {pokemonElt}
    </div>
  )
}
