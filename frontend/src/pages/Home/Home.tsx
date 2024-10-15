import React from "react"
import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import { Loader } from "components/Loader"
import { Link } from "react-router-dom"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

const fetchPokemons = async () => {
  const response = await fetch("http://localhost:8000/pokemons", {
    headers: { accept: "application/json" },
  })
  const data = await response.json()
  return data
}

export const Home = () => {
  const [pokemonList, setPokemonList] = React.useState<PokemonInfo[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [errorMessage, setErrorMessage] = React.useState("")

  React.useEffect(() => {
    fetchPokemons()
      .then(pokemonData => {
        setPokemonList(pokemonData)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        setErrorMessage("Error fetching pokemons")
        console.log(errorMessage)
      })
  }, [])

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      {(() => {
        if (isLoading) {
          return <Loader />
        } else if (errorMessage) {
          return <p>{errorMessage}</p>
        } else {
          return (
            <div className={styles.pokegrid}>
              {pokemonList.map(pokemon => (
                <Link className={styles.linkreset} to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                  <Pokemon
                    name={pokemon.name}
                    id={pokemon.id}
                    key={pokemon.id}
                    weight={pokemon.weight}
                    height={pokemon.height}
                  />
                </Link>
              ))}
            </div>
          )
        }
      })()}
    </div>
  )
}
