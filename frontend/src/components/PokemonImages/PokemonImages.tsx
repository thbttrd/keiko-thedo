import React from "react"
import styles from "./PokemonImages.module.css"

interface PokemonImagesProps {
  id: string
}

export const PokemonImages: React.FC<PokemonImagesProps> = ({ id }) => {
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
