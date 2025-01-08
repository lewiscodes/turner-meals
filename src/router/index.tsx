import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home'
import Recipie from '../pages/Recipie'

const Router = () => {

  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipie/:id" element={<Recipie />} />
        </Routes>
    </HashRouter>
  );
}

export default Router