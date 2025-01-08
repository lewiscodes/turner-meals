import { IRecipie } from '../../types/recipies'
import Ingredients from '../ingredients';
import './styles.css'

interface IRecipieHeaderProps {
  readonly isMobile: boolean;
  readonly recipie: IRecipie;
}

const RecipieHeader = ({ isMobile, recipie }: IRecipieHeaderProps) => {
  return (
    <div className='recipieHeader'>
      <h1>{recipie.name}</h1>
      <div className='header'>
        {!isMobile
          ? <div>
              <h2>Ingredients</h2>
              <Ingredients ingredients={recipie.ingredients} />
            </div>
          : <></>
        }
        <img className='image' src={`${import.meta.env.BASE_URL}/images/${recipie.image}`} />
      </div>
    </div>
  )
}

export default RecipieHeader