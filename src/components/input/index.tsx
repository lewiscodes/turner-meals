import './styles.css'

interface IInputProps {
  readonly value: string | undefined;
  readonly onBlur?: () => void;
  readonly onChange: (value: string) => void
  readonly onFocus?: () => void;
}

const Input = ({ onBlur, onChange, onFocus, value }: IInputProps) => {
  return (
    <input
      className='textInput'
      onBlur={onBlur}
      onChange={e => onChange(e.target.value)}  
      onFocus={onFocus}
      placeholder='Search...'
      type='search'
      value={value}
    />
  )
}

export default Input