import styles from "./Pokemon.module.css"

interface Props {
  name: string
  id: number
  weight: number
  height: number
}

export const Pokemon = ({ name, id, weight, height }: Props) => {
  return (
    <div className={styles.pokemon}>
      <p>Name: {name}</p>
      <p>Id: {id} </p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  )
}
