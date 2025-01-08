import { useState } from 'react'
import Input from '../input'

import MagnifyingGlassImage from '../../icons/search.png'

import './styles.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [hasFocus, setHasFocus] = useState(false)
  const searchContainerStyles: React.CSSProperties = {
    borderColor: hasFocus ? 'rgba(128, 128, 128, 0.7)' : undefined
  }
  const imageStyles: React.CSSProperties = {
    opacity: hasFocus ? '0.6' : undefined
  }

  return (
    <div className='searchContainer' style={searchContainerStyles}>
      <img
        className='magnifyingGlass'
        style={imageStyles}
        src={MagnifyingGlassImage}
      />
      <Input
        onBlur={() => setHasFocus(false)}
        onChange={setSearchTerm}
        onFocus={() => setHasFocus(true)}
        value={searchTerm}
      />
    </div>
  )
}

export default Search
