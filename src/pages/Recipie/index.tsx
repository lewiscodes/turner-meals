import { useRef } from "react"
import { useParams } from "react-router-dom"
import Recipies from '../../data/recipies'
import Container from "../../components/container"

const getRecipie = (id: number) => {
  return Recipies.find(recipie => recipie.id === id)
}

const Recipie = () => {
  const { id } = useParams()
  const recipieId = parseInt(id || '')
  const recipie = useRef(getRecipie(recipieId))

  if (!id || !recipieId || !recipie.current) {
    return <p>Invalid Recipie Id.</p>
  }

  return (
    <Container recipie={recipie.current} />
  )
}

export default Recipie