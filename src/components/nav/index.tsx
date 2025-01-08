import { Link } from "react-router-dom";

import HomeIcon from '../../icons/home.png'

import './styles.css'
import Search from "../search";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="homeIcon" src={HomeIcon} />
      </Link>
      <Search />
    </nav>
  )
}

export default Nav;