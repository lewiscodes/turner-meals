export interface IRecipie {
  readonly id: number;
  readonly name: string;
  readonly image: string;
  readonly ingredients: IIngredient[];
  readonly method: IMethodStep[];
  readonly minutes: number;
  readonly tags: string[];
}

export interface IIngredient {
  readonly name: string;
  readonly amount: number;
  readonly measure: Measure;
}

export type Measure = 'grams' | 'tsp' | 'tbsp' | 'ml' | 'pint' | 'tin' | 'bunch' | 'item'

export interface IMethodStep {
  readonly step: 'prep' | 'cooking'
  readonly description: string;
}