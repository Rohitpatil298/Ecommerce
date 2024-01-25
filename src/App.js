import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./Pages";

import mapProducts from "./Components/mapProducts";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/:id"
            element={<Products products={mapProducts} />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
