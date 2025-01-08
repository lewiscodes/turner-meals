import { useEffect, useState } from "react";
import { IRecipie } from "../../types/recipies";
import Tabs, { ITab } from "../tabs";
import RecipieHeader from "../recipieHeader";
import Ingredients from "../ingredients";
import Method from "../method";

interface IContainerProps {
  readonly recipie: IRecipie;
}

const getIsMobile = () => window.innerWidth <= 768

const Container = ({ recipie }: IContainerProps): JSX.Element => {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile)

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const tabs: ITab[] = [
    { id: 1, label: 'Ingredients', Component: <Ingredients ingredients={recipie.ingredients} /> },
    { id: 2, label: 'Method', Component: <Method methodSteps={recipie.method} /> }
  ]

  return (
    <>
      <RecipieHeader recipie={recipie} />
      {isMobile ? <Tabs tabs={tabs} /> : <div>Container - Desktop</div>}
    </>
  )   
}

export default Container