import { IRecipie } from '../../types/recipies'
import './styles.css'

interface IRecipieHeaderProps {
  readonly recipie: IRecipie;
}

const RecipieHeader = ({ recipie }: IRecipieHeaderProps) => {
  return (
    <div className='recipieHeader'>
      <h1>{recipie.name}</h1>
      <img className='image' src={`${import.meta.env.BASE_URL}/images/${recipie.image}`} />
    </div>
  )
}

export default RecipieHeader