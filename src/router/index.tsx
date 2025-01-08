import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../pages/Home'
import Recipie from '../pages/Recipie'

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/recipie/:id" element={<Recipie />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router