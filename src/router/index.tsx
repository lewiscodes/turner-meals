import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomeIcon from '../icons/home.png'

import Home from '../pages/Home'
import Recipie from '../pages/Recipie'

import './styles.css'

const Router = () => {
  return (
    <HashRouter>
      <Link to="/">
        <img className="homeIcon" src={HomeIcon} />
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipie/:id" element={<Recipie />} />
      </Routes>
    </HashRouter>
  );
}

export default Router