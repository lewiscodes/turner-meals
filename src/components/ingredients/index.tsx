import sortBy from 'lodash/sortBy';

import { IIngredient } from "../../types/recipies"

import './styles.css'
import { formatMeasure } from './lib';

interface IIngredientsProps {
  readonly ingredients: IIngredient[];
}

const Ingredients = ({ ingredients }: IIngredientsProps) => {
  const sortedIngredients = sortBy(ingredients, ingredient => ingredient.name)
  return (
    <table className='ingredientsTable'>
      <tbody>
        {sortedIngredients.map((ingredient, index) => <Ingredient key={index} ingredient={ingredient} />)}
      </tbody>
    </table>
  )
}

interface IIngredientProps {
  readonly ingredient: IIngredient;
}

const Ingredient = ({ ingredient }: IIngredientProps) => {
  return (
    <tr>
      <th className='ingredientName' scope='row'>{ingredient.name}</th>
      <th className='ingredientAmount'>{`${ingredient.amount} ${formatMeasure(ingredient.measure)}`}</th>
    </tr>
  )
}

export default Ingredients
