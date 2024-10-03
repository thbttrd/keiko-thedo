interface Props {
  name: string
  id: number
}

export const Pokemon = ({ name, id }: Props) => {
  const pokeBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  const pokeUrl = `${pokeBaseUrl}/${id}.png`

  return (
    <div>
      <img src={pokeUrl}></img>
      <p>Name: {name}</p>
      <p>Id: {id} </p>
    </div>
  )
}
