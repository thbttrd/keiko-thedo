import styles from "./Home.module.css"

const pokeUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
const pokeName = "Carapuce"
const pokeId = 7

export const Home = () => {
  return (
    <div className={styles.intro}>
      <img src={pokeUrl}></img>
      <p>Name: {pokeName}</p>
      <p>Number: {pokeId} </p>
    </div>
  )
}
