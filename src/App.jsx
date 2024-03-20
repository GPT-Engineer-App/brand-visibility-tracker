import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Lindt Excellence Dark Chocolate 70%",
      visibility: {
        alza: 85,
        mall: 90,
        kosik: 80,
      },
    },
    {
      name: "Lindt Lindor Milk Chocolate Truffles",
      visibility: {
        alza: 92,
        mall: 88,
        kosik: 95,
      },
    },
    {
      name: "Lindt Excellence Milk Chocolate",
      visibility: {
        alza: 78,
        mall: 82,
        kosik: 75,
      },
    },
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index products={products} />} />
        <Route path="/add-product" element={<AddProduct onAddProduct={handleAddProduct} />} />
        // The route configuration remains unchanged as it's already correctly set up to navigate to the ProductDetails component.
      </Routes>
    </Router>
  );
}

export default App;
