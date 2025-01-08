import './styles.css'

interface ICardProps {
  readonly children: React.ReactNode;
  readonly onClick: () => void;
}

const Card = ({ children, onClick }: ICardProps) => {
  return (
    <div className="card" onClick={onClick}>{children}</div>
  )
}

export default Card