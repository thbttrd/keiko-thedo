import styles from "./Pokemon.module.css"

interface Props {
  name: string
  id: number
  weight: number
  height: number
}

export const Pokemon = ({ name, id, weight, height }: Props) => {
  const pokeBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  const pokeUrl = `${pokeBaseUrl}/${id}.png`

  return (
    <div className={styles.pokemon}>
      <img src={pokeUrl}></img>
      <p>Name: {name}</p>
      <p>Id: {id} </p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  )
}
