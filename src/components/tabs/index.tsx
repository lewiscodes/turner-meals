import { useState } from "react";
import './styles.css'

interface ITabsProps {
  readonly tabs: ITab[]
}

export interface ITab {
  readonly id: number,
  readonly label: string;
  readonly Component: React.ReactNode
}

const Tabs = ({ tabs }: ITabsProps) => {
  const [selectedTab, setSelectedTab] = useState(1)
  const Component = tabs.find(tab => tab.id === selectedTab)?.Component

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab =>
          <Tab
            {...tab}
            key={tab.id}
            isSelected={tab.id === selectedTab}
            onClick={() => setSelectedTab(tab.id)}
          />
        )}
      </div>
      <div className="component">{Component}</div>
    </div>
  )
}

interface ITabProps extends ITab {
  readonly isSelected: boolean;
  readonly onClick: () => void;
}

const Tab = ({ label, isSelected, onClick }: ITabProps) => {
  const styles = {
    boxShadow: isSelected ? '0 4px 6px rgba(0, 123, 255, 0.2)' : undefined,
    textDecoration: isSelected ? 'underline': undefined
  }
  return (
    <div className="tab" style={styles} onClick={onClick}>{label}</div>
  )
}

export default Tabs