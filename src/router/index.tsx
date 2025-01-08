import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home'
import Recipie from '../pages/Recipie'

import Nav from "../components/nav";

const Router = () => {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipie/:id" element={<Recipie />} />
      </Routes>
    </HashRouter>
  );
}

export default Router