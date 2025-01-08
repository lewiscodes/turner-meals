import { useState } from "react";
import { IMethodStep } from "../../types/recipies"
import Card from "../card";
import bakeImage from '../../icons/bake.png'
import cookingImage from '../../icons/cooking.png'
import './styles.css'

interface IMethodProps {
  readonly methodSteps: IMethodStep[]
}

const Method = ({ methodSteps }: IMethodProps) => {
  return methodSteps.map((step, index) => <MethodStep key={index} index={index + 1} step={step} />)
}

interface IMethodStepProps {
  readonly index: number;
  readonly step: IMethodStep;
}

const MethodStep = ({ index, step }: IMethodStepProps) => {
  const [isDone, setIsDone] = useState(false)
  const handleCardClick = () => setIsDone(oldState => !oldState)
  const paragraphStyle: React.CSSProperties = {
    textDecoration: isDone ? 'line-through' : undefined,
    color: isDone ? '#ccc' : undefined
  }
  const imageStyle: React.CSSProperties = {
    opacity: isDone ? 0.2 : undefined
  }

  return (
    <Card onClick={handleCardClick}>
      <div className="stepContainer">
        <div className="descriptionContainer">
          <p style={paragraphStyle}>{index}.</p>
          <p style={paragraphStyle}>{step.description}</p>
        </div>
        <img className="icon" style={imageStyle} src={step.step === 'prep' ? bakeImage : cookingImage} />
      </div>
    </Card>
  )
}
  
export default Method
  