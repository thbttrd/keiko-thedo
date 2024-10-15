import styles from "./Pokemon.module.css"

interface Props {
  name: string
  id: number
  weight: number
  height: number
  style?: string
  hideImg?: boolean
}

export const Pokemon = ({ name, id, weight, height, style, hideImg }: Props) => {
  const pokeBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  const pokeUrl = `${pokeBaseUrl}/${id}.png`

  return (
    <div className={style || styles.pokemon}>
      {!hideImg && <img src={pokeUrl}></img>}
      <p>Name: {name}</p>
      <p>Id: {id} </p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  )
}
