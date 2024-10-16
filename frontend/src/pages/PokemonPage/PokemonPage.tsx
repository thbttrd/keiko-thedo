import React from "react"
import { useParams } from "react-router-dom"
import styles from "./PokemonPage.module.css"
import { Loader } from "components/Loader"
import { Pokemon } from "components/Pokemon"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

const fetchPokemonById = async (id: string) => {
  const response = await fetch(`http://localhost:8000/pokemon/${id}`, {
    headers: { accept: "application/json" },
  })
  if (!response.ok) {
    throw new Error("Failed to fetch the Pokemon")
  }
  const data = await response.json()
  return data
}

const PokemonImages = ({ id }: { id: string }) => {
  const pokeImgBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  const pokeShinyImgUrl = `${pokeImgBaseUrl}/shiny/${id}.png`
  const pokeShinyBackImgUrl = `${pokeImgBaseUrl}/back/shiny/${id}.png`
  const pokeBackImgUrl = `${pokeImgBaseUrl}/back/${id}.png`
  const pokeImgFrontUrl = `${pokeImgBaseUrl}/${id}.png`

  return (
    <div className={styles.pokemonImgContainer}>
      <img src={pokeImgFrontUrl} alt={`Pokemon ${id}`} />
      <img src={pokeBackImgUrl} alt={`Pokemon ${id} back`} />
      <img src={pokeShinyImgUrl} alt={`Shiny Pokemon ${id}`} />
      <img src={pokeShinyBackImgUrl} alt={`Shiny Pokemon ${id} back`} />
    </div>
  )
}

export const PokemonPage = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = React.useState<PokemonInfo | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState("")

  React.useEffect(() => {
    if (id) {
      fetchPokemonById(id)
        .then(pokemonData => {
          setPokemon(pokemonData)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
          setErrorMessage("Error fetching the Pokémon")
        })
    }
  }, [id])

  return (
    <div className={styles.pokemonPage}>
      {isLoading ? (
        <Loader />
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : pokemon ? (
        <div className={styles.pokemonInfo}>
          <h1>{pokemon.name}</h1>
          <PokemonImages id={id!} />
          <Pokemon
            name={pokemon.name}
            id={pokemon.id}
            key={pokemon.id}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        </div>
      ) : null}
    </div>
  )
}
