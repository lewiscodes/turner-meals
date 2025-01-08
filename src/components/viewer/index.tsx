import { IRecipie } from "../../types/recipies"
import Method from "../method";

import './styles.css'

interface IViewerProps {
  readonly recipie: IRecipie;
}

const Viewer = ({ recipie }: IViewerProps) => {
  return (
    <div className="viewer">
      <h2>Method</h2>
      <Method methodSteps={recipie.method} />
    </div>
  )
}

export default Viewer